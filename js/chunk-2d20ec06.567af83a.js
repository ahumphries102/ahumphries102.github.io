(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20ec06"],{b167:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.dataRetrieved?r("v-card",[r("v-card-title",[r("h3",[e._v("User Quiz")])]),e.dataRetrieved?r("v-card-text",[r("h4",[e._v("Question "+e._s(e.test+1)+": "+e._s(e.allQuizzes[e.routeId].quiz[e.test].question))]),e._l(e.allQuizzes[e.routeId].quiz[e.test].answers,(function(t,a){return r("v-list-item",{key:a},[e._v(" "+e._s(String.fromCharCode("A".charCodeAt(0)+a))+": "+e._s(t.answer))])}))],2):e._e(),r("v-card-actions",[r("v-btn",{attrs:{color:"primary",disabled:e.test<1},on:{click:function(t){e.test--}}},[e._v("<")]),r("v-btn",{attrs:{color:"primary",disabled:e.test>=e.allQuizzes[e.routeId].quiz.length-1},on:{click:function(t){e.test++}}},[e._v(">")])],1)],1):e._e()],1)},s=[],n=(r("96cf"),r("1da1")),i={name:"userquiz",data:function(){return{adjustedQuizzes:[],allQuizzes:[],dataRetrieved:!1,responseMsg:"",routeId:0,changeQ:0,test:0}},created:function(){this.viewQuiz(),this.routeId=this.$route.params.id},methods:{viewQuiz:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$root.fetchData("POST","/viewquiz",{username:e.$store.state.username});case 2:r=t.sent,e.allQuizzes=r,e.responseMsg=r,e.dataRetrieved=!0;case 6:case"end":return t.stop()}}),t)})))()}}},u=i,o=r("2877"),c=r("6544"),d=r.n(c),l=r("8336"),v=r("b0af"),z=r("99d9"),h=r("da13"),f=Object(o["a"])(u,a,s,!1,null,null,null);t["default"]=f.exports;d()(f,{VBtn:l["a"],VCard:v["a"],VCardActions:z["a"],VCardText:z["b"],VCardTitle:z["c"],VListItem:h["a"]})}}]);
//# sourceMappingURL=chunk-2d20ec06.567af83a.js.map