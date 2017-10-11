//# sourceMappingURL=version.js.map
var RundeckVersion=function(b){var a=this;a.versionString=b.versionString;a.versionData={};a.versionDate=b.versionDate;a.colorIdentity=b&&b.colorIdentity?b.colorIdentity:"minorPoint";a.nameIdentity=b&&b.nameIdentity?b.nameIdentity:"majorMinor";a.iconIdentity=b&&b.iconIdentity?b.iconIdentity:"minorPoint";a.appId=b&&b.appId?b.appId:"Rundeck";a.serverName=b&&b.serverName?b.serverName:null;a.csscolors="BlueViolet CadetBlue Chocolate CornflowerBlue Crimson DodgerBlue FireBrick ForestGreen Fuchsia Goldenrod HotPink Indigo LimeGreen Magenta Maroon MidnightBlue Navy Olive OrangeRed Purple RoyalBlue SaddleBrown SeaGreen Sienna SlateBlue SteelBlue Teal Tomato Violet".split(" ");
a.glyphicons="bell book briefcase bullhorn camera cutlery flag flash gift globe headphones leaf music paperclip phone plane pushpin tower glass knight tent apple lamp piggy-bank grain sunglasses".split(" ");a.names="Americano;Cafe Au Lait;Cafe Bonbon;Cafecito;Cafe Cubano;Caffe Latte;Cafe Mocha;Cappuccino;Caramel Latte;Coconut Latte;Con Panna;Doppio Espresso;Dry Cappuccino;Espresso Breve;Eye Opener;Hammerhead;Macchiato;Pumpkin Spice Latte;Ristretto;Solo Espresso;Toffee Latte;Turkish Coffee;Vanilla Latte;Viennese Espresso".split(";");
a.splitVersion=function(a){var c=String(a).split(" "),c=1<c.length?c[0]:a;a=String(c).split("-");var b=a[0].split("."),c={version:c};c.major=0<b.length?parseInt(b[0]):0;c.minor=1<b.length?parseInt(b[1]):0;c.majorMinor=10*c.major+c.minor;c.point=2<b.length?parseInt(b[2]):0;c.minorPoint=20*c.minor+c.point;var b=1,d="";1<a.length&&/^\d+$/.test(a[1])?(b=parseInt(a[1]),d=2<a.length?a.slice(2).join("-"):""):1<a.length&&(d=a.slice(1).join("-"));c.tag=d;c.release=b;c.pointRelease=20*c.point+b;c.minorPointRelease=
100*c.minor+20*c.point+b;c.full=100*c.major+20*c.minor+c.point;return c};a.splitUUID=function(a){var c=String(a).split("-");0<c.length&&c[0].substring(0,2);a={uuid:a};for(var b=0;b<c.length;b++)a["uuid"+b]=parseInt(c[b].substring(0,2),16),a["hexuuid"+b]=c[b];for(var c=c.join(""),d=[],e=0;6*(e+1)<c.length;e++)a["6let"+b]=c.substring(6*e,6*(e+1)),d.push(c.substring(6*e,6*(e+1)));a.sixes=d;return a};a.inList=function(a,c){return a[c%a.length]};a.colorForVersion=function(b){return a.inList(a.csscolors,
b)};a.nameForVersion=function(b){return a.inList(a.names,b)};a.iconForVersion=function(b){return a.inList(a.glyphicons,b)};a.data=function(){return a.versionData};a.color=function(){return a.colorForVersion(a.versionData[a.colorIdentity])};a.name=function(){return a.nameForVersion(a.versionData[a.nameIdentity])};a.icon=function(){return a.iconForVersion(a.versionData[a.iconIdentity])};a.text=function(){return[a.name(),a.color(),a.icon()].join(" ").toLowerCase().replace(/[^a-z]/g," ")};a.versionString?
a.versionData=a.splitVersion(a.versionString):b.serverUuid&&(a.versionData=a.splitUUID(b.serverUuid))};