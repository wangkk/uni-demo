
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/tabbar/index/index","pages/tabbar/message/message","pages/tabbar/mine/mine"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#007AFF","backgroundColor":"#007AFF"},"tabBar":{"color":"#666","selectedColor":"#007AFF","backgroundColor":"#F1F1F1","list":[{"pagePath":"pages/tabbar/index/index","iconPath":"static/icon_job.png","selectedIconPath":"static/icon_job_on.png","text":"首页"},{"pagePath":"pages/tabbar/message/message","text":"消息","iconPath":"static/icon_notice.png","selectedIconPath":"static/icon_notice_on.png"},{"pagePath":"pages/tabbar/mine/mine","iconPath":"static/icon_mine.png","selectedIconPath":"static/icon_mine_on.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"scsl-app","compilerVersion":"2.8.3","entryPagePath":"pages/tabbar/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/tabbar/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","navigationBarTitleText":"实测实量"}},{"path":"/pages/tabbar/message/message","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"待办消息"}},{"path":"/pages/tabbar/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});