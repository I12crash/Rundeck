/*
 * Copyright 2013 SimplifyOps Inc, <http://simplifyops.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for
 * the specific language governing permissions and limitations under the License.
 */
/**
 * Represents a workflow
 */
function _wfTypeForStep(step){
    "use strict";
    if (typeof(step) != 'undefined') {
        if (step['exec']) {
            return 'command';
        } else if (step['jobref']) {
            return 'job';
        } else if (step['script']) {
            return 'script';
        } else if (step['scriptfile']) {
            return 'scriptfile';
        } else if (step['scripturl']) {
            return 'scripturl';
        } else if (step['type']) {//plugin
            if (step['nodeStep'] ) {
                return 'node-step-plugin plugin';
            } else if (null != step['nodeStep'] && !step['nodeStep'] ) {
                return 'workflow-step-plugin plugin';
            }else{
                return 'plugin';
            }
        }
    }
    return 'console';
}
function _wfStringForStep(step){
    "use strict";
    var string = "";
    if (typeof(step) != 'undefined') {
        if(step['description']){
            string = step['description'];
        }else if (step['exec']) {
//                        string+=' $ '+step['exec'];
            string = 'Command';
        } else if (step['jobref']) {
            string = (step['jobref']['group'] ? step['jobref']['group'] + '/' : '') + step['jobref']['name'];
        } else if (step['script']) {
            string = "Script";
        } else if (step['scriptfile']) {
            string = 'File';
        }else if (step['scripturl']) {
            string = 'URL';
        } else if (step['type']) {//plugin
            var title = "Plugin " + step['type'];
            if (step['nodeStep'] && RDWorkflow.nodeSteppluginDescriptions && RDWorkflow.nodeSteppluginDescriptions[step['type']]) {
                title = RDWorkflow.nodeSteppluginDescriptions[step['type']].title || title;
            } else if (!step['nodeStep'] && RDWorkflow.wfSteppluginDescriptions && RDWorkflow.wfSteppluginDescriptions[step['type']]) {
                title = RDWorkflow.wfSteppluginDescriptions[step['type']].title || title;
            }
            string = title;
        }
    }else{
        return "[?]";
    }
    return string;
}
var RDWorkflow = Class.create({
    workflow:null,
    initialize: function(wf,params){
        this.workflow=wf;
        Object.extend(this, params);
    },
    contextType: function (ctx) {
        if(typeof(ctx)=='string'){
            ctx= RDWorkflow.parseContextId(ctx);
        }
        var step = this.workflow[RDWorkflow.workflowIndexForContextId(ctx[0])];
        return _wfTypeForStep(step);
    },
    renderContextStepNumber: function (ctx) {
        if (typeof(ctx) == 'string') {
            ctx = RDWorkflow.parseContextId(ctx);
        }
        var string = '';
        string += RDWorkflow.stepNumberForContextId(ctx[0]);
        if (ctx.length > 1) {
//                string += "/" + ctx.slice(1).join("/")
        }
        string += ". ";
        return string;
    },
    renderContextString: function (ctx) {
        if(typeof(ctx)=='string'){
            ctx= RDWorkflow.parseContextId(ctx);
        }
        var step = this.workflow[RDWorkflow.workflowIndexForContextId(ctx[0])];
        return _wfStringForStep(step);
    }
});
/**
 * remove escaping and halt processing at any break chars, returns object with 'text' (unescaped text), 'bchar' (seen break char or null),
 * 'rest' (remaining escaped text after first seen breakchar or null)
 * @param input input
 * @param echar escape char (e.g. '\\')
 * @param chars chars to process as escaped
 * @param breakchars chars to halt processing
 * @returns {{text: string, bchar: *, rest: *}}
 */
RDWorkflow.unescape=function(input,echar,chars,breakchars){
    "use strict";
    var arr=[];
    var e=false;
    var i=0;
    var bchar=null;
    for(;i<input.length;i++){
        var c = input.charAt(i);
        if(c==echar){
            if(e){
                arr.push(echar);
                e=false;
            }else{
                e=true;
            }
        }else if(chars.indexOf(c)>=0){
            if(e){
                arr.push(c);
                e=false;
            }else if(breakchars.indexOf(c)>=0){
                bchar=c;
                break;
            }else{
                arr.push(c);
            }
        }else{
            if(e){
                arr.push(echar);
                e=false;
            }
            arr.push(c);
        }
    }
    return {text:arr.join(""),bchar:bchar,rest:i<=input.length-1?input.substring(i+1):null};
};
/**
 *
 * @param input
 * @param sep
 * @returns {Array}
 */
RDWorkflow.splitEscaped=function(input,sep){
    "use strict";
    var parts=[];

    var rest=input;
    while(rest){
        var result=RDWorkflow.unescape(rest,'\\',['\\','/'],[sep]);
        parts.push(result.text);
        rest=result.rest;
    }
    return parts;
};
/**
 * Returns array of step context strings given the context identifier
 * @param context
 * @returns {*}
 */
RDWorkflow.contextStringSeparator = '/';
RDWorkflow.parseContextId= function (context) {
    if (context == null) {
        return null;
    }
    //split context into project,type,object
    var t = RDWorkflow.splitEscaped(context,RDWorkflow.contextStringSeparator);
    return t.slice();
};

/**
 * Return the parameter string for the context id. If id is "1@abc=xyz,tyf=lmn", then returns "abc=xyz,tyf=lmn"
 * @param ctxid
 * @returns {*}
 */
RDWorkflow.paramsForContextId= function (ctxid) {
    var m = ctxid.match(/^(\d+)(e)?(@(.+))?$/);
    if (m[4]) {
        return m[4].replace(/\\([/@,=])/g, '$1');
    }
    return null;
}
;
RDWorkflow.isErrorhandlerForContextId= function (ctxid) {
    var m = ctxid.match(/^(\d+)(e)?(@.+)?$/);
    if (m[2] == 'e') {
        return true
    }
    return false;
}
;
RDWorkflow.stepNumberForContextId= function (ctxid) {
    var m = ctxid.match(/^(\d+)(e)?(@.+)?$/);
    if (m[1]) {
        return parseInt(m[1]);
    }
    return null;
};
RDWorkflow.workflowIndexForContextId = function (ctxid) {
    var m = RDWorkflow.stepNumberForContextId(ctxid);
    if (m!=null) {
        return m - 1;
    }
    return null;
};
/**
 * removes error handler/parameters from the context path
 * @param context
 */
RDWorkflow.cleanContextId = function (context) {
    var parts=RDWorkflow.parseContextId(context);
    for (var i=0;i<parts.length;i++){
        parts[i]=RDWorkflow.stepNumberForContextId(parts[i]);
    }
    return parts.join(RDWorkflow.contextStringSeparator);
};

/*
 * Copyright 2016 SimplifyOps, Inc. (http://simplifyops.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var TestHarness = function (name,data) {
    var self = this;
    self.name=name;
    var failed=0;
    var total=0;
    var NDX=Math.floor((Math.random() * 1024));
    var ident='js_test_'+NDX;
    var curPrefix='';
    self.compare=function(expect,val){
        "use strict";
        if(typeof(expect)!=typeof(val)){
            return false;
        }
        if(expect==null && val!=null || expect!=null && val==null){
            return false;
        }
        //todo: array and object compare
        if(expect!=null && val!=null && jQuery.type(expect)=='array' && jQuery.type(val)=='array'){
            if(expect.length!=val.length){
                return false;
            }
            for(var i=0;i<expect.length;i++){
                if(!self.compare(expect[i],val[i])){
                    return false;
                }
            }
            return true;
        }else if (expect!=null && val!=null && typeof(expect)=='object'){
            if(Object.keys(expect).length!=Object.keys(val).length){
                return false;
            }
            for(var p in expect){
                if(!self.compare(expect[p],val[p])){

                    return false;
                }
            }
            for(var p in val){
                if(!self.compare(expect[p],val[p])){
                    return false;
                }
            }
            return true;
        }
        return expect===val;
    };
    self.error=function(message){
        "use strict";
        jQuery('#'+ident).append(jQuery('<div class="js-test-failure"></div>').append(jQuery('<span class="text-danger"></span>').text(message)));
    };
    self.ok=function(msg){
        "use strict";
        jQuery('#'+ident).append(jQuery('<div></div>').append(jQuery('<span class="text-success"></span>').text("OK: " + msg)));
    };
    self.assert = function (msg, expect, val) {
        total++;
        if(null==expect && null==val && typeof(msg)!='string'){
            expect=true;
            val=msg;
            msg='(assert)';
        }else if(null==val && typeof(expect)=='string' && typeof(msg)=='boolean'){
            val=msg;
            msg=expect;
            expect=true;
        }
        if (!self.compare(expect,val)) {
            failed++;
            var message = "FAIL: " +curPrefix+ msg + ": expected: " + JSON.stringify(expect) + ", was: " + JSON.stringify(val);
            self.error(message);
            try{
                throw new Error("assert failed: "+message);
            }catch(e){
                console.log(e,e.stack);
            }
        } else {
            self.ok(curPrefix+msg);
        }
    };
    self.log = function (msg, data) {
        jQuery('#'+ident).append(jQuery('<div></div>').append(jQuery('<span class="text-' +
            'info"></span>').text("LOG: " + msg)));
        if(data){
            jQuery('#'+ident).append(jQuery('<div></div>').append(jQuery('<span class="text-info"></span>').text(data)));
        }
    };

    self.testMatrix=function(name,dataset,tester){
        "use strict";

        dataset.forEach(function (t,x) {
            var val2 = tester(t[0]);
            self.assert(messageTemplate(name,[JSON.stringify(t[0]),JSON.stringify(t[1]),x]), t[1], val2);
        });
    };
    self.holder={};
    self.prepare=function(){
        "use strict";

        if (typeof(window.Messages) == 'object') {
            self.holder['Messages']= Messages;
            var t={};
            for(var p in Messages){
                t[p]=p;
            }
            window.Messages=t;
        }
    };
    self.restore=function(){
        "use strict";
        window.Messages=self.holder['Messages'];
        self.holder={};
    };


    self.testAll = function () {
        self.prepare();
        jQuery(document.body).append(jQuery('<div id="'+ident+'" class="collapse in"></div>'));
        var jQuery2 = jQuery('#'+ident);
        self.log("Start: "+self.name);
        for (var i in self) {
            if (i.endsWith('Test')) {
                try {
                    curPrefix= i + ': ';
                    self[i].call(self, i + ': ');
                }catch(e){
                    self.assert('caught error running test: '+e, 'ok', 'exception');
                    console.log("error",e,e.stack);
                }
            }
        }
        curPrefix='';
        if(failed>0){
            jQuery2.prepend(jQuery('<div></div>').append(jQuery('<span class="text-danger"></span>').text("FAIL: " + failed+"/"+total+" assertions failed")));
        }else{
            jQuery2.collapse('hide');
            jQuery(document.body).append('<div></div>')
                .append('<span class="btn btn-link text-success" data-toggle="collapse" data-target="#'+ident+'">OK: '+total+' Tests Passed</span>')
        }
        self.restore();
    };
    for(var val in data){
        self[val]=data[val].bind(self);
    }

    jQuery(function () {
        self.testAll();
    });
};


/*
 * Copyright 2016 SimplifyOps, Inc. (http://simplifyops.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//= require workflow
//= require util/testing


jQuery(function () {
    "use strict";
    new TestHarness("workflow.test.js", {
        workflowTest: function () {

            this.assert("unescape", RDWorkflow.unescape('abc/123', '\\', ['\\', '/'], ['/']), {
                text: 'abc',
                bchar: '/',
                rest: '123'
            });
            this.assert("unescape", RDWorkflow.unescape('abc/123/456', '\\', ['\\', '/'], ['/']), {
                text: 'abc',
                bchar: '/',
                rest: '123/456'
            });
            this.assert("unescape", RDWorkflow.unescape('a\\/bc/123/456', '\\', ['\\', '/'], ['/']), {
                text: 'a/bc',
                bchar: '/',
                rest: '123/456'
            });
        },
        splitEscapedTest: function () {
            this.assert("splitEscaped", RDWorkflow.splitEscaped('a\\/bc/123/456', '/'), ['a/bc', '123', '456']);
            this.assert("splitEscaped", RDWorkflow.splitEscaped('a\\/b@c/1,2=3/4\\\\56', '/'), ['a/b@c', '1,2=3', '4\\56']);

        },
        isErrorhandlerForContextIdTest: function () {
            this.assert(RDWorkflow.isErrorhandlerForContextId('1e@blah=c') === true);
            this.assert(RDWorkflow.isErrorhandlerForContextId('2') === false);
            this.assert(RDWorkflow.isErrorhandlerForContextId('2@node=a') === false);
            this.assert(RDWorkflow.isErrorhandlerForContextId('2e') === true);
            this.assert(RDWorkflow.isErrorhandlerForContextId('2e@blah=c') === true);

        },
        paramsForContextIdTest: function () {
            this.assert(RDWorkflow.paramsForContextId('2') === null);
            this.assert(RDWorkflow.paramsForContextId('2@node=a') === 'node=a');
            this.assert(RDWorkflow.paramsForContextId('2@node\\=a') === 'node=a');
            this.assert(RDWorkflow.paramsForContextId('2e') === null);
            this.assert(RDWorkflow.paramsForContextId('2e@blah=c') === 'blah=c');

        },
        stepNumberForContextIdTest: function () {
            this.assert(RDWorkflow.stepNumberForContextId('1e@blah=c') === 1);
            this.assert(RDWorkflow.stepNumberForContextId('2') === 2);
            this.assert(RDWorkflow.stepNumberForContextId('2@node=a') === 2);
            this.assert(RDWorkflow.stepNumberForContextId('2e') === 2);
            this.assert(RDWorkflow.stepNumberForContextId('2e@blah=c') === 2);

        },
        workflowIndexForContextIdTest: function () {
            this.assert(RDWorkflow.workflowIndexForContextId('1e@blah=c') === 0);
            this.assert(RDWorkflow.workflowIndexForContextId('2') === 1);
            this.assert(RDWorkflow.workflowIndexForContextId('2@node=a') === 1);
            this.assert(RDWorkflow.workflowIndexForContextId('2e') === 1);
            this.assert(RDWorkflow.workflowIndexForContextId('2e@blah=c') === 1);

        },
        parseContextIdTest: function () {
            //parse context id
            this.assert("parseContextId", RDWorkflow.parseContextId('1'), ['1']);
            this.assert("parseContextId", RDWorkflow.parseContextId('1/1'), ['1', '1']);
            this.assert("parseContextId", RDWorkflow.parseContextId('1/1/1'), ['1', '1', '1']);
            this.assert("parseContextId", RDWorkflow.parseContextId('1/2/3'), ['1', '2', '3']);
            this.assert("parseContextId", RDWorkflow.parseContextId('1e@abc/2/3'), ['1e@abc', '2', '3']);
            this.assert("parseContextId", RDWorkflow.parseContextId('1/2e@asdf=xyz/3'), ['1', '2e@asdf=xyz', '3']);
            this.assert("parseContextId", RDWorkflow.parseContextId('2@node=crub\\/dub-1/1'), ['2@node=crub/dub-1', '1']);


        },
        cleanContextIdTest: function () {
            //clean context id
            this.assert(RDWorkflow.cleanContextId('1/2/3') === '1/2/3', 'wrong value');
            this.assert(RDWorkflow.cleanContextId('1e@abc/2/3') === '1/2/3', 'wrong value');
            this.assert(RDWorkflow.cleanContextId('1/2e@asdf=xyz/3') === '1/2/3', 'wrong value');


        },
        stepPluginDescriptionsTest: function () {
            var orig = RDWorkflow.nodeSteppluginDescriptions;
            var orig2 = RDWorkflow.wfSteppluginDescriptions;
            RDWorkflow.nodeSteppluginDescriptions = {};
            RDWorkflow.wfSteppluginDescriptions = {};
            RDWorkflow.nodeSteppluginDescriptions = {
                "example-node-step": {
                    "title": "blah"
                }
            };
            //render string, with descriptions
            var wf1 = new RDWorkflow([{
                "type": "example-node-step",
                "nodeStep": true,
                "configuration": {"example": "whatever"}
            }]);
            this.assert(wf1.renderContextString("1") === "blah");

            RDWorkflow.wfSteppluginDescriptions = {
                "example-node-step": {
                    "title": "blah"
                }
            };
            var wf2 = new RDWorkflow([{
                "type": "example-node-step",
                "nodeStep": false,
                "configuration": {"example": "whatever"}
            }]);
            this.assert(wf2.renderContextString("1") === "blah");

            RDWorkflow.nodeSteppluginDescriptions = {};
            RDWorkflow.wfSteppluginDescriptions = {};
            //render string, missing descriptions
            var wf3 = new RDWorkflow([{
                "type": "example-node-step",
                "nodeStep": true,
                "configuration": {"example": "whatever"}
            }]);
            this.assert(wf3.renderContextString("1") === "Plugin example-node-step");

            var wf4 = new RDWorkflow([{
                "type": "example-node-step",
                "nodeStep": false,
                "configuration": {"example": "whatever"}
            }]);
            this.assert(wf4.renderContextString("1") === "Plugin example-node-step");

            RDWorkflow.nodeSteppluginDescriptions = orig;
            RDWorkflow.wfSteppluginDescriptions = orig;
        }
    });
});


