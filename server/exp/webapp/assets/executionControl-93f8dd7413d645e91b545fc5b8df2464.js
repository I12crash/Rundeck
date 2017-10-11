//# sourceMappingURL=executionControl.js.map
var FollowControl=Class.create({parentElement:null,executionId:null,fileloadId:null,fileloadPctId:null,fileloadProgressId:null,viewoptionsCompleteId:null,cmdOutputErrorId:null,outfileSizeId:null,autoscroll:!0,targetElement:null,cmdoutputtbl:null,cmdoutspinner:null,runningcmd:null,finishedExecutionAction:!0,appendtop:null,collapseCtx:null,showFinalLine:null,groupOutput:null,colTime:null,colNode:null,colStep:null,lineCount:0,lastrow:null,contextIdCounter:0,contextStatus:null,lastTBody:null,ctxBodySet:null,
ctxBodyFinalSet:null,ctxGroupSet:null,ctxGroupTbodies:null,taildelay:1,isrunning:!1,starttime:null,updatepagetitle:!1,extraParams:null,totalCount:0,totalDuration:0,killjobhtml:"",killjobauth:!1,execData:null,nodemode:!1,browsemode:!1,tailmode:!1,refresh:!1,truncateToTail:!1,lastlines:20,maxLastLines:500,iconUrl:"/images/icon",smallIconUrl:"/images/icon-small",appLinks:null,workflow:null,multiworkflow:null,initialize:function(a,b,d){this.executionId=a;this.targetElement=b;Object.extend(this,{appendtop:{value:!1,
changed:!1},collapseCtx:{value:!0,changed:!1},showFinalLine:{value:!0,changed:!1},groupOutput:{value:!0},colTime:{value:!0},colNode:{value:!0},colStep:{value:!0},ctxBodySet:[],ctxBodyFinalSet:[],ctxGroupSet:[],ctxGroupTbodies:{},contextStatus:{},extraParams:{},execData:{},appLinks:{}});Object.extend(this,d);this.refresh=this.tailmode;this._init();this.dobind&&this.bindActions(b);this.readyMode()},_init:function(){this.lastTBody=this.cmdoutputtbl=null;this.ctxBodySet=[];this.ctxBodyFinalSet=[];this.ctxGroupSet=
[];this.runningcmd={count:0,entries:[]};this.lastrow=null;this.contextIdCounter=0;this.contextStatus={};this.ctxGroupTbodies={}},bindActions:function(a){var b=this;a&&($(a).select("a.out_setmode_tail").each(function(a){Event.observe(a,"click",function(a){Event.stop(a);b.nodemode?(b.setMode("tail"),b.reload()):(b.setMode("tail"),b.setGroupOutput(!1))})}),$(a).select("a.out_setmode_browse").each(function(a){Event.observe(a,"click",function(a){Event.stop(a);b.nodemode?(b.setMode("browse"),b.reload()):
(b.setMode("browse"),b.setGroupOutput(!0))})}),$(a).select("a.out_setmode_node").each(function(a){Event.observe(a,"click",function(a){Event.stop(a);b.setMode("node");b.reload()})}),$(a).select(".out_setmode_toggle").each(function(a){Event.observe(a,"change",function(c){Event.stop(c);b.setMode(a.down("input").checked?"node":"tail");b.reload()})}),$(a).select(".log-wrap-toggle").each(function(a){Event.observe(a,"change",function(c){Event.stop(c);b.setLogWrap(a.down("input").checked?!0:!1)})}),$(a).select(".opt_append_top_true").each(function(a){a.onclick=
null;Event.observe(a,"click",function(a){b.setOutputAppendTop(!0)})}),$(a).select(".opt_append_top_false").each(function(a){a.onclick=null;Event.observe(a,"click",function(a){b.setOutputAppendTop(!1)})}),$(a).select(".opt_display_col_time").each(function(a){a.onclick=null;Event.observe(a,"click",function(c){b.setColTime(a.checked)})}),$(a).select(".opt_display_col_node").each(function(a){a.onclick=null;Event.observe(a,"click",function(c){b.setColNode(a.checked)})}),$(a).select(".opt_display_col_step").each(function(a){a.onclick=
null;Event.observe(a,"click",function(c){b.setColStep(a.checked)})}),$(a).select(".opt_auto_scroll_true").each(function(a){a.onclick=null;Event.observe(a,"click",function(c){b.setOutputAutoscroll(a.checked)})}),$(a).select(".opt_group_output").each(function(a){a.onclick=null;Event.observe(a,"click",function(c){b.setGroupOutput(a.checked)})}),$(a).select(".opt_collapse_ctx").each(function(a){a.onclick=null;Event.observe(a,"click",function(c){b.setCollapseCtx(a.checked)})}),$(a).select(".opt_show_final").each(function(a){a.onclick=
null;Event.observe(a,"click",function(c){b.setShowFinalLine(a.checked)})}),$(a).select(".opt_last_lines_dec").each(function(a){a.onmousedown=null;Event.observe(a,"mousedown",function(a){Event.stop(a);b.modifyLastlines(-5)})}),$(a).select(".opt_last_lines_inc").each(function(a){a.onmousedown=null;Event.observe(a,"mousedown",function(a){Event.stop(a);b.modifyLastlines(5)})}),$(a).select(".opt_last_lines_val").each(function(a){a.onchange=null;Event.observe(a,"change",function(c){b.updateLastlines(a.value)})}),
$(a).select(".opt_update_every_dec").each(function(a){a.onmousedown=null;Event.observe(a,"mousedown",function(a){Event.stop(a);b.modifyTaildelay(-1)})}),$(a).select(".opt_update_every_inc").each(function(a){a.onmousedown=null;Event.observe(a,"mousedown",function(a){Event.stop(a);b.modifyTaildelay(1)})}),$(a).select(".opt_update_every_val").each(function(a){a.onchange=null;Event.observe(a,"change",function(c){b.updateTaildelay(a.value)})}),$(a).select(".act_cancel").each(function(a){a.onclick=null;
Event.observe(a,"click",function(a){b.docancel()})}))},setMode:function(a){this.tailmode="tail"==a;this.browsemode="browse"==a;this.nodemode="node"==a;this.refresh=this.tailmode=this.tailmode||!(this.browsemode||this.nodemode);this.readyMode()},setLogWrap:function(a){$(this.cmdoutputtbl)&&(a?jQuery($(this.cmdoutputtbl)).removeClass("no-wrap"):jQuery($(this.cmdoutputtbl)).addClass("no-wrap"))},readyTail:function(){var a=this;$(this.targetElement).select(".opt_mode_tail").each(Element.show);$(this.targetElement).select(".out_setmode_tail").each(function(a){(a=
$(a).up("li"))&&a.addClassName("active")});$(this.targetElement).select(".opt_last_lines_val").each(function(b){b.value=a.lastlines});$(this.targetElement).select(".opt_update_every_val").each(function(b){b.value=a.taildelay})},readyMode:function(){var a=this;this.setGroupOutput(this.browsemode||this.nodemode);this.targetElement&&$(this.targetElement)&&($(this.targetElement).select(".obs_node_false").each(this.nodemode?Element.hide:Element.show),$(this.targetElement).select(".obs_node_true").each(this.nodemode?
Element.show:Element.hide),$(this.targetElement).select(".opt_mode").each(Element.hide),$(this.targetElement).select(".out_setmode").each(function(a){a.removeClassName("active");(a=$(a).up("li"))&&a.removeClassName("active")}),this.tailmode?this.readyTail():this.browsemode?($(this.targetElement).select(".opt_mode_browse").each(Element.show),$(this.targetElement).select(".out_setmode_browse").each(function(a){a.addClassName("active")}),$(this.targetElement).select(".opt_append_top_true").each(function(b){a.appendtop.value?
b.addClassName("active"):b.removeClassName("active")}),$(this.targetElement).select(".opt_append_top_false").each(function(b){a.appendtop.value?b.removeClassName("active"):b.addClassName("active")}),$(this.targetElement).select(".opt_group_output").each(function(b){(b.checked=a.groupOutput.value)?b.up("label").addClassName("active"):b.up("label").removeClassName("active")}),$(this.targetElement).select(".opt_collapse_ctx").each(function(b){(b.checked=a.collapseCtx.value)?b.up("label").addClassName("active"):
b.up("label").removeClassName("active")}),$(this.targetElement).select(".opt_show_final").each(function(b){(b.checked=a.showFinalLine.value)?b.up("label").addClassName("active"):b.up("label").removeClassName("active")})):this.nodemode&&$(this.targetElement).select(".out_setmode_node").each(function(a){(a=$(a).up("li"))&&a.addClassName("active")}))},appendCmdOutputError:function(a){$(this.cmdOutputErrorId)&&(appendText($(this.cmdOutputErrorId),a),$(this.cmdOutputErrorId).show())},_log:function(a){$("log")&&
(appendText($("log"),a),appendHtml($("log"),"<br>"))},updateTaildelay:function(a){a=parseInt(a);isNaN(a)&&(a=1);60<a?a=60:0>a&&(a=0);this.taildelay=a;$("taildelayvalue").value=this.taildelay;return!1},modifyTaildelay:function(a){var b=parseInt($("taildelayvalue").value);a=parseInt(a);this.updateTaildelay(b+a)},updateLastlines:function(a){a=parseInt(a);isNaN(a)&&(a=20);a>this.maxLastLines?a=this.maxLastLines:5>a&&(a=5);this.lastlines=a;$("lastlinesvalue").value=this.lastlines;if(!this.isrunning){this.isrunning=
!0;var b=this;setTimeout(function(){b.loadMoreOutput(b.executionId,0)},50)}return!1},modifyLastlines:function(a){var b=parseInt($("lastlinesvalue").value);a=parseInt(a);this.updateLastlines(b+a);this.readyTail()},isAppendTop:function(){return this.appendtop.value?!0:!1},getLineCount:function(){return this.lineCount},setCollapseCtx:function(a){this.collapseCtx.value!=a&&(this.collapseCtx.changed=!0,this.collapseCtx.value=a);this.collapseCtx.value?(this.ctxBodySet._each(Element.hide),this.ctxBodyFinalSet._each(this.showFinalLine.value?
Element.show:Element.hide),$$(".expandicon,tr.contextRow").each(function(a){a.addClassName("closed");a.removeClassName("opened")})):(this.ctxBodySet._each(Element.show),this.ctxBodyFinalSet._each(Element.show),$$(".expandicon,tr.contextRow").each(function(a){a.removeClassName("closed");a.addClassName("opened")}));this.setCtxCollapseDisplay(a)},setCtxCollapseDisplay:function(a){$("ctxcollapseLabel")&&(a?$("ctxcollapseLabel").addClassName("active"):$("ctxcollapseLabel").removeClassName("active"));$("ctxshowlastlineoption")&&
(a?$("ctxshowlastlineoption").show():$("ctxshowlastlineoption").hide())},setGroupOutput:function(a){this.groupOutput.value!=a&&(this.groupOutput.value=a);this.ctxGroupSet.each(this.groupOutput.value?Element.show:Element.hide);this.groupOutput.value&&this.collapseCtx.value?(this.ctxBodySet.each(Element.hide),this.ctxBodyFinalSet.each(this.showFinalLine.value?Element.show:Element.hide)):(this.ctxBodySet.each(Element.show),this.ctxBodyFinalSet.each(Element.show));this.groupOutput.value?($(this.cmdoutputtbl)&&
($(this.cmdoutputtbl).removeClassName("collapse_time"),$(this.cmdoutputtbl).addClassName("collapse_node"),$(this.cmdoutputtbl).addClassName("collapse_stepnum")),$("ctxcollapseLabel")&&$("ctxcollapseLabel").show(),this.setCtxCollapseDisplay(this.collapseCtx.value)):($(this.cmdoutputtbl)&&(this.setColTime(this.colTime.value),this.setColNode(this.colNode.value),this.setColStep(this.colStep.value)),$("ctxcollapseLabel")&&$("ctxcollapseLabel").hide(),$("ctxshowlastlineoption")&&$("ctxshowlastlineoption").hide());
$$(".obs_grouped_true").each(a?Element.show:Element.hide);$$(".obs_grouped_false").each(a?Element.hide:Element.show);$("ctxshowgroupoption")&&(a?$("ctxshowgroupoption").addClassName("active"):$("ctxshowgroupoption").removeClassName("active"))},setShowFinalLine:function(a){this.showFinalLine.value!=a&&(this.showFinalLine.changed=!0,this.showFinalLine.value=a);var b=this;this.ctxBodyFinalSet.each(function(a,c){!b.showFinalLine.value&&b.collapseCtx.value&&b.ctxBodySet[c]&&!Element.visible(b.ctxBodySet[c])?
Element.hide(a):Element.show(a)});$("ctxshowlastlineoption")&&(a?$("ctxshowlastlineoption").addClassName("active"):$("ctxshowlastlineoption").removeClassName("active"))},setColTime:function(a){$(this.cmdoutputtbl)&&(a?$(this.cmdoutputtbl).removeClassName("collapse_time"):$(this.cmdoutputtbl).addClassName("collapse_time"));this.colTime.value=a},setColNode:function(a){$(this.cmdoutputtbl)&&(a?$(this.cmdoutputtbl).removeClassName("collapse_node"):$(this.cmdoutputtbl).addClassName("collapse_node"));this.colNode.value=
a},setColStep:function(a){$(this.cmdoutputtbl)&&(a?$(this.cmdoutputtbl).removeClassName("collapse_stepnum"):$(this.cmdoutputtbl).addClassName("collapse_stepnum"));this.colStep.value=a},setOutputAppendTop:function(a){this.appendtop.value!=a&&(this.appendtop.changed=!this.appendtop.changed);$("appendTopLabel")&&(a?$("appendTopLabel").addClassName("active"):$("appendTopLabel").removeClassName("active"));$("appendBottomLabel")&&(a?$("appendBottomLabel").removeClassName("active"):$("appendBottomLabel").addClassName("active"));
this.appendtop.value=a;this.isrunning||this.reverseOutputTable(this.cmdoutputtbl)},clearTable:function(a){a&&($(this.parentElement).removeChild(a),this.cmdoutputtbl=null);this._init()},createTable:function(a){var b=new Element("table");b.setAttribute("border","0");b.setAttribute("width","100%");b.setAttribute("height","auto");b.setAttribute("cellSpacing","0");b.setAttribute("cellPadding","0");b.addClassName("execoutput");a&&b.setAttribute("id",a);this.tailmode||($(b).addClassName("collapse_node"),
$(b).addClassName("collapse_stepnum"));a=new Element("tbody");b.appendChild(a);$(this.parentElement).appendChild(b);$(this.parentElement).show();return b},showLoading:function(a,b){this.fileloadId&&$(this.fileloadId)&&($(this.fileloadId).show(),setText($(this.fileloadPctId),null!=a?a:""),null!=b&&$(this.fileloadProgressId)&&($(this.fileloadProgressId).show(),$(this.fileloadProgressId).down(".progress-bar").style.width=b+"%"),b&&setText($(this.fileloadPctId),(null!=a?a:"")+b+"%"))},hideLoading:function(){this.fileloadId&&
$(this.fileloadId)&&$(this.fileloadId).hide()},appendCmdOutput:function(a){var b=!1;!this.isAppendTop()&&this.isAtBottom()&&this.autoscroll&&(b=!0);if(this.refresh&&this.cmdoutputtbl&&a.lastlinesSupported&&this.truncateToTail)try{this.clearTable(this.cmdoutputtbl)}catch(g){this._log(g)}this.cmdoutputtbl||(this.cmdoutputtbl=this.createTable(this.tableId),this.setColNode(this.colNode.value),this.setColStep(this.colStep.value),this.setColTime(this.colTime.value));this.runningcmd||(this.runningcmd={},
this.runningcmd.count=0,this.runningcmd.entries=[]);if(a.error)this.appendCmdOutputError(a.error),this.finishedExecution(),0===this.runningcmd.count&&$(this.cmdoutputtbl).hide(),$(this.viewoptionsCompleteId).hide();else{this.runningcmd.id=a.id;this.runningcmd.offset=a.offset;this.runningcmd.completed=a.completed;this.runningcmd.jobcompleted=a.execCompleted;this.runningcmd.jobstatus=a.execState;this.runningcmd.statusString=a.statusString;this.runningcmd.failednodes=a.hasFailedNodes;this.runningcmd.percent=
a.percentLoaded;this.runningcmd.pending=a.pending;var d=$A(a.entries),c=this.countTableRows(this.cmdoutputtbl);if(null!=d&&0<d.length){for(var e=0;e<d.length;e++)this.genDataRow(d[e],this.cmdoutputtbl),c++;this.refresh&&c>this.lastlines&&!a.lastlinesSupported&&this.truncateToTail&&this.removeTableRows(this.cmdoutputtbl,c-this.lastlines);b&&!this.runningcmd.jobcompleted&&this.scrollToBottom()}this.lineCount+=d.length;if("function"==typeof this.onAppend)this.onAppend();if(this.runningcmd.completed&&
this.runningcmd.jobcompleted)$(this.viewoptionsCompleteId)&&null!=a.totalSize&&($(this.outfileSizeId)&&setText($(this.outfileSizeId),a.totalSize+" bytes"),$(this.viewoptionsCompleteId).show()),this.finishDataOutput(),this.finishedExecution(this.runningcmd.jobstatus,this.runningcmd.statusString);else{var f=this,b=this.tailmode&&0<this.taildelay?1E3*this.taildelay:50;null!=this.runningcmd.pending&&(b=this.tailmode&&0<this.taildelay?5E3*this.taildelay:5E3);setTimeout(function(){f.loadMoreOutput(f.runningcmd.id,
f.runningcmd.offset)},b);this.runningcmd.jobcompleted&&!this.runningcmd.completed?(this.jobFinishStatus(this.runningcmd.jobstatus,this.runningcmd.statusString),d=b=null,null!=this.runningcmd.percent?(d=Math.ceil(this.runningcmd.percent),b="Loading Output... "):null!=this.runningcmd.pending&&(b=this.runningcmd.pending),this.showLoading(b,d)):this.runningcmd.jobcompleted||this.runningcmd.completed||(null!=this.runningcmd.pending?this.showLoading(this.runningcmd.pending):this.hideLoading());this.runningcmd.jobcompleted&&
this.viewoptionsCompleteId&&$(this.viewoptionsCompleteId)&&null!=a.totalSize&&($(this.outfileSizeId)&&setText($(this.outfileSizeId),a.totalSize+" bytes"),$(this.viewoptionsCompleteId).show())}}},finishDataOutput:function(){if("function"==typeof this.onLoadComplete)this.onLoadComplete();null==this.lastTBody&&null!=this.cmdoutputtbl&&0<this.cmdoutputtbl.tBodies.length&&(this.lastTBody=this.cmdoutputtbl.tBodies[0]);if(null!=this.lastTBody&&null!=this.lastTBody.getAttribute("id")&&0<this.lastTBody.rows.length)try{var a=
this.lastTBody.rows[this.isAppendTop()?0:this.lastTBody.rows.length-1];this.lastTBody.removeChild(a);var b=new Element("tbody");b.setAttribute("id","final"+this.lastTBody.getAttribute("id"));this.isAppendTop()?this.cmdoutputtbl.insertBefore(b,this.lastTBody):this.cmdoutputtbl.appendChild(b);b.appendChild(a);this.ctxBodyFinalSet.push(b);if(0==this.lastTBody.rows.length){$("ctxExp"+this.contextIdCounter);var d=$("ctxgroup"+this.contextIdCounter)}else d=$("ctxgroup"+this.contextIdCounter);d&&0<d.rows.length&&
($(d.rows[0]).addClassName("expandable"),$(d.rows[0]).addClassName("action"))}catch(c){this.appendCmdOutputError("finishDataOutput"+c)}0==this.lineCount&&jQuery("#"+this.parentElement+"_empty").show()},toggleDataBody:function(a){Element.visible("databody"+a)?($("databody"+a).hide(),$("ctxExp"+a).removeClassName("opened"),$("ctxExp"+a).addClassName("closed"),$("ctxExp"+a).up("tr.contextRow").removeClassName("opened"),$("ctxExp"+a).up("tr.contextRow").addClassName("closed"),$("finaldatabody"+a)&&(this.collapseCtx.value&&
this.showFinalLine.value?$("finaldatabody"+a).show():$("finaldatabody"+a).hide())):($("databody"+a).show(),$("ctxExp"+a).removeClassName("closed"),$("ctxExp"+a).addClassName("opened"),$("ctxExp"+a).up("tr.contextRow").removeClassName("closed"),$("ctxExp"+a).up("tr.contextRow").addClassName("opened"),$("finaldatabody"+a)&&$("finaldatabody"+a).show())},loadMoreOutput:function(a,b){return this.loadMoreOutputTail(a,b)},loadMoreOutputTail:function(a,b){var d=this.appLinks.tailExecutionOutput,c=this;if(this.isrunning){var e=
{offset:b,maxlines:this.maxLastLines};a&&(e.id=a);this.tailmode&&this.lastlines&&this.truncateToTail&&0==b&&(e.lastlines=this.lastlines);return jQuery.ajax({url:_genUrl(d,e)+this.extraParams,type:"post",dataType:"json",success:function(a,b,d){c.appendCmdOutput(a)},error:function(a,b,e){c.appendCmdOutputError("Error performing request (loadMoreOutputTail): "+d);c.finishedExecution()}})}this._stop&&(this._stop=null,"function"==typeof this._onStopCallback&&(e=this._onStopCallback,this._onStopCallback=
null,e()))},countTableRows:function(a){for(var b=0,d=0;d<a.tBodies.length;d++)for(var c=0;c<a.tBodies[d].rows.length;c++)$(a.tBodies[d].rows[0]).hasClassName("contextRow")||b++;return b},removeTableRows:function(a,b){for(var d=b,c=0;c<a.tBodies.length&&0<d;c++){console.log("tbody "+c+", original length: "+a.tBodies[c].rows.length);for(var e=0;e<a.tBodies[c].rows.length&&0<d;e++){var f=a.tBodies[c].rows[e];$(f).hasClassName("contextRow")||(a.tBodies[c].removeChild(f),d--,e--)}console.log("tbody "+
c+", new length: "+a.tBodies[c].rows.length);1==a.tBodies[c].rows.length&&$(a.tBodies[c].rows[0]).hasClassName("contextRow")&&(a.removeChild(a.tBodies[c]),c--)}console.log("removeTableRows, final count: "+d)},reverseOutputTable:function(a){try{if(this.appendtop.changed){for(var b=0;b<a.tBodies.length;b++)for(var d=a.tBodies[b],c=$A(d.rows),e=c.length,f=c[0],g=1;g<e;g++){var h=c[e-g];d.removeChild(h);d.insertBefore(h,f)}d=a;e=a.tBodies.length;f=a.tBodies[0];for(g=1;g<e;g++)if(h=a.tBodies[e-1],d.removeChild(h),
d.insertBefore(h,f),1==h.rows.length){var k=h.rows[0];$(k).hasClassName("contextRow")&&($(k).addClassName(this.isAppendTop()?"up":"down"),$(k).removeClassName(this.isAppendTop()?"down":"up"))}this.appendtop.changed=!1}}catch(l){this.appendCmdOutputError("reverseOutputTable "+l)}},isAtBottom:function(){return(document.documentElement.scrollHeight||document.body.scrollHeight)-(document.documentElement.scrollTop||document.body.scrollTop)<=1.1*(document.documentElement.clientHeight||document.body.clientHeight)},
scrollToBottom:function(){window.scrollTo(0,document.documentElement.scrollHeight||document.body.scrollHeight)},genDataRowNodes:function(a,b){this.reverseOutputTable(b);var d=a.node;d||(d=this.execData.node);var c;this.ctxGroupTbodies[d]?c=this.ctxGroupTbodies[d]:(c=this.createNewNodeTbody(a,b,d),this.ctxGroupTbodies[d]=c);var e=$(c.insertRow(-1));this.configureDataRow(e,a,d);$("ctxCount"+d)&&(setText($("ctxCount"+d),""+c.rows.length+" lines"),"ERROR"!=a.level&&"SEVERE"!=a.level||$("ctxCount"+d).addClassName(a.level));
this.runningcmd.count++;this.lastrow=a;return e},createNewNodeTbody:function(a,b,d){var c=new Element("tbody");c.setAttribute("id","ctxgroup"+d);this.isAppendTop()?b.insertBefore(c,b.tBodies[0]):b.appendChild(c);this.ctxGroupSet.push(c);var c=$(c.insertRow(this.isAppendTop()?0:-1)),e=$(c.insertCell(0));e.setAttribute("id","ctxIcon"+d);c.addClassName("contextRow");this.isAppendTop()?c.addClassName("up"):c.addClassName("down");$(c).addClassName("expandable");$(c).addClassName("action");e.addClassName("icon");
e=$(c.insertCell(1));e.setAttribute("colSpan","4");if(null!=a.node&&""!=a.node){var f=new Element("span");f.addClassName("node");setText(f,a.node);e.appendChild(f)}a.stepctx&&this.workflow?this.workflow.renderContextString(a.stepctx):(c.addClassName("console"),appendHtml(e," <span class='console'>[console]</span>"));a=new Element("span");a.setAttribute("id","ctxCount"+d);a.setAttribute("count","0");a.addClassName("ctxcounter");setText(a," -");e.appendChild(a);a=$(c.insertCell(2));a.setAttribute("id",
"ctxExp"+d);a.addClassName("rowexpicon");a.addClassName("expandicon");var g=this;c.onclick=function(){g.toggleDataBody(d)};e=new Element("tbody");e.setAttribute("id","databody"+d);b.appendChild(e);Element.hide($(e));a.addClassName("closed");c.addClassName("closed");return e},createFinalContextTbody:function(a,b,d){try{var c=this.lastTBody.rows[this.isAppendTop()?0:this.lastTBody.rows.length-1];this.lastTBody.removeChild(c);var e=new Element("tbody");e.setAttribute("id","final"+this.lastTBody.getAttribute("id"));
this.isAppendTop()?b.insertBefore(e,this.lastTBody):b.appendChild(e);e.appendChild(c);this.ctxBodyFinalSet.push(e);this.showFinalLine.value?Element.show($(e)):this.groupOutput.value&&this.collapseCtx.value&&Element.hide($(e));if(0==this.lastTBody.rows.length){$("ctxExp"+this.contextIdCounter);var f=$("ctxgroup"+this.contextIdCounter)}else f=$("ctxgroup"+this.contextIdCounter);f&&0<f.rows.length&&($(f.rows[0]).addClassName("expandable"),$(f.rows[0]).addClassName("action"))}catch(g){this.appendCmdOutputError("createFinalContextTbody "+
g)}this.contextIdCounter++},createNewContextTbody:function(a,b,d){var c=new Element("tbody");c.setAttribute("id","ctxgroup"+d);this.isAppendTop()?b.insertBefore(c,b.tBodies[0]):b.appendChild(c);this.ctxGroupSet.push(c);this.groupOutput.value||c.hide();var e=$(c.insertRow(this.isAppendTop()?0:-1)),f=$(e.insertCell(0));f.setAttribute("id","ctxIcon"+d);e.addClassName("contextRow");this.isAppendTop()?e.addClassName("up"):e.addClassName("down");f.addClassName("icon");f=$(e.insertCell(1));f.setAttribute("colSpan",
"2");if(null!=a.node&&""!=a.node){var g=new Element("span");g.addClassName("node");setText(g,a.node);f.appendChild(g)}if(a.stepctx&&this.workflow){var h=this.workflow.renderContextString(a.stepctx);this.workflow.renderContextStepNumber(a.stepctx);g=new Element("span");g.addClassName("stepnum");g.title=h;setText(g,h);f.appendChild(g);var k=new Element("span");k.addClassName("stepident");setText(g,h);f.appendChild(k);this.multiworkflow&&this.multiworkflow.getStepInfoForStepctx(a.stepctx,function(a){setText(k,
a.stepident())})}else e.addClassName("console"),appendHtml(f," <span class='console'>[console]</span>");a=$(e.insertCell(2));a.setAttribute("id","ctxExp"+d);a.addClassName("rowexpicon");a.addClassName("expandicon");var l=this;e.onclick=function(){l.toggleDataBody(d)};f=new Element("tbody");this.isAppendTop()?b.insertBefore(f,c):b.appendChild(f);this.lastTBody=f;this.lastTBody.setAttribute("id","databody"+d);this.ctxBodySet.push(this.lastTBody);this.groupOutput.value&&this.collapseCtx.value?(Element.hide($(this.lastTBody)),
a.addClassName("closed"),e.addClassName("closed")):(a.addClassName("opened"),e.addClassName("opened"))},genDataRow:function(a,b){return this.nodemode?this.genDataRowNodes(a,b):this.genDataRowBrowse(a,b)},genDataRowBrowse:function(a,b){this.reverseOutputTable(b);var d=this.contextIdCounter;null==this.lastTBody&&(this.lastTBody=b.tBodies[0]);if(null==this.lastrow||this.lastrow.stepctx!=a.stepctx||this.lastrow.node!=a.node||this.lastrow.context!=a.context)null!=this.lastrow&&this.createFinalContextTbody(a,
b,d),d=this.contextIdCounter,this.createNewContextTbody(a,b,d);var c=$(this.lastTBody.insertRow(this.isAppendTop()?0:-1));this.configureDataRow(c,a,d);this.runningcmd.count++;this.lastrow=a;return c},configureDataRow:function(a,b,d){if("ERROR"==b.level||"SEVERE"==b.level)this.contextStatus[d]=b.level.toLowerCase();d=$(a.insertCell(0));d.addClassName("info");d.addClassName("time");var c=new Element("span");c.addClassName(b.level);setText(c,b.time);d.appendChild(c);b.absolute_time&&("function"==typeof moment&&
setText(c,MomentUtil.formatTime(b.absolute_time,"HH:mm:ss")),d.setAttribute("title",b.absolute_time));d=1;c=$(a.insertCell(d));d++;c.addClassName("node");var e=!1;this.lastrow&&void 0!=typeof this.lastrow.node&&b.node==this.lastrow.node?(c.addClassName("repeat"),a.addClassName("node-repeat")):b.node?(c.setAttribute("title",b.node),setText(c,b.node),e=!0,a.addClassName("node-new")):(c.addClassName("empty"),e=!0,a.addClassName("node-empty"));c=$(a.insertCell(d));d++;c.addClassName("stepnum");if((e||
!this.lastrow||this.lastrow.stepctx!=b.stepctx)&&b.stepctx&&this.workflow){var e=this.workflow.renderContextStepNumber(b.stepctx)+" "+this.workflow.renderContextString(b.stepctx),f=new Element("i");f.addClassName("rdicon icon-small "+this.workflow.contextType(b.stepctx));c.appendChild(f);c.appendChild(document.createTextNode(" "+e));c.setAttribute("title",b.stepctx);this.multiworkflow&&(c=jQuery(c),e=this.multiworkflow.getStepInfoForStepctx(b.stepctx),c.empty(),c.attr("title",null),c.attr("data-bind",
"template: {name: 'step-info-extended', data:$data, as: 'stepinfo'}"),ko.applyBindings(e,c[0]))}a=$(a.insertCell(d));a.addClassName("data");a.setAttribute("colspan","2");null!=b.loghtml?(setHtml(a,b.loghtml),a.addClassName("datahtml log_"+b.level.toLowerCase())):(d=b.log,""==d&&(d="\n"),setText(a,d),a.addClassName("log_"+b.level.toLowerCase()))},clearCmdOutput:function(){clearHtml($(this.parentElement));this.runningcmd=this.cmdoutspinner=this.cmdoutputtbl=null;var a=new Element("div");$(a).addClassName("commandFlowError");
$(a).setAttribute("style","display: none;");$(a).setAttribute("id","cmdoutputerror");$(a).hide();$(this.parentElement).appendChild(a)},beginExecution:function(){this.clearCmdOutput();$(this.parentElement).show();this.isrunning=!0},finishedExecution:function(a,b){if(this.finishedExecutionAction&&($("cmdoutspinner")&&$("cmdoutspinner").remove(),this.cmdoutspinner=null,this.isrunning=!1,this.fileloadId&&$(this.fileloadId)&&$(this.fileloadId).hide(),this.jobFinishStatus(a,b),"function"==typeof this.onComplete))this.onComplete()},
jobFinishStatus:function(a,b){if(null!=a){$("runstatus")&&setHtml($("runstatus"),"succeeded"==a?'<span class="exec-status succeed">Succeeded</span>':"aborted"==a?'<span class="exec-status warn">Killed</span>':'<span class="exec-status fail">Failed</span>');$$(".execstatus").each(function(b){setHtml(b,"succeeded"==a?'<span class="exec-status succeed">Succeeded</span>':"aborted"==a?'<span class="exec-status warn">Killed</span>':'<span class="exec-status fail">Failed</span>')});if($("jobInfo_"+this.executionId)){var d=
$("jobInfo_"+this.executionId).down(".exec-status.icon");if(d){var c="succeeded"==a?"succeed":"aborted"==a?"warn":"timedout"==a?"timedout":"failed-with-retry"==a?"retry":"failed"==a?"fail":"other";"succeed fail warn running retry timedout other".split(" ").each(function(a){$(d).removeClassName(a)});$(d).addClassName(c)}}this.updatepagetitle&&!/^\[/.test(document.title)&&(document.title=("succeeded"==a?"[OK] ":"aborted"==a?"[KILLED] ":"[FAILED] ")+document.title);$("cancelresult")&&$("cancelresult").hide()}},
beginFollowingOutput:function(a){if(this.isrunning||this.runningcmd&&this.runningcmd.completed)return!1;this.beginExecution();this.starttime=(new Date).getTime();this.lineCount=0;this.loadMoreOutput(a,0)},stopFollowingOutput:function(a){this.isrunning?(this._onStopCallback=a,this._stop=!0,this.isrunning=!1):"function"==typeof a&&a()},reload:function(){var a=this;this.stopFollowingOutput(function(){a.clearTable(a.cmdoutputtbl);a.beginFollowingOutput(a.executionId)})},updatecancel:function(a){},docancel:function(){var a=
this;return jQuery.ajax({type:"POST",url:this.appLinks.executionCancelExecution,dataType:"json",data:{id:this.executionId},beforeSend:_ajaxSendTokens.curry("exec_cancel_token"),success:function(b,d,c){a.updatecancel(b)},error:function(b,d,c){a.updatecancel({error:"Failed to kill Job: "+(b.responseJSON&&b.responseJSON.error?b.responseJSON.error:c)})}}).success(_ajaxReceiveTokens.curry("exec_cancel_token"))}});