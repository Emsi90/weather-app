(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){e.exports={loader:"Spinner__loader__3qv_p",loaderItem:"Spinner__loaderItem__ipI9A","loaderItem-1":"Spinner__loaderItem-1__Wb3kj","loaderItem-2":"Spinner__loaderItem-2__24dz-","loaderItem-3":"Spinner__loaderItem-3__2ZEdH","loaderItem-4":"Spinner__loaderItem-4__1Ryzy","loaderItem-5":"Spinner__loaderItem-5__2FLOj","loaderItem-6":"Spinner__loaderItem-6__2OZts","loaderItem-7":"Spinner__loaderItem-7__2ECAd","loaderItem-8":"Spinner__loaderItem-8__27iVZ","loaderItem-9":"Spinner__loaderItem-9__qr0iv","loaderItem-10":"Spinner__loaderItem-10___5o9z"}},13:function(e,t,a){e.exports=a(25)},19:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),i=a.n(o),l=(a(19),a(2)),s=a(3),c=a(5),m=a(4),p=a(6),u=a(7),d=a.n(u),h=a(8),_=a.n(h),g=a(11),f=a(12),I=function(e){var t="",a=null,n=null;return e.data&&e.error&&(console.log(e.data.main.temp),t=e.data.main.temp,a=new Date(1e3*e.data.sys.sunrise).toLocaleTimeString(),n=new Date(1e3*e.data.sys.sunset).toLocaleTimeString()),r.a.createElement("div",null,r.a.createElement("p",null,"Temperatura: ",t," \xb0C"),r.a.createElement("p",null,"Sunrise: ",a),r.a.createElement("p",null,"Sunset: ",n))},E=a(1),w=a.n(E),v=function(){return r.a.createElement("div",{className:w.a.loader},r.a.createElement("span",{className:w.a.loaderItem}),r.a.createElement("span",{className:w.a.loaderItem}),r.a.createElement("span",{className:w.a.loaderItem}),r.a.createElement("span",{className:w.a.loaderItem}),r.a.createElement("span",{className:w.a.loaderItem}),r.a.createElement("span",{className:w.a.loaderItem}),r.a.createElement("span",{className:w.a.loaderItem}),r.a.createElement("span",{className:w.a.loaderItem}),r.a.createElement("span",{className:w.a.loaderItem}))},S="64bd459b55ce780015ef29df99092a33",y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={cityName:"",countryCode:"",weatherInfo:null,error:!1,errorMsg:"",latitude:"",longitude:"",locationError:"",isLoading:!1},a.getWheatherData=function(){var e=!1;a.state.cityName&&a.state.countryCode?(a.setState({isLoading:!0}),fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a.state.cityName,",").concat(a.state.countryCode,"&appid=").concat(S,"&units=metric")).then(function(t){if(200===t.status)return t.json();e=!0}).then(function(t){return a.setState({isLoading:!1}),e?a.setState({errorMsg:"Nie ma informacji dla tych danych...",weatherInfo:null}):a.setState({weatherInfo:t,error:!1,errorMsg:""})}).catch(function(e){return e})):a.setState({error:!0})},a.getValue=function(e){a.setState(Object(f.a)({},e.target.name,e.target.value))},a.getLocationInfo=function(){var e=!1;a.setState({isLoading:!0}),fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a.state.latitude,"&lon=").concat(a.state.longitude,"&appid=").concat(S,"&units=metric")).then(function(t){if(200===t.status)return t.json();e=!0}).then(function(t){return a.setState({isLoading:!1}),e?a.setState({errorMsg:"Nie ma informacji dla tych danych...",weatherInfo:null}):a.setState({weatherInfo:t,error:!1,errorMsg:""})}).catch(function(e){return e})},a.loadPosition=Object(g.a)(_.a.mark(function e(){var t,n,r,o;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.getCurrentPosition();case 3:t=e.sent,n=t.coords,r=n.latitude,o=n.longitude,a.setState({latitude:r,longitude:o}),a.getLocationInfo(),console.log(a.state.latitude),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),a.setState({errorMsg:e.t0.message,weatherInfo:null});case 14:case"end":return e.stop()}},e,this,[[0,10]])})),a.getCurrentPosition=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(t,a){navigator.geolocation.getCurrentPosition(t,a,e)})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){this.state.weatherInfo&&console.log(this.state.weatherInfo);var e="";this.state.error?e=r.a.createElement("p",null,"Wpisz poprawne dane!"):this.state.errorMsg?e=r.a.createElement("p",null,this.state.errorMsg):this.state.locationError&&(e=r.a.createElement("p",null,this.state.locationError));var t=null;return t=this.state.isLoading?r.a.createElement(v,null):r.a.createElement(I,{data:this.state.weatherInfo,error:!this.state.errorMsg}),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"cityName",value:this.state.cityName,onChange:this.getValue}),r.a.createElement("input",{type:"text",name:"countryCode",value:this.state.countryCode,onChange:this.getValue}),r.a.createElement("button",{onClick:this.getWheatherData},"Get Weather"),r.a.createElement("button",{onClick:this.loadPosition},"Get Your Position"),e,t)}}]),t}(n.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:d.a.App},r.a.createElement("header",{className:d.a.AppHeader},r.a.createElement(y,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){e.exports={App:"App__App__3Ge-C",AppLogo:"App__AppLogo__k5SJE","App-logo-spin":"App__App-logo-spin__2zbnz",AppHeader:"App__AppHeader__3MRQK",AppLink:"App__AppLink__3EAhm"}}},[[13,2,1]]]);
//# sourceMappingURL=main.084a6e2a.chunk.js.map