(this.webpackJsonpusermap=this.webpackJsonpusermap||[]).push([[0],{19:function(e,t,a){e.exports=a(34)},24:function(e,t,a){},25:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),i=a.n(o),c=(a(24),a(5)),s=a(4),l=(a(25),a(2)),m=a(3),d=r.a.createContext();var u=function(){var e=Object(n.useContext)(d);return r.a.createElement("div",{className:"search",id:"search-input"},r.a.createElement("div",{className:"search__icon-menu"},r.a.createElement(l.a,{className:"icon",icon:m.a,onClick:function(){var e=window.innerWidth;document.querySelector(".container-menu").style.opacity="1",document.querySelector(".container-menu").style.visibility="visible",e>1200?document.querySelector(".menu").style.width="24%":e<1200&&e>900?document.querySelector(".menu").style.width="30%":e<900&&(document.querySelector(".menu").style.width="50%")}})),r.a.createElement("input",{value:null!==e.start.properties.name?e.start.properties.name:e.start.geometry.coordinates.join(","),id:"input-start",placeholder:"Choose a place...",type:"text",className:"search__input",onChange:function(t){e.setStart(Object(c.a)(Object(c.a)({},e.start),{},{properties:Object(c.a)(Object(c.a)({},e.start.properties),{},{name:t.target.value})}))},onFocus:function(){document.getElementById("most").style.borderWidth="1px",document.getElementById("most").style.borderStyle="solid",document.getElementById("most").style.borderColor="#BDBDBD",document.getElementById("most").style.borderTop="none",document.getElementById("most").style.boxShadow="0px 0px 8px 0px rgba(0,0,0,0.25)"},onBlur:function(){document.getElementById("most").style.display="block",document.getElementById("most").style.border="none",document.getElementById("most").style.boxShadow="none"}}),r.a.createElement("div",{className:"search__icon-search"},r.a.createElement(l.a,{className:"icon",icon:m.n,onClick:function(){var e=localStorage.getItem("rotate");"true"!==e&&"false"!==e||"false"===e?localStorage.setItem("rotate",!0):localStorage.setItem("rotate",!1),document.location.reload()}})),r.a.createElement("div",{className:"search__icon-direction",onClick:function(){e.setMode(e.mode+1)}},r.a.createElement(l.a,{className:"icon",icon:m.e})))};var p=function(){var e=Object(n.useContext)(d),t=function(t){switch(t){case"store":e.setStart(e.geoLoc.features.filter((function(e){return 6===e.properties.id}))[0]);break;case"eat":e.setStart(e.geoLoc.features.filter((function(e){return 2===e.properties.id}))[0]);break;case"sleep":e.setStart(e.geoLoc.features.filter((function(e){return 5===e.properties.id}))[0]);break;case"photocopy":e.setStart(e.geoLoc.features.filter((function(e){return 4===e.properties.id}))[0])}};return r.a.createElement("div",{className:"involve"},r.a.createElement("h2",{className:"heading-secondary"},"T\xecm ki\u1ebfm khu v\u1ef1c n\xe0y"),r.a.createElement("div",{className:"involve__menu"},r.a.createElement("div",{className:"involve__menu__item1",onClick:function(){return t("store")}},r.a.createElement("div",{className:"involve__menu__item1__icon-shopping"},r.a.createElement(l.a,{className:"icon",icon:m.l})),r.a.createElement("p",{className:"heading-tertiary"},"C\u1eeda h\xe0ng t\u1ea1p h\xf3a")),r.a.createElement("div",{className:"involve__menu__item2",onClick:function(){return t("photocopy")}},r.a.createElement("div",{className:"involve__menu__item2__icon-motorcycle"},r.a.createElement(l.a,{className:"icon",icon:m.d})),r.a.createElement("p",{className:"heading-tertiary"},"Photo & Copy")),r.a.createElement("div",{className:"involve__menu__item3"},r.a.createElement("div",{className:"involve__menu__item3__icon-utensils"},r.a.createElement(l.a,{className:"icon",icon:m.p,onClick:function(){return t("eat")}})),r.a.createElement("p",{className:"heading-tertiary"},"\u0110\u1ecba \u0111i\u1ec3m \u0103n u\u1ed1ng")),r.a.createElement("div",{className:"involve__menu__item4",onClick:function(){return t("sleep")}},r.a.createElement("div",{className:"involve__menu__item4__icon-hotel"},r.a.createElement(l.a,{className:"icon",icon:m.b})),r.a.createElement("p",{className:"heading-tertiary"},"Ngh\u1ec9 tr\u01b0a"))))},g=a(8);var h=function(e){var t=e.mostSearched,a=e.height,o=e.id,i=Object(n.useContext)(d),c=Object(n.useState)(t),m=Object(s.a)(c,2),u=m[0],p=m[1],h=Object(n.useState)(a),y=Object(s.a)(h,2),v=y[0],f=y[1];return Object(n.useEffect)((function(){p(t)}),[t]),Object(n.useEffect)((function(){if("start"===o){if(null!==i.start.properties.name){var e=t.filter((function(e){return-1!==e.properties.name.toLowerCase().indexOf(i.start.properties.name.toLowerCase())}));p(e)}}else if(null!==i.end.properties.name){var a=t.filter((function(e){return-1!==e.properties.name.toLowerCase().indexOf(i.end.properties.name.toLowerCase())}));p(a)}}),[i.start.properties.name,i.end.properties.name]),Object(n.useEffect)((function(){f(a)}),[a]),Object(n.useEffect)((function(){if(2===i.userLocation.geometry.coordinates.length){var e=[];e.push({type:"Feature",properties:{id:0,name:"V\u1ecb tr\xed c\u1ee7a t\xf4i"},geometry:{coordinates:i.userLocation.geometry.coordinates}});for(var a=0;a<t.length;a++)e.push(t[a]);p(e),t.find((function(e){return 0===e.properties.id}))||t.push({type:"Feature",properties:{id:0,name:"V\u1ecb tr\xed c\u1ee7a t\xf4i"},geometry:{coordinates:i.userLocation.geometry.coordinates}})}}),[]),r.a.createElement("div",{style:{height:v},className:"most"},r.a.createElement("ul",{className:"most__list",id:"most"},u.map((function(e,t){if(t<=3)return r.a.createElement("div",{key:t,onClick:function(){if(fetch("http://localhost:8080/admin/updateQuantity",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({arr:[{id:e.properties.id,qty_search:1}]})}).then((function(e){return e.json()})).then((function(e){})).catch((function(e){return console.log(e)})),"start"===o){if(i.setStart(e),0===i.prevIdStart.length){if(document.getElementById(e.properties.id)){document.getElementById(e.properties.id).style.animation="click .5s infinite",document.getElementById(e.properties.id).style.color="red";var t=i.prevIdStart;t.push(e.properties.id),i.setPrevIdStart(t),console.log(e.properties.id)}}else if(document.getElementById(i.prevIdStart[i.prevIdStart.length-1])&&(document.getElementById(i.prevIdStart[i.prevIdStart.length-1]).style.animation="none",document.getElementById(i.prevIdStart[i.prevIdStart.length-1]).style.color="inherit"),document.getElementById(e.properties.id)){document.getElementById(e.properties.id).style.animation="click .5s infinite",document.getElementById(e.properties.id).style.color="red";var a=i.prevIdStart;a.push(e.properties.id),i.setPrevIdStart(a)}i.direction.actions.setOriginFromCoordinates(e.geometry.coordinates)}else{if(i.setEnd(e),0===i.prevIdEnd.length){if(document.getElementById(e.properties.id)){document.getElementById(e.properties.id).style.animation="click .5s infinite",document.getElementById(e.properties.id).style.color="red";var n=i.prevIdEnd;n.push(e.properties.id),i.setPrevIdEnd(n)}}else if(document.getElementById(i.prevIdEnd[i.prevIdEnd.length-1])&&(document.getElementById(i.prevIdEnd[i.prevIdEnd.length-1]).style.animation="none",document.getElementById(i.prevIdEnd[i.prevIdEnd.length-1]).style.color="inherit"),document.getElementById(e.properties.id)){document.getElementById(e.properties.id).style.animation="click .5s infinite",document.getElementById(e.properties.id).style.color="red";var r=i.prevIdEnd;r.push(e.properties.id),i.setPrevIdEnd(r)}i.direction.actions.setDestinationFromCoordinates(e.geometry.coordinates)}},className:"most__list__container-item"},r.a.createElement("div",{className:"most__list__icon"},r.a.createElement(l.a,{className:"icon",icon:g.b})),r.a.createElement("li",{className:"most__list__item"},e.properties.name))}))))};var y=function(){var e=Object(n.useContext)(d);return r.a.createElement("div",{className:"on-side-bar",onClick:function(){"0px"!==document.getElementById("sidebar1").style.width?(document.getElementById("sidebar1").style.width="0",document.getElementById("icon").style.transform="rotate(540deg)",document.getElementById("container-sidebar1").style.width="3%",e.mode%2===0&&(document.getElementById("container-sidebar1").style.width="3%",document.getElementById("search").style.opacity="0",document.getElementById("search").style.visibility="hidden")):(e.mode%2===0&&(document.getElementById("container-sidebar1").style.width="35%",document.getElementById("search").style.opacity="1",document.getElementById("search").style.visibility="visible"),document.getElementById("container-sidebar1").style.width="35%",document.getElementById("sidebar1").style.width="100%",document.getElementById("icon").style.transform="rotate(0deg)")}},r.a.createElement(l.a,{icon:m.c,className:"icon",id:"icon"}))};var v=function(){var e=Object(n.useContext)(d),t=Object(n.useState)("0rem"),a=Object(s.a)(t,2),o=a[0],i=a[1],u=Object(n.useState)("0rem"),p=Object(s.a)(u,2),y=p[0],v=p[1];return r.a.createElement("div",{className:"container-direction"},r.a.createElement("div",{className:"direction"},r.a.createElement("div",{className:"direction__icon"},r.a.createElement("div",{className:"direction__icon-menu"},r.a.createElement(l.a,{className:"icon",icon:m.a,onClick:function(){var e=window.innerWidth;document.querySelector(".container-menu").style.opacity="1",document.querySelector(".container-menu").style.visibility="visible",e>1200?document.querySelector(".menu").style.width="24%":e<1200&&e>900?document.querySelector(".menu").style.width="30%":e<900&&(document.querySelector(".menu").style.width="50%")}})),r.a.createElement("div",{className:"direction__icon-direction"},r.a.createElement(l.a,{className:"icon",icon:m.e})),r.a.createElement("div",{className:"direction__icon-close"},r.a.createElement(l.a,{className:"icon",icon:m.o,onClick:function(){if(e.prevIdEnd.length>0)for(var t=0;t<e.prevIdEnd.length;t++)document.getElementById(e.prevIdEnd)&&(document.getElementById(e.prevIdEnd).style.animation="none",document.getElementById(e.prevIdEnd).style.color="inherit");e.setMode(e.mode+1),e.setEnd({type:"Feature",properties:{id:null,name:null,description:null,image:null},geometry:{coordinates:[]}}),e.direction.actions.clearDestination()}}))),r.a.createElement("div",{className:"direction__input"},r.a.createElement("div",{className:"direction__input-start"},r.a.createElement(l.a,{className:"icon",icon:g.a}),r.a.createElement("input",{type:"text",id:"input-start",value:null!==e.start.properties.name?e.start.properties.name:e.start.geometry.coordinates.join(","),placeholder:"Ch\u1ecdn \u0111i\u1ec3m b\u1eaft \u0111\u1ea7u...",onChange:function(t){e.setStart(Object(c.a)(Object(c.a)({},e.start),{},{properties:Object(c.a)(Object(c.a)({},e.start.properties),{},{name:t.target.value})}))},onFocus:function(){i("16rem")},onBlur:function(){i("0rem")}})),r.a.createElement("div",{className:"direction__input-end"},r.a.createElement(l.a,{className:"icon",icon:m.h}),r.a.createElement("input",{type:"text",value:null!==e.end.properties.name?e.end.properties.name:e.end.geometry.coordinates.join(","),placeholder:"Ch\u1ecdn \u0111i\u1ec3m \u0111\u1ebfn...",onChange:function(t){e.setEnd(Object(c.a)(Object(c.a)({},e.end),{},{properties:Object(c.a)(Object(c.a)({},e.end.properties),{},{name:t.target.value})}))},onFocus:function(){v("16rem")},onBlur:function(){v("0rem")}})),r.a.createElement("div",{className:"direction__input-convert"},r.a.createElement(l.a,{className:"icon",icon:m.f,onClick:function(){var t=e.start;e.setStart(e.end),e.setEnd(t),e.direction.actions.reverse()}})))),r.a.createElement(h,{id:"start",mostSearched:e.geoLoc.features,height:o}),r.a.createElement(h,{id:"end",mostSearched:e.geoLoc.features,height:y}))},f=a(10),E=a.n(f),_=a(13),b=a(14),I=a(15),S=a(18),N=a(17);var j=function(e){return r.a.createElement("div",{className:"container-weather"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-heading"},r.a.createElement("p",{className:"card-city"},e.city),r.a.createElement("p",{className:"card-deg"},e.temp_celsius,"\xb0"),r.a.createElement("p",{className:"card-description"},e.description)),r.a.createElement("div",{className:"card-api"},r.a.createElement("h5",{className:"card-api__icon"},r.a.createElement("i",{className:"wi ".concat(e.weatherIcon," display-1")})))))},w=(a(32),function(e){Object(S.a)(a,e);var t=Object(N.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).getWeather=Object(_.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?id=1566083&appid=".concat("3daeebf9d8726d3a26ec61b6a29f2e3e"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n.setState({city:a.name,country:a.sys.country,celsius:n.calCelsius(a.main.temp),temp_max:n.calCelsius(a.main.temp_max),temp_min:n.calCelsius(a.main.temp_min),description:a.weather[0].description,icon:n.weatherIcon.Thunderstorm}),n.get_WeatherIcon(n.weatherIcon,a.weather[0].id);case 8:case"end":return e.stop()}}),e)}))),n.state={city:void 0,country:void 0,icon:void 0,main:void 0,celsius:void 0,temp_max:void 0,temp_min:void 0,description:"",error:!1},n.weatherIcon={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-storm-showers",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},n}return Object(I.a)(a,[{key:"get_WeatherIcon",value:function(e,t){switch(!0){case t>=200&&t<=232:this.setState({icon:e.Thunderstorm});break;case t>=300&&t<=321:this.setState({icon:e.Drizzle});break;case t>=500&&t<=531:this.setState({icon:e.Rain});break;case t>=600&&t<=622:this.setState({icon:e.Snow});break;case t>=700&&t<=781:this.setState({icon:e.Atmosphere});break;case 800===t:this.setState({icon:e.Thunderstorm});break;case t>=801&&t<=804:this.setState({icon:e.Clouds});break;default:this.setState({icon:e.Clouds})}}},{key:"calCelsius",value:function(e){return Math.floor(e-273.15)}},{key:"componentDidMount",value:function(){this.getWeather()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{city:this.state.city,country:this.state.country,temp_celsius:this.state.celsius,temp_min:this.state.temp_min,temp_max:this.state.temp_max,description:this.state.description,weatherIcon:this.state.icon}))}}]),a}(r.a.Component));var O=function(){var e=Object(n.useContext)(d);return Object(n.useEffect)((function(){if(null===e.end.properties.name&&e.prevIdEnd.length>0)for(var t=0;t<e.prevIdEnd.length;t++)document.getElementById(e.prevIdEnd[t])&&(document.getElementById(e.prevIdEnd[t]).style.animation="none",document.getElementById(e.prevIdEnd[t]).style.color="inherit")}),[e.end.geometry.coordinates]),Object(n.useEffect)((function(){e.geoLoc.features.map((function(t){document.getElementById(t.properties.name)&&document.getElementById(t.properties.name).addEventListener("click",(function(){if(e.direction.actions.clearOrigin(),0===e.prevIdStart.length){document.getElementById(t.properties.id).style.animation="click .5s infinite",document.getElementById(t.properties.id).style.color="red";var a=e.prevIdStart;a.push(t.properties.id),e.setPrevIdStart(a)}else{document.getElementById(e.prevIdStart[e.prevIdStart.length-1]).style.animation="none",document.getElementById(e.prevIdStart[e.prevIdStart.length-1]).style.color="inherit",document.getElementById(t.properties.id).style.animation="click .5s infinite",document.getElementById(t.properties.id).style.color="red";var n=e.prevIdStart;n.push(t.properties.id),e.setPrevIdStart(n)}e.setStart(t)}))}))})),r.a.createElement("div",{className:"container-sidebar1",id:"container-sidebar1"},r.a.createElement("div",{className:"sidebar1",id:"sidebar1"},e.mode%2===0&&null===e.end.properties.name&&2!==e.end.geometry.coordinates.length?r.a.createElement("div",{className:"container-search",id:"search"},r.a.createElement(u,null),r.a.createElement(h,{id:"start",mostSearched:e.geoLoc?e.geoLoc.features:[]})):r.a.createElement(v,null),r.a.createElement(w,null),e.mode%2===0&&null===e.end.properties.name&&2!==e.end.geometry.coordinates.length?r.a.createElement(p,null):null),r.a.createElement(y,null))},k=a(6),x=a.n(k),B=(a(33),a(16)),C=a.n(B);x.a.accessToken="pk.eyJ1IjoidHJhbmhvYW5nMDcxMTIwIiwiYSI6ImNrZjFocDZzYzEzc2gycW9jZXkwMGlmZmcifQ.MPYuezjAocZaq6v4nvOEwA";var L=function(){var e=Object(n.useContext)(d),t=Object(n.useRef)(null),a=localStorage.getItem("mode")?localStorage.getItem("mode"):"mapbox://styles/tranhoang071120/ckf2xr6kl05o21asu1omijgo9",o=Object(n.useState)(a),i=Object(s.a)(o,2),c=i[0];return i[1],Object(n.useEffect)((function(){var a=new x.a.Map({container:t,style:c,center:[106.77,10.851],zoom:17});if(e.geoLoc.features.map((function(e,t){var n="<div class='popup__container'><img src='https://picsum.photos/200/300' class='popup__image' /> "+"<h2 className='popup__heading'>".concat(e.properties.name," </h2>")+"<p class='popup__text'>".concat(e.properties.description,"</p>")+"</div>",r=new x.a.Popup({anchor:"bottom",offset:{bottom:[0,-10]},closeOnClick:!1}).setHTML(n),o=document.createElement("div"),i=document.createElement("p"),c=document.createElement("i");c.className="fas fa-map-marker",c.id=e.properties.id,i.innerHTML=e.properties.name,i.className="text__marker",o.className="marker",o.id=e.properties.name,o.appendChild(c),o.appendChild(i);var s=new x.a.Marker(o).setLngLat(e.geometry.coordinates).setPopup(r).addTo(a),l=s.getElement();l.addEventListener("mouseenter",(function(){return s.togglePopup()})),l.addEventListener("mouseleave",(function(){return r.remove()}))})),"mapbox://styles/tranhoang071120/ckf2xr6kl05o21asu1omijgo9"!==c)for(var n=document.querySelectorAll(".text__marker"),r=0;r<n.length;r++)"mapbox://styles/tranhoang071120/ckf2xr6kl05o21asu1omijgo9"!==c&&(n[r].style.color="white");a.addControl(new x.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,showUserLocation:!0})),"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((function(t){e.setUserLocation({geometry:{coordinates:[t.coords.longitude,t.coords.latitude]}})}));var o=new C.a({accessToken:x.a.accessToken,unit:"metric",profile:"mapbox/walking"});function i(e){a.rotateTo(e/100%360,{duration:0}),requestAnimationFrame(i)}e.setDirection(o),a.on("load",(function(){"true"===localStorage.getItem("rotate")&&i(0);for(var e,t=a.getStyle().layers,n=0;n<t.length;n++)if("symbol"===t[n].type&&t[n].layout["text-field"]){e=t[n].id;break}a.addLayer({id:"3d-buildings",source:"composite","source-layer":"building",filter:["==","extrude","true"],type:"fill-extrusion",minzoom:15,paint:{"fill-extrusion-color":"#aaa","fill-extrusion-height":["interpolate",["linear"],["zoom"],15,0,15.05,["get","height"]],"fill-extrusion-base":["interpolate",["linear"],["zoom"],15,0,15.05,["get","min_height"]],"fill-extrusion-opacity":.6}},e)})),a.addControl(o,"top-right")}),[e.geoLoc]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:function(e){return t=e},className:"mapWrapper"}))};var q=function(){var e=Object(n.useContext)(d),t=Object(n.useState)(!0),a=Object(s.a)(t,2),o=a[0],i=a[1];return r.a.createElement("div",{className:"container-menu",onClick:function(){document.querySelector(".menu").style.width="0px",setTimeout((function(){document.querySelector(".container-menu").style.opacity="0",document.querySelector(".container-menu").style.visibility="hidden"}),300)}},r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"menu__heading"},r.a.createElement("h1",{className:"heading-primary"},"UTE"),r.a.createElement("h1",{className:"heading-maps"},"Maps")),r.a.createElement("ul",{className:"menu__list"},r.a.createElement("li",{className:"menu__list__active"},r.a.createElement("div",{className:"menu__list__item-icon"},r.a.createElement(l.a,{icon:m.g})),r.a.createElement("p",{className:"menu__list__item-text"},"B\u1ea3n \u0111\u1ed3")),r.a.createElement("li",{className:"menu__list__item"},r.a.createElement("div",{className:"menu__list__item-icon"},r.a.createElement(l.a,{icon:m.k})),r.a.createElement("a",{className:"menu__list__item-link",href:null!==e.start.properties.name&&""!==e.start.properties.name?'https://map.harrisstudio.org/virtualtour/index.html?name="'.concat(e.start.properties.name,'"'):"https://map.harrisstudio.org/virtualtour/index.html?name=%22C%E1%BB%95ng%20ch%C3%ADnh%22",target:"_blank"},"V\u1ec7 tinh")),r.a.createElement("li",{className:"menu__list__item",onClick:function(){var e=localStorage.getItem("mode");"mapbox://styles/tranhoang071120/ckf8g7uwq5h7919pfzhlxzwqe"!==e&&"mapbox://styles/tranhoang071120/ckf2xr6kl05o21asu1omijgo9"!==e||"mapbox://styles/tranhoang071120/ckf2xr6kl05o21asu1omijgo9"===e?(localStorage.setItem("mode","mapbox://styles/tranhoang071120/ckf8g7uwq5h7919pfzhlxzwqe"),document.location.reload()):(localStorage.setItem("mode","mapbox://styles/tranhoang071120/ckf2xr6kl05o21asu1omijgo9"),document.location.reload())}},"mapbox://styles/tranhoang071120/ckf2xr6kl05o21asu1omijgo9"===localStorage.getItem("mode")||"mapbox://styles/tranhoang071120/ckf8g7uwq5h7919pfzhlxzwqe"!==localStorage.getItem("mode")&&"mapbox://styles/tranhoang071120/ckf2xr6kl05o21asu1omijgo9"!==localStorage.getItem("mode")?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"menu__list__item-icon"},r.a.createElement(l.a,{icon:m.j})),r.a.createElement("p",{className:"menu__list__item-text"},"Ch\u1ebf \u0111\u1ed9 t\u1ed1i")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"menu__list__item-icon"},r.a.createElement(l.a,{icon:m.m})),r.a.createElement("p",{className:"menu__list__item-text"},"Ch\u1ebf \u0111\u1ed9 s\xe1ng"))),r.a.createElement("li",{className:"menu__list__item",onClick:function(){"0"!==document.querySelector(".mapboxgl-ctrl-directions").style.opacity?(document.querySelector(".mapboxgl-ctrl-directions").style.opacity="0",document.querySelector(".mapboxgl-ctrl-directions").style.visibility="hidden",i(!1)):(i(!0),document.querySelector(".mapboxgl-ctrl-directions").style.opacity=1,document.querySelector(".mapboxgl-ctrl-directions").style.visibility="visible")}},o?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"menu__list__item-icon"},r.a.createElement(l.a,{icon:m.i})),r.a.createElement("p",{className:"menu__list__item-text"},"T\u1eaft ch\u1ec9 \u0111\u01b0\u1eddng")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"menu__list__item-icon"},r.a.createElement(l.a,{icon:m.e})),r.a.createElement("p",{className:"menu__list__item-text"},"B\u1eadt ch\u1ec9 \u0111\u01b0\u1eddng"))))))};var F=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(null),l=Object(s.a)(i,2),m=l[0],u=l[1],p=Object(n.useState)(!1),g=Object(s.a)(p,2),h=g[0],y=g[1],v=Object(n.useState)([]),f=Object(s.a)(v,2),E=f[0],_=f[1],b=Object(n.useState)([]),I=Object(s.a)(b,2),S=I[0],N=I[1],j=Object(n.useState)(null),w=Object(s.a)(j,2),k=w[0],x=w[1],B=Object(n.useState)(null),C=Object(s.a)(B,2),F=C[0],T=C[1],z=Object(n.useState)({geometry:{coordinates:[]}}),M=Object(s.a)(z,2),P=M[0],D=M[1],W=Object(n.useState)({type:"Feature",properties:{id:null,name:null,description:null,image:null},geometry:{coordinates:[]}}),A=Object(s.a)(W,2),J=A[0],U=A[1],Z=Object(n.useState)({type:"Feature",properties:{id:null,name:null,description:null,image:null},geometry:{coordinates:[]}}),H=Object(s.a)(Z,2),Y=H[0],G=H[1],R=Object(n.useState)(null),V=Object(s.a)(R,2),Q=V[0],X=V[1],$=Object(n.useState)(null),K=Object(s.a)($,2),ee=(K[0],K[1]);return Object(n.useEffect)((function(){var e;return F?clearInterval(e):(e=setInterval((function(){fetch("http://localhost:8080/admin").then((function(e){return e.json()})).then((function(e){for(var t=0;t<e.features.length;t++)for(var a=t+1;a<e.features.length;a++)if(e.features[t].properties.qty_search<e.features[a].properties.qty_search){var n=e.features[t];e.features[t]=e.features[a],e.features[a]=n}console.log(e.features),T({type:"FeatureCollection",features:e.features})}))}),1e3),ee(e)),function(){clearInterval(e)}}),[F]),Object(n.useEffect)((function(){fetch("http://localhost:8080/admin").then((function(e){return e.json()})).then((function(e){for(var t=0;t<e.features.length;t++)for(var a=t+1;a<e.features.length;a++)if(e.features[t].properties.qty_search<e.features[a].properties.qty_search){var n=e.features[t];e.features[t]=e.features[a],e.features[a]=n}console.log(e.features),T({type:"FeatureCollection",features:e.features})})),setInterval((function(){var e=JSON.parse(window.localStorage.getItem("data")),t=JSON.parse(window.localStorage.getItem("start")),a=JSON.parse(window.localStorage.getItem("end"));if(e&&(u(e),window.localStorage.removeItem("data")),t){var n=t.map((function(e){return Math.round(1e4*e)/1e4}));U(Object(c.a)(Object(c.a)({},J),{},{geometry:{coordinates:n}})),window.localStorage.removeItem("start")}if(a){var r=a.map((function(e){return Math.round(1e4*e)/1e4}));G(Object(c.a)(Object(c.a)({},Y),{},{geometry:{coordinates:r}})),window.localStorage.removeItem("end")}}),1e3),y(!0),setTimeout((function(){y(!1)}),3e3)}),[]),r.a.createElement(d.Provider,{value:{mode:a,setMode:o,isLoading:h,setLoading:y,dataApi:m,setDataApi:u,start:J,setStart:U,setEnd:G,end:Y,direction:Q,setDirection:X,geoLoc:F,setGeoLoc:T,prevIdStart:S,prevIdEnd:E,setPrevIdEnd:_,setPrevIdStart:N,eventLis:k,setEventLis:x,userLocation:P,setUserLocation:D}},F?r.a.createElement("div",{className:"container"},h?r.a.createElement("div",{className:"container-spinner"},r.a.createElement("div",{className:"loader"})):null,r.a.createElement(O,null),r.a.createElement(q,null),r.a.createElement(L,null)):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.c63e60b9.chunk.js.map