//# sourceMappingURL=yellowfade.js.map
function doyft(a){yellowfade(a,0,1500,20,500,!1)}function doyftsuccess(a){yellowfade(a,0,1500,20,500,!1,[240,255,240])}function doyftdanger(a){yellowfade(a,0,1500,20,500,!1,[255,240,240])}function doyftg(a){yellowfade(a,0,1500,20,500,!1,null,[240,240,240])}function tohex(a){var b="0123456789ABCDEF".split("");return b[Math.round((a&240)/16)]+b[Math.round(a)%16]}
function yellowfade(a,b,h,g,k,l,d,f){1<b&&(b=1);d=null==d?[255,255,153]:d;f=null==f?[255,255,255]:f;for(var e="#",c=0;c<d.length;c++)e=d[c]!=f[c]?e+tohex(d[c]+(f[c]-d[c])*b):e+tohex(d[c]);$(a).style.background=e;l&&setText($(a),"bg: "+e+", perc: "+b+", time: "+h+", rate: "+g+", ramp: "+k);1>b&&(e=(b*h+1E3/g)/h,c=k,0<k&&(c=k-1E3/g,e=b),l&&appendText($(a),", newperc: "+e+", newramp: "+c+", delay: "+1E3/g),b="yellowfade('"+$(a).identify()+"',"+e+","+h+","+g+","+c+", "+l+",new Array("+d[0]+","+d[1]+","+
d[2]+"),new Array("+f[0]+","+f[1]+","+f[2]+"));",l&&(appendHtml($(a),"<br>"),appendText($(a),b)),setTimeout(b,1E3/g))};