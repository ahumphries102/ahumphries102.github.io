(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ac3bd"],{1954:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"fill-height":""}},[a("v-card",{staticClass:"mx-auto",attrs:{width:"50%"}},[a("v-card-title",[e._v(" Login ")]),a("v-card-text",[a("v-text-field",{attrs:{label:"User Name"},model:{value:e.loginData.username,callback:function(t){e.$set(e.loginData,"username",t)},expression:"loginData.username"}}),a("v-text-field",{attrs:{label:"Password",type:e.visible?"":"password","append-icon":e.visible?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(t){e.visible=!e.visible}},model:{value:e.loginData.password,callback:function(t){e.$set(e.loginData,"password",t)},expression:"loginData.password"}}),a("p",{style:{color:e.color}},[e._v(e._s(e.responseMsg))])],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.$router.push({name:"signup"})}}},[e._v("Signup")]),a("v-btn",{attrs:{loading:e.submitted,color:"primary"},on:{click:e.login}},[e._v("Login")])],1)],1)],1)},r=[],o=(a("96cf"),a("1da1")),s=(a("9acc"),{name:"login",data:function(){return{color:"",loginData:{password:"",username:""},responseMsg:"",submitted:!1,visible:!1}},methods:{login:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.submitted=!0,t.next=3,e.$root.fetchData("POST","/sendtoken",e.loginData);case 3:a=t.sent,a.err?(e.color="red",e.responseMsg=a.err):(e.color="green",e.responseMsg=a.msg,e.$router.push({name:"createquiz"}).catch((function(e){return e})),e.$store.state.username=e.loginData.username,e.$store.state.token=a.token,e.$store.updateToken(),e.$root.loggedIn=!0),e.submitted=!1;case 6:case"end":return t.stop()}}),t)})))()}}}),i=s,l=a("2877"),c=a("6544"),u=a.n(c),d=a("8336"),p=a("b0af"),g=a("99d9"),m=a("a523"),v=a("8654"),b=Object(l["a"])(i,n,r,!1,null,null,null);t["default"]=b.exports;u()(b,{VBtn:d["a"],VCard:p["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VContainer:m["a"],VTextField:v["a"]})}}]);
//# sourceMappingURL=chunk-2d0ac3bd.f7ee6828.js.map