(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{b1fe:function(a,t,s){"use strict";s.r(t);var e=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("h2",{staticClass:"items-center"},[a._v("nome do projeto")]),s("div",{staticClass:"row"},[s("q-input",{staticClass:"col-3",attrs:{mask:"##/##/####","fill-mask":"",outlined:"",label:"Data Início"},model:{value:a.dataFim,callback:function(t){a.dataFim=t},expression:"dataFim"}}),s("q-input",{staticClass:"col-3",attrs:{mask:"##/##/####","fill-mask":"",outlined:"",label:"Data de fim"},model:{value:a.dataInicio,callback:function(t){a.dataInicio=t},expression:"dataInicio"}}),s("q-btn",{attrs:{color:"secondary",label:"Salvar"}})],1),s("q-separator",{staticStyle:{"margin-top":"1%"}}),s("div",{staticClass:"row"},[a._l(a.atividades,(function(a){return s("span",{key:a},[s("CardAtividade",{attrs:{disabled:!0}})],1)})),s("CardAtividade",{attrs:{disabled:!1}})],2)],1)},i=[],l=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"q-pa-md row items-start q-gutter-md"},[s("q-card",{staticClass:"my-card"},[a.disabled?a._e():s("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[a._v("Nova Atividade")]),s("q-card-section",[a.disabled?s("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[a._v("nome da atividade")]):a._e(),a.disabled?a._e():s("q-input",{staticClass:"col-12",attrs:{borderless:"",label:"nome da atividade"}})],1),s("q-separator"),s("q-card-section",[a.disabled?s("q-item-label",{attrs:{caption:""}},[a._v("Descrição da atividade")]):a._e(),a.disabled?a._e():s("q-input",{staticClass:"col-12",attrs:{borderless:"",label:"Descrição da atividade"}})],1),s("q-separator"),s("q-card-actions",[s("div",{staticClass:"row"},[s("q-input",{staticClass:"col-6",attrs:{mask:"##/##/####","fill-mask":"",outlined:"",label:"Data Inicial",disable:a.disabled}}),s("q-input",{staticClass:"col-6",attrs:{mask:"##/##/####","fill-mask":"",outlined:"",label:"Data Final",disable:a.disabled}})],1),s("div",{staticClass:"q-gutter-sm"},[s("q-checkbox",{attrs:{label:"Finalizado"}})],1),s("div",{staticClass:"row"},[s("q-btn",{staticClass:"col-6",attrs:{color:"primary",flat:""}},[a._v("Salvar")]),s("q-btn",{staticClass:"col-6",attrs:{color:"red",flat:""},on:{click:a.apagarAtividade}},[a._v("Apagar")])],1)])],1)],1)},d=[],r={name:"cardAtividade",props:{disabled:{type:Boolean,required:!0}},methods:{apagarAtividade(){this.$emit("deletarCard",1)}}},o=r,c=(s("b54a"),s("2877")),n=s("f09f"),b=s("a370"),m=s("27f9"),p=s("eb85"),u=s("0170"),v=s("4b7e"),C=s("8f8e"),q=s("9c40"),f=s("eebe"),k=s.n(f),_=Object(c["a"])(o,l,d,!1,null,"85ec5b3e",null),h=_.exports;k()(_,"components",{QCard:n["a"],QCardSection:b["a"],QInput:m["a"],QSeparator:p["a"],QItemLabel:u["a"],QCardActions:v["a"],QCheckbox:C["a"],QBtn:q["a"]});var w={name:"informações",props:["id"],components:{CardAtividade:h},data(){return{dataFim:"",dataInicio:"",atividades:[1,2,3,4,5,6]}},methods:{onClick(){}},beforeMount(){}},Q=w,x=Object(c["a"])(Q,e,i,!1,null,null,null);t["default"]=x.exports;k()(x,"components",{QInput:m["a"],QBtn:q["a"],QSeparator:p["a"]})},b3a3:function(a,t,s){},b54a:function(a,t,s){"use strict";s("b3a3")}}]);