(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230542"],{ec8f:function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("v-card",[t("v-card-title",[t("h3",[n._v("Which Quiz Would You Like to View?")])]),t("v-card-text",[t("v-list",[t("router-link",{attrs:{to:{path:"/viewquiz/0",params:"id"}}},[n._v("Quiz 1")])],1)],1),t("v-card-actions",[t("v-btn",{attrs:{color:"primary",disabled:n.numInc<1},on:{click:function(e){n.numInc--}}},[n._v("<")]),t("v-btn",{attrs:{color:"primary",disabled:!!n.allQuizzes.questions&&n.numInc>=n.allQuizzes.answers.length-1},on:{click:function(e){n.numInc<n.allQuizzes.answers.length-1?n.numInc++:n.numInc=n.allQuizzes.answers.length-1}}},[n._v(">")])],1)],1)],1)},i=[],r=(t("96cf"),t("1da1")),s={name:"viewquiz",data:function(){return{numInc:0,adjustedQuizzes:[],allQuizzes:[],responseMsg:""}},beforeMount:function(){this.viewQuiz()},methods:{adjustQuizzes:function(){this.numInc&&this.numInc++},viewQuiz:function(){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$root.fetchData("POST","/viewquiz",{username:n.$store.state.username});case 2:t=e.sent,n.allQuizzes=t,n.responseMsg=t;case 5:case"end":return e.stop()}}),e)})))()}}},u=s,c=t("2877"),o=t("6544"),l=t.n(o),d=t("8336"),z=t("b0af"),v=t("99d9"),m=t("8860"),h=Object(c["a"])(u,a,i,!1,null,null,null);e["default"]=h.exports;l()(h,{VBtn:d["a"],VCard:z["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VList:m["a"]})}}]);
//# sourceMappingURL=chunk-2d230542.5fe4b189.js.map