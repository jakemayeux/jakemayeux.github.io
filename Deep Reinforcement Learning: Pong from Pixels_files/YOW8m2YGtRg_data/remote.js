(function(g){var window=this;var mva=function(a,b){var c=[];g.wl(b,function(a){var b;try{b=g.nn.prototype.o.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.t(b)?g.ii(b)&&c.push(a):c.push(a)},a);
return c},nva=function(a,b){var c=mva(a,b);
(0,g.L)(c,function(a){g.nn.prototype.remove.call(this,a)},a)},m9=function(a,b){g.B_.call(this,g.M("YTP_MDX_TITLE"),0,a,b);
this.X=a;this.F={};this.V(a,"onMdxReceiversChange",this.H);this.V(a,"presentingplayerstatechange",this.H);this.H()},ova=function(){var a=g.fw;
nva(a,a.g.Nd(!0))},pva=function(a){return a.H?a.F+((0,g.D)()-a.A)/1E3:a.F},n9=function(a){g.$i("cloudview",a)},o9=function(a){g.nv.call(this,"ScreenServiceProxy");
this.Tc=a;this.o=[];this.o.push(this.Tc.$_s("screenChange",(0,g.A)(this.SQ,this)));this.o.push(this.Tc.$_s("onlineScreenChange",(0,g.A)(this.nN,this)))},qva=function(a){n9("setApiReady_ "+a);
g.v("yt.mdx.remote.cloudview.apiReady_",a,void 0)},p9=function(){return g.x("yt.mdx.remote.cloudview.instance_")},rva=function(a){g.Qs[a]&&(a=g.Qs[a],(0,g.L)(a,function(a){g.Os[a]&&delete g.Os[a]}),a.length=0)},q9=function(){return g.x("yt.mdx.remote.connection_")},r9=function(a){g.v("yt.mdx.remote.connectData_",a,void 0)},sva=function(a){g.v("yt.mdx.remote.currentScreenId_",a,void 0)},s9=function(){return g.x("yt.mdx.remote.currentScreenId_")},u9=function(){if(!t9){var a=g.x("yt.mdx.remote.screenService_");
t9=a?new o9(a):null}return t9},v9=function(a){g.v("yt.mdx.remote.cloudview.initializing_",a,void 0)},w9=function(){return!!g.x("yt.mdx.remote.cloudview.apiReady_")},x9=function(a){n9("setCastInstalled_ "+a);
g.hw("yt-remote-cast-installed",a)},y9=function(a){g.$i("cloudview",a)},tva=function(a,b){p9().init(a,b)},z9=function(){return!!g.iw("yt-remote-cast-installed")},uva=function(){n9("dispose");
var a=p9();a&&a.dispose();g.v("yt.mdx.remote.cloudview.instance_",null,void 0);qva(!1);g.Ss(A9);A9.length=0},vva=function(){var a=window.document.createElement("a");
g.ko(a,"https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.mc(a)},wva=function(a,b){var c=window.document.createElement("script");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
c.src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js";var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},xva=function(a){var b=g.Ns();
if(b)if(b.clear(a),a)rva(a);else for(var c in g.Qs)rva(c)},B9=function(){return g.x("yt.mdx.remote.channelParams_")||{}},D9=function(a){var b=q9();
r9(null);a||sva("");g.v("yt.mdx.remote.connection_",a,void 0);C9&&((0,g.L)(C9,function(b){b(a)}),C9.length=0);
b&&!a?g.Vs("yt-remote-connection-change",!1):!b&&a&&g.Vs("yt-remote-connection-change",!0)},yva=function(){return g.x("yt.mdx.remote.connectData_")},E9=function(){var a=s9();
if(!a)return null;var b=u9().Sd();return g.Rl(b,a)},zva=function(a,b){x9(!0);
v9(!1);tva(a,function(a){a?(qva(!0),g.Ts("yt-remote-cast2-api-ready")):(y9("Failed to initialize cast API."),x9(!1),g.jw("yt-remote-cast-available"),g.jw("yt-remote-cast-receiver"),uva());b(a)})},Ava=function(){return z9()?p9()?p9().getCastSession():(y9("getCastSelector: Cast is not initialized."),null):(y9("getCastSelector: Cast API is not installed!"),null)},Bva=function(){var a=vva(),b=window.document.getElementById(a),c=b&&g.Gc(b,"loaded");
c||b&&!c||(b=wva(a,function(){g.Gc(b,"loaded")||(g.Hc(b,"loaded","true"),g.Ts(a),g.mk(g.ya(xva,a),0))}))},Cva=function(a){return(0,g.N)(a,function(a){return{key:a.id,
name:a.name}})},Dva=function(){if(g.loa){var a=2,b=g.Ea(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;g.Ja("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",g.Ga,c)}},G9=function(a,b){s9();
E9()&&E9();sva(a.id);var c=new g.UO(F9,a,B9());c.connect(b,yva());c.subscribe("beforeDisconnect",function(a){g.Vs("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){q9()&&(q9(),D9(null))});
D9(c)},H9=function(){var a=g.ay();
if(!a)return null;var b=u9().Sd();return g.Rl(b,a)},I9=function(a){g.$i("remote",a)},J9=function(){var a=q9();
return!!a&&3!=a.getProxyState()},K9=function(){w9()?p9().stopSession():y9("stopSession called before API ready.");
var a=q9();a&&(a.disconnect(1),D9(null))},Eva=function(){var a;
a=u9().Tc.$_gos();var b=E9();b&&q9()&&(g.Ql(a,b)||a.push(b));return Cva(a)},M9=function(a,b){g.Ms.call(this);
this.g=0;this.B=a;this.D=[];this.C=new g.li;this.A=this.o=null;this.H=(0,g.A)(this.wL,this);this.F=(0,g.A)(this.Dk,this);this.G=(0,g.A)(this.vL,this);this.J=(0,g.A)(this.KL,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.jt,this),Fva(this))):c=3;0!=c&&(b?this.jt(c):g.mk((0,g.A)(function(){this.jt(c)},this),0));
var d=Ava();d&&L9(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},N9=function(a){return new g.ge(a.B.getPlayerContextData())},Gva=function(a,b,c,d,e){var f=N9(a),k=e||f.listId;
d=d||0;var l={videoId:b,currentIndex:d};g.ke(f,b,d);g.t(c)&&(g.ie(f,c),l.currentTime=c);g.t(k)&&(l.listId=k);O9(a,"setPlaylist",l);e||P9(a,f)},Fva=function(a){(0,g.L)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.D.push(this.B.subscribe(a,g.ya(this.HN,a),this))},a)},Hva=function(a){(0,g.L)(a.D,function(a){this.B.unsubscribeByKey(a)},a);
a.D.length=0},Q9=function(a,b){50>a.C.Cc()&&g.ni(a.C,b)},R9=function(a,b,c){var d=N9(a);
g.ie(d,c);-1E3!=d.g&&(d.g=b);P9(a,d)},O9=function(a,b,c){a.B.sendMessage(b,c)},P9=function(a,b){Hva(a);
a.B.setPlayerContextData(g.le(b));Fva(a)},L9=function(a,b){a.A&&(a.A.removeUpdateListener(a.H),a.A.removeMediaListener(a.F),a.Dk(null));
a.A=b;a.A&&(S9("Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.H),a.A.addMediaListener(a.F),a.A.media.length&&a.Dk(a.A.media[0]))},Iva=function(a){var b=a.o.media,c=a.o.customData;
if(b&&c){var d=N9(a);b.contentId!=d.videoId&&S9("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;g.ie(d,a.o.getEstimatedTime());P9(a,d)}else S9("No cast media video. Ignoring state update.")},S9=function(a){g.$i("CP",a)},T9=function(a,b,c){return(0,g.A)(function(a){this.bc("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.bc("Retrying "+b+" using MDx browser channel."),O9(this,b,c))},a)},Jva=function(a){var b=!1;
p9()||(a=new g.gM(a),a.subscribe("yt-remote-cast2-availability-change",function(a){g.hw("yt-remote-cast-available",a);g.Vs("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){n9("onReceiverSelected: "+a.friendlyName);
g.hw("yt-remote-cast-receiver",a);g.Vs("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){n9("onReceiverResumed: "+a.friendlyName);
g.hw("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){n9("onSessionChange: "+g.hj(a));
a||g.jw("yt-remote-cast-receiver");g.Vs("yt-remote-cast2-session-change",a)}),g.v("yt.mdx.remote.cloudview.instance_",a,void 0),b=!0);
n9("cloudview.createSingleton_: "+b);return b},Kva=function(){var a=0<=g.Od.search(/\ (CrMo|Chrome|CriOS)\//);
return g.Mp||a},U9=function(a,b){w9()?p9().setConnectedScreenStatus(a,b):y9("setConnectedScreenStatus called before ready.")},Lva=function(){n9("clearCurrentReceiver");
g.jw("yt-remote-cast-receiver")},Mva=function(){if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
if(a){Dva();a({command:"cast.sender.init"});return}}if(window.chrome)if(Dva(),a=window.navigator.userAgent,0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")&&window.navigator.presentation){var a="",b=g.Ca();55<=b?a="55":50<=b&&(a="50");g.Ja("//www.gstatic.com/eureka/clank"+a+g.Ha,g.Ga)}else g.Ka(0);else g.Ga()},Nva=function(a){a?(g.hw("yt-remote-session-app",a.app),g.hw("yt-remote-session-name",a.name)):(g.jw("yt-remote-session-app"),g.jw("yt-remote-session-name"));
g.v("yt.mdx.remote.channelParams_",a,void 0)},Ova=function(){var a=B9();
if(g.Kb(a)){var a=g.$x(),b=g.iw("yt-remote-session-name")||"",c=g.iw("yt-remote-session-app")||"",a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};g.v("yt.mdx.remote.channelParams_",a,void 0)}},Pva=function(){var a=H9();
a?(I9("Resume connection to: "+g.hj(a)),G9(a,0)):(g.iy(),Lva(),I9("Skipping connecting because no session screen found."))},Qva=function(a){I9("remote.onCastSessionChange_: "+g.hj(a));
if(a){var b=E9();b&&b.id==a.id?U9(b.id,"YouTube TV"):(b&&K9(),G9(a,1))}else q9()&&K9()},Rva=function(){var a=Eva(),b=E9();
b||(b=H9());return g.Ee(a,function(a){return b&&g.ej(b,a.key)?!0:!1})},Sva=function(){var a=g.iw("yt-remote-cast-receiver");
return a?a.friendlyName:null},Tva=function(a,b,c,d){Kva()?Jva(b)&&(v9(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?zva(a,c):(window.__onGCastApiAvailable=function(b,d){b?zva(a,c):(y9("Failed to load cast API: "+d),x9(!1),v9(!1),g.jw("yt-remote-cast-available"),g.jw("yt-remote-cast-receiver"),uva(),c(!1))},d?window.spf?window.spf.script.load("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):Bva():Mva())):n9("Cannot initialize because not running Chrome")},
Uva=function(a){this.port=this.A="";
this.g="/api/lounge";this.o=!0;a=a||window.document.location.href;var b=g.If(a)||"";b&&(this.port=":"+b);this.A=g.Hf(a)||"";a=g.Od;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.lc(a,"10.0")&&(this.o=!1))},V9=function(a){g.W.call(this,{K:"div",
Y:"ytp-remote",R:[{K:"div",Y:"ytp-remote-display-status",R:[{K:"div",Y:"ytp-remote-display-status-icon",R:[g.Ai()]},{K:"div",Y:"ytp-remote-display-status-text",R:["{{statustext}}"]},{K:"div",Y:"ytp-remote-display-status-receiver",R:["{{receiver}}"]}]}]});this.g=new g.qD(this,250);g.K(this,this.g);this.A=a;this.V(a,"presentingplayerstatechange",this.B);Vva(this,g.rG(a))},Vva=function(a,b){if(3==a.A.Xa()){var c;
c=g.H(b,128)?g.M("YTP_MDX_STATUS_ERROR"):b.qb()||g.H(b,4)?g.M("YTP_MDX_STATUS_PLAYING"):g.M("YTP_MDX_STATUS_CONNECTED");var d=a.A.Vc("remote","currentReceiver");a.update({statustext:c,receiver:d.name});a.g.show()}else g.sD(a.g)},W9=function(a,b,c){g.J.call(this);
this.H=a;this.X=b;b.addEventListener("onVolumeChange",this.yn,this);b.addEventListener("onCaptionsTrackListChanged",this.pz,this);b.addEventListener("captionschanged",this.dz,this);b.addEventListener("captionssettingschanged",this.zs,this);b.addEventListener("videoplayerreset",this.Gk,this);b.addEventListener("mdxautoplaycancel",this.av,this);this.C=!1;this.g=c;c.subscribe("proxyStateChange",this.Ez,this);c.subscribe("remotePlayerChange",this.Fk,this);c.subscribe("remoteQueueChange",this.Gk,this);
c.subscribe("autoplayUpNext",this.az,this);c.subscribe("previousNextChange",this.Bz,this);c.subscribe("nowAutoplaying",this.uz,this);c.subscribe("autoplayDismissed",this.Zy,this);this.suggestion=null;this.D=new g.sI(64);this.o=new g.Rz(this.OA,500,this);g.K(this,this.o);this.A=new g.Rz(this.PA,1E3,this);g.K(this,this.A);this.B={};this.G=new g.Rz(this.dB,1E3,this);g.K(this,this.G);this.F=new g.Uz(this.KS,1E3,this);g.K(this,this.F);this.J=g.y;this.zs();this.Gk();this.Fk()},X9=function(a,b){var c=a.H,
d=a.X.getVideoData().lengthSeconds;
c.H=b||0;c.g.U("progresssync",b,d)},Wva=function(a){X9(a,0);
a.o.stop();Y9(a,new g.sI(64))},a$=function(a,b){if(Z9(a)&&!a.C){var c=null;
b&&(c={style:a.X.il()},g.Qb(c,b));a.g.IA($9(a),c);a.B=N9(a.g).o}},b$=function(a,b){var c=a.X.Xf();
c?Gva(a.g,$9(a),b,c.Qd(),c.listId.toString()):Gva(a.g,$9(a),b);Y9(a,new g.sI(1))},Xva=function(a,b){if(b){var c=a.X.Vc("captions","tracklist",{yx:1});
c&&c.length?(a.X.Fe("captions","track",b),a.C=!1):(a.X.al("captions"),a.C=!0)}else a.X.Fe("captions","track",{})},Z9=function(a){return N9(a.g).videoId==$9(a)},$9=function(a){return a.X.getVideoData().videoId},Y9=function(a,b){a.A.stop();
var c=a.D;if(!g.yI(c,b)){var d=g.H(b,2);if(d!=g.H(a.D,2)){var e=a.X;(e=g.uY(e.app,e.playerType||1))&&g.rX(e,d)}a.D=b;Yva(a.H,c,b)}},c$=function(){var a=Rva();
!a&&z9()&&Sva()&&(a={key:"cast-selector-receiver",name:Sva()});return a},Zva=function(){var a=Eva();
z9()&&g.iw("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},$va=function(a){var b={device:"Desktop",
app:"youtube-desktop"};g.fw&&ova();g.cy();F9||(F9=new Uva,g.ky()&&(F9.g="/api/loungedev"));C9||(C9=g.x("yt.mdx.remote.deferredProxies_")||[],g.v("yt.mdx.remote.deferredProxies_",C9,void 0));Ova();var c=u9();if(!c){var d=new g.PF(F9);g.v("yt.mdx.remote.screenService_",d,void 0);c=u9();Tva(a,d,function(a){a?s9()&&U9(s9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){g.Vs("yt-remote-receiver-availability-change")})},!(!b||!b.loadCastApiSetupScript))}b&&!g.x("yt.mdx.remote.initialized_")&&
(g.v("yt.mdx.remote.initialized_",!0,void 0),I9("Initializing: "+g.rb(b)),d$.push(g.Rs("yt-remote-cast2-availability-change",function(){g.Vs("yt-remote-receiver-availability-change")})),d$.push(g.Rs("yt-remote-cast2-receiver-selected",function(){r9(null);
g.Vs("yt-remote-auto-connect","cast-selector-receiver")})),d$.push(g.Rs("yt-remote-cast2-receiver-resumed",function(){g.Vs("yt-remote-receiver-resumed","cast-selector-receiver")})),d$.push(g.Rs("yt-remote-cast2-session-change",Qva)),d$.push(g.Rs("yt-remote-connection-change",function(a){a?U9(s9(),"YouTube TV"):H9()||(U9(null,null),Lva())})),a=B9(),b.isAuto&&(a.id+="#dial"),g.cg("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,I9(" -- with channel params: "+g.rb(a)),
Nva(a),c.start(),s9()||Pva())},e$=function(){z9()?p9()?w9()?(n9("Requesting cast selector."),p9().requestSession()):(n9("Wait for cast API to be ready to request the session."),A9.push(g.Rs("yt-remote-cast2-api-ready",e$))):y9("requestCastSelector: Cast is not initialized."):y9("requestCastSelector: Cast API is not installed!")},f$=function(a){g.xv.call(this,a);
this.A={key:g.Pl(),name:g.M("YTP_MDX_MY_COMPUTER")};this.C=null;this.D=[];this.J=this.o=null;this.G=[this.A];this.B=this.A;this.F=new g.sI(64);this.H=0;var b=g.oY(a).C;b&&(b=b.A&&b.A.g)&&(b=new m9(a,b),g.K(this,b));b=new V9(a);g.K(this,b);g.KY(a,b.element,5)},Yva=function(a,b,c){a.F=c;
a.g.U("presentingplayerstatechange",new g.fd(c,b))},g$=function(a,b){if(b.key!=a.B.key)if(b.key==a.A.key)K9();
else{a.B=b;var c;c=a.g.getPlaylistId();var d=a.g.getVideoData().videoId;if(c||d){var e,f=a.g.Xf();if(f){e=[];for(var k=0;k<f.getLength();k++)e[k]=f.Xb(k).videoId}else e=[a.g.getVideoData().videoId];c={videoIds:e,listId:c,videoId:d,index:Math.max(a.g.AB(),0),currentTime:a.g.getCurrentTime()}}else c=null;I9("Connecting to: "+g.rb(b));"cast-selector-receiver"==b.key?(r9(c||null),c=c||null,w9()?p9().setLaunchParams(c):y9("setLaunchParams called before ready.")):!c&&J9()&&s9()==b.key?g.Vs("yt-remote-connection-change",
!0):(K9(),r9(c||null),c=u9().Sd(),(c=g.Rl(c,b.key))&&G9(c,1))}};
g.p(m9,g.B_);m9.prototype.H=function(){var a=this.X.Vc("remote","receivers");a&&1<a.length&&!this.X.Vc("remote","quickCast")?(this.F=g.df(a,this.B,this),g.D_(this,(0,g.N)(a,this.B)),a=this.X.Vc("remote","currentReceiver"),g.C_(this,this.B(a)),this.enable(!0)):this.enable(!1)};
m9.prototype.B=function(a){return a.key};
m9.prototype.Me=function(a){return"cast-selector-receiver"==a?g.M("YTP_MDX_CAST_SELECTOR"):this.F[a].name};
m9.prototype.fd=function(a){g.B_.prototype.fd.call(this,a);this.X.Fe("remote","currentReceiver",this.F[a]);this.A.Ub()};
g.C(o9,g.nv);g.h=o9.prototype;g.h.Sd=function(a){return this.Tc.$_gs(a)};
g.h.contains=function(a){return!!this.Tc.$_c(a)};
g.h.get=function(a){return this.Tc.$_g(a)};
g.h.start=function(){this.Tc.$_st()};
g.h.uo=function(a,b,c){this.Tc.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Tc.$_r(a,b,c)};
g.h.ho=function(a,b,c,d){this.Tc.$_un(a,b,c,d)};
g.h.P=function(){for(var a=0,b=this.o.length;a<b;++a)this.Tc.$_ubk(this.o[a]);this.o.length=0;this.Tc=null;o9.O.P.call(this)};
g.h.SQ=function(){this.U("screenChange")};
g.h.nN=function(){this.U("onlineScreenChange")};
var t9=null,A9=[],C9=null,F9=null;g.C(M9,g.Ms);g.h=M9.prototype;g.h.play=function(){1==this.g?(this.o?this.o.play(null,g.y,T9(this,"play")):O9(this,"play"),R9(this,1,g.je(N9(this))),this.U("remotePlayerChange")):Q9(this,this.play)};
g.h.pause=function(){1==this.g?(this.o?this.o.pause(null,g.y,T9(this,"pause")):O9(this,"pause"),R9(this,2,g.je(N9(this))),this.U("remotePlayerChange")):Q9(this,this.pause)};
g.h.oB=function(a){if(1==this.g){if(this.o){var b=N9(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.qb()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.o.seek(c,g.y,T9(this,"seekTo",{newTime:a}))}else O9(this,"seekTo",{newTime:a});R9(this,3,a);this.U("remotePlayerChange")}else Q9(this,g.ya(this.oB,a))};
g.h.stop=function(){if(1==this.g){this.o?this.o.stop(null,g.y,T9(this,"stopVideo")):O9(this,"stopVideo");var a=N9(this);a.index=-1;a.videoId="";g.he(a);P9(this,a);this.U("remotePlayerChange")}else Q9(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=N9(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.A)(function(){S9("set receiver volume: "+d)},this),(0,g.A)(function(){this.bc("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.A)(function(){S9("set receiver muted: "+b)},this),(0,g.A)(function(){this.bc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);O9(this,"setVolume",e)}c.muted=b;c.volume=a;P9(this,c)}else Q9(this,g.ya(this.setVolume,a,b))};
g.h.IA=function(a,b){if(1==this.g){var c=N9(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.rb(b.style),g.Qb(d,c.o));O9(this,"setSubtitlesTrack",d);P9(this,c)}else Q9(this,g.ya(this.IA,a,b))};
g.h.ht=function(a,b){if(1==this.g){O9(this,"setAudioTrack",{videoId:a,audioTrackId:b.Jc.id});var c=N9(this);c.audioTrackId=b.Jc.id;P9(this,c)}else Q9(this,g.ya(this.ht,a,b))};
g.h.nB=function(a,b){if(1==this.g){if(a&&b){var c=N9(this);g.ke(c,a,b);P9(this,c)}O9(this,"previous")}else Q9(this,g.ya(this.nB,a,b))};
g.h.mB=function(a,b){if(1==this.g){if(a&&b){var c=N9(this);g.ke(c,a,b);P9(this,c)}O9(this,"next")}else Q9(this,g.ya(this.mB,a,b))};
g.h.Pv=function(){1==this.g?O9(this,"dismissAutoplay"):Q9(this,this.Pv)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.U("proxyStateChange",a,this.g)}M9.O.dispose.call(this)};
g.h.P=function(){Hva(this);this.B=null;this.C.clear();L9(this,null);M9.O.P.call(this)};
g.h.jt=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.U("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)g.oi(this.C).apply(this);else 3==a&&this.dispose()}};
g.h.HN=function(a,b){this.U(a,b)};
g.h.wL=function(a){if(!a)this.Dk(null),L9(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=N9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)S9("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,P9(this,b)}};
g.h.Dk=function(a){S9("Cast media: "+!!a);this.o&&this.o.removeUpdateListener(this.G);if(this.o=a)this.o.addUpdateListener(this.G),Iva(this),this.U("remotePlayerChange")};
g.h.vL=function(a){a?(Iva(this),this.U("remotePlayerChange")):this.Dk(null)};
g.h.KL=function(){var a=Ava();a&&L9(this,a)};
g.h.bc=function(a){g.$i("CP",a)};
var d$=[];g.h=Uva.prototype;g.h.Ih=function(a,b,c){var d=this.g;if(g.t(c)?c:this.o)d="https://"+this.A+this.port+this.g;return g.Rf(d+a,b||{})};
g.h.gt=function(a,b,c,d){c={format:"JSON",method:"POST",context:this,timeout:5E3,withCredentials:!1,Jb:g.ya(this.MQ,c,!0),onError:g.ya(this.LQ,d),ed:g.ya(this.NQ,d)};b&&(c.Nb=b,c.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.ny(a,c)};
g.h.MQ=function(a,b,c,d){b?a(d):a({text:c.responseText})};
g.h.LQ=function(a,b){a(Error("Request error: "+b.status))};
g.h.NQ=function(a){a(Error("request timed out"))};
g.p(V9,g.W);V9.prototype.B=function(a){Vva(this,a.state)};
g.C(W9,g.J);g.h=W9.prototype;
g.h.P=function(){W9.O.P.call(this);this.o.stop();this.A.stop();this.J();this.X.removeEventListener("onVolumeChange",this.yn,this);this.X.removeEventListener("onCaptionsTrackListChanged",this.pz,this);this.X.removeEventListener("captionschanged",this.dz,this);this.X.removeEventListener("videoplayerreset",this.Gk,this);this.X.removeEventListener("captionssettingschanged",this.zs,this);this.X.removeEventListener("mdxautoplaycancel",this.av,this);this.g.unsubscribe("proxyStateChange",this.Ez,this);this.g.unsubscribe("remotePlayerChange",
this.Fk,this);this.g.unsubscribe("remoteQueueChange",this.Gk,this);this.g.unsubscribe("autoplayUpNext",this.az,this);this.g.unsubscribe("previousNextChange",this.Bz,this);this.g.unsubscribe("nowAutoplaying",this.uz,this);this.g.unsubscribe("autoplayDismissed",this.Zy,this);this.g=this.H=null};
g.h.eC=function(a,b){2==this.g.g||(Z9(this)?this.iH.apply(this,arguments):this.eH.apply(this,arguments))};
g.h.dz=function(a){this.eC("control_subtitles_set_track",g.Kb(a)?null:a)};
g.h.zs=function(){var a=this.X.Vc("captions","track");g.Kb(a)||a$(this,a)};
g.h.eH=function(a,b){var c=Array.prototype.slice.call(arguments,1);switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b$(this,this.X.getCurrentTime());break;case "control_seek":b$(this,c[0]);break;case "control_subtitles_set_track":a$(this,c[0]);break;case "control_set_audio_track":c=c[0],Z9(this)&&this.g.ht($9(this),c)}};
g.h.iH=function(a,b){if(1081!=N9(this.g).g||"control_seek"!=a){var c=Array.prototype.slice.call(arguments,1);switch(a){case "control_toggle_play_pause":N9(this.g).qb()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.F.Mi(c[0],c[1]);break;case "control_subtitles_set_track":a$(this,c[0]);break;case "control_set_audio_track":c=c[0],Z9(this)&&this.g.ht($9(this),c)}}};
g.h.yn=function(a){if(Z9(this)){this.g.unsubscribe("remotePlayerChange",this.Fk,this);var b=Math.round(a.volume);a=!!a.muted;var c=N9(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.G.start();this.g.subscribe("remotePlayerChange",this.Fk,this)}};
g.h.pz=function(){g.Kb(this.B)||Xva(this,this.B);this.C=!1};
g.h.Ez=function(a,b){this.A.stop();2==b&&this.PA()};
g.h.Fk=function(){if(Z9(this)){this.o.stop();var a=N9(this.g);switch(a.g){case 1081:Y9(this,new g.sI(8));break;case 1:this.OA();Y9(this,new g.sI(8));break;case 1083:case 3:Y9(this,new g.sI(9));break;case 0:Y9(this,new g.sI(2));this.F.stop();X9(this,this.X.getVideoData().lengthSeconds);break;case 1082:Y9(this,new g.sI(4));break;case 2:Y9(this,new g.sI(4));X9(this,g.je(a));break;case -1:Y9(this,new g.sI(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.M("YTP_MDX_PLAYER_ERROR")},Y9(this,
new g.sI(128,a))}var a=N9(this.g).o,b=this.B;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.B=a,Xva(this,a));a=N9(this.g);-1==a.volume||Math.round(this.X.getVolume())==a.volume&&this.X.De()==a.muted||this.G.isActive()||this.dB()}else Wva(this)};
g.h.Bz=function(){this.X.U("mdxpreviousnextchange")};
g.h.Gk=function(){Z9(this)||Wva(this)};
g.h.av=function(){this.g.Pv()};
g.h.az=function(a){a&&(a=g.ny("/watch_queue_ajax",{method:"GET",Nc:{action_get_watch_queue_item:1,video_id:a},Jb:(0,g.A)(this.HO,this)}))&&(this.J=(0,g.A)(a.abort,a))};
g.h.HO=function(a,b){var c=new g.RV({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.X.U("mdxautoplayupnext",c)};
g.h.uz=function(a){(0,window.isNaN)(a)||this.X.U("mdxnowautoplaying",a)};
g.h.Zy=function(){this.X.U("mdxautoplaycanceled")};
g.h.KS=function(a,b){-1==N9(this.g).g?b$(this,a):b&&this.g.oB(a)};
g.h.dB=function(){if(Z9(this)){var a=N9(this.g);this.X.removeEventListener("onVolumeChange",this.yn,this);a.muted?this.X.mute():this.X.Ag();this.X.setVolume(a.volume);this.X.addEventListener("onVolumeChange",this.yn,this)}};
g.h.OA=function(){this.o.stop();if(!this.g.la()){var a=N9(this.g);a.qb()&&Y9(this,new g.sI(8));X9(this,g.je(a));this.o.start()}};
g.h.PA=function(){this.A.stop();this.o.stop();var a=this.g.B.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.A.start()};
g.C(f$,g.xv);g.h=f$.prototype;g.h.create=function(){$va("embedded"==g.Y(this.g).g);this.D.push(g.Rs("yt-remote-before-disconnect",this.sL,this));this.D.push(g.Rs("yt-remote-connection-change",this.RN,this));this.D.push(g.Rs("yt-remote-receiver-availability-change",this.Cz,this));this.D.push(g.Rs("yt-remote-auto-connect",this.PN,this));this.D.push(g.Rs("yt-remote-receiver-resumed",this.ON,this));this.Cz()};
g.h.load=function(){this.g.Bp();f$.O.load.call(this);this.C=new W9(this,this.g,this.o);var a;a=(a=yva())?a.currentTime:0;var b=J9()?new M9(q9(),void 0):null;0==a&&b&&(a=g.je(N9(b)));0!=a&&(this.H=a||0,this.g.U("progresssync",a,void 0));Yva(this,this.F,this.F);g.Q2(this.g.app,6)};
g.h.unload=function(){this.g.U("mdxautoplaycanceled");this.B=this.A;g.Ld(this.C,this.o);this.o=this.C=null;f$.O.unload.call(this);g.Q2(this.g.app,5)};
g.h.P=function(){g.Ss(this.D);f$.O.P.call(this)};
g.h.nl=function(a,b){this.loaded&&this.C.eC.apply(this.C,arguments)};
g.h.JG=function(){return this.loaded?this.C.suggestion:null};
g.h.Af=function(){return this.o?N9(this.o).Af:!1};
g.h.hasNext=function(){return this.o?N9(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.H};
g.h.pS=function(){var a=N9(this.o),b=this.g.getVideoData(),c=this.g.Cd(),d=b.clipEnd,b=b.clipStart,e=this.getCurrentTime(),f=a.getDuration(),k;k=a.H?a.B+((0,g.D)()-a.A)/1E3:a.B;var l=1>=pva(a)-this.getCurrentTime(),m=a.J,n=pva(a),a=0<a.C?a.C+((0,g.D)()-a.A)/1E3:a.C;return{allowSeeking:c,clipEnd:d,clipStart:b,current:e,displayedStart:-1,duration:f,ingestionTime:k,isPeggedToLive:l,loaded:m,seekableEnd:n,seekableStart:a}};
g.h.qS=function(){this.o&&this.o.mB()};
g.h.rS=function(){this.o&&this.o.nB()};
g.h.sL=function(a){1==a&&(this.J=this.o?N9(this.o):null)};
g.h.RN=function(){var a=J9()?new M9(q9(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.J=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.Kd(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.J)&&a.videoId==this.g.getVideoData().videoId&&this.g.xB(a.videoId,g.je(a)));this.g.U("videodatachange","newdata",this.g.getVideoData(),3)};
g.h.Cz=function(){this.G=[this.A].concat(Zva());var a=c$()||this.A;g$(this,a);this.g.ya("onMdxReceiversChange")};
g.h.PN=function(){var a=c$();g$(this,a)};
g.h.ON=function(){this.B=c$()};
g.h.oS=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.G;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?e$():g$(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.G.length&&"cast-selector-receiver"==this.G[1].key?(b&&e$(),!0):!1}};
g.h.sS=function(){O9(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.ze=function(){return!1};
window._exportCheck==g.Ba&&g.v("ytmod.player.remote",f$,void 0);})(_yt_player);
