(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20b8df38"],{"8ce9":function(e,t,r){},ce7e:function(e,t,r){"use strict";var n=r("5530"),i=(r("8ce9"),r("7560"));t["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:Object(n["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(n["a"])({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})},e188:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-card",[r("v-card-title",{staticClass:"d-flex flex-column align-start"},[r("p",[e._v("Question "+e._s(e.allQuizzes[e.currentQuestion].quiz.length))])]),r("v-divider"),r("v-card-text",[e._l(e.allQuizzes[0].quiz[e.currentQuestion].answers,(function(t,n){return r("h3",{key:n,staticClass:"my-5",style:{color:t.answered?"green":"red"}},[e._v(" "+e._s(t.answer)+" ")])})),r("p",[e._v(" Your answer was "),r("b",[e._v(e._s((e.tallyScore[e.currentQuestion].answered,e.tallyScore[e.currentQuestion].answer)))])])],2),r("v-card-actions",[r("v-btn",{attrs:{color:"primary",disabled:e.currentQuestion<1},on:{click:function(t){e.currentQuestion--}}},[e._v("Previous Question ")]),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.finalQuestionReached,expression:"!finalQuestionReached"}],attrs:{color:"primary"},on:{click:function(t){e.currentQuestion++}}},[e._v("Next Question")]),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.finalQuestionReached,expression:"finalQuestionReached"}],attrs:{color:"primary"},on:{click:function(t){return e.$emit("close")}}},[e._v("Return to Score Screen")])],1)],1)],1)},i=[],s={name:"finalscore",props:{allQuizzes:Array,questions:Array,tallyScore:Array},data:function(){return{currentQuestion:0,finalQuestionReached:!1}},mounted:function(){console.log(this.allQuizzes)},watch:{currentQuestion:function(){this.currentQuestion<1&&(this.currentQuestion=0),this.currentQuestion>=this.quiz.length-1?this.finalQuestionReached=!0:this.finalQuestionReached=!1}}},a=s,o=r("2877"),c=r("6544"),u=r.n(c),l=r("8336"),d=r("b0af"),v=r("99d9"),h=r("ce7e"),f=Object(o["a"])(a,n,i,!1,null,null,null);t["default"]=f.exports;u()(f,{VBtn:l["a"],VCard:d["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VDivider:h["a"]})}}]);
//# sourceMappingURL=chunk-20b8df38.6aa85adf.js.map