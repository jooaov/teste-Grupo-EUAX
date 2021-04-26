(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{3640:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var a=o("7338"),s=o.n(a);const i=window.location.href,r=i.split("/"),l=r[0]+"//"+r[2],n=s.a.create({baseURL:l,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})},"3c1c":function(t,e,o){"use strict";function a(t){const e=t.split("-")[0],o=t.split("-")[1],a=t.split("-")[2];return("0"+a).slice(-2)+"/"+("0"+o).slice(-2)+"/"+e}function s(t){const e=t.split("/")[0],o=t.split("/")[1],a=t.split("/")[2];return a+"-"+("0"+o).slice(-2)+"-"+("0"+e).slice(-2)}o.d(e,"a",(function(){return a})),o.d(e,"b",(function(){return s}))},cfb2:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",[o("h4",[t._v("Progresso total")]),o("q-linear-progress",{staticClass:"q-mt-sm",attrs:{rounded:"",size:"20px",value:t.progress,color:"blue"}},[o("div",{staticClass:"absolute-full flex flex-center"},[o("q-badge",{attrs:{color:"white","text-color":"accent",label:t.progressLabel}})],1)])],1),o("div",{staticClass:"row"},[t._l(t.projetos,(function(t){return o("CardProjeto",{key:t.id,attrs:{disabled:!0,projeto:t}})})),o("CardProjeto",{attrs:{disabled:!1}})],2)])},s=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"q-pa-md row items-start q-gutter-md"},[o("q-card",{staticClass:"my-card"},[t.disabled?t._e():o("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[t._v("Novo Projeto")]),o("q-card-section",[t.disabled?o("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[t._v(t._s(t.projeto.nome_do_projeto))]):t._e(),t.disabled?t._e():o("q-input",{staticClass:"col-12",attrs:{borderless:"",label:"Nome do Projeto"},model:{value:t.nomeDoProjeto,callback:function(e){t.nomeDoProjeto=e},expression:"nomeDoProjeto"}})],1),o("q-separator"),o("q-card-section",[t.disabled?o("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.projeto.descricao))]):t._e(),t.disabled?t._e():o("q-input",{staticClass:"col-12",attrs:{borderless:"",label:"Descrição do projeto"},model:{value:t.descrição,callback:function(e){t.descrição=e},expression:"descrição"}})],1),o("q-separator"),o("div",{staticClass:"row"},[o("q-input",{staticClass:"col-6",attrs:{disable:t.disabled,mask:"##/##/####","fill-mask":"",outlined:"",label:"Data Inicial"},model:{value:t.dataInicio,callback:function(e){t.dataInicio=e},expression:"dataInicio"}}),o("q-input",{staticClass:"col-6",attrs:{disable:t.disabled,mask:"##/##/####","fill-mask":"",outlined:"",label:"Data Final"},model:{value:t.dataFim,callback:function(e){t.dataFim=e},expression:"dataFim"}})],1),o("div",[t.disabled?o("q-linear-progress",{staticClass:"q-mt-sm",attrs:{rounded:"",size:"20px",value:t.porcentagem,color:"green"}},[o("div",{staticClass:"absolute-full flex flex-center"},[o("q-badge",{attrs:{color:"white","text-color":"accent",label:t.porcentagemCampo}})],1)]):t._e()],1),o("q-separator"),o("q-card-actions",[t.disabled?o("q-btn",{attrs:{color:"primary",flat:""},on:{click:t.finalizarProjeto}},[t._v("Finalizar")]):t._e(),t.disabled?o("q-btn",{attrs:{color:"primary",flat:""},on:{click:t.apagarProjeto}},[t._v("Apagar")]):t._e(),t.disabled?o("q-btn",{attrs:{to:{path:"/informacoes/"+this.id},color:"primary",flat:""}},[t._v("Editar/Atividades")]):t._e(),t.disabled?t._e():o("q-btn",{attrs:{color:"primary",flat:""},on:{click:t.salvarProjeto}},[t._v("Salvar")])],1)],1)],1)},r=[],l=o("3c1c"),n=o("3640"),c={name:"cardProjeto",props:["disabled","projeto"],event:"novo-projeto",data(){return{dataFim:"",dataInicio:"",finalizado:!1,nomeDoProjeto:"","descrição":"",editar:!1,porcentagem:.5,porcentagemCampo:"0%",id:0}},methods:{apagarProjeto(){n["a"].delete("/api/projetos/"+this.id).then((t=>{console.log(t),this.fechar()})).catch((t=>{console.log(t)}))},salvarProjeto(){n["a"].post("/api/projetos",{nome:this.nomeDoProjeto,data_inicio:Object(l["b"])(this.dataInicio),data_fim:Object(l["b"])(this.dataFim),descricao:this.descrição}).then((t=>{console.log(t),location.reload()})).catch((t=>{console.log(t)}))},fechar(){this.$destroy(),this.$el.parentNode.removeChild(this.$el)},finalizarProjeto(){n["a"].put("/api/projetos/finalizar/"+this.id).then((t=>{console.log(t),location.reload()})).catch((t=>{console.log(t)}))}},beforeMount(){this.$nextTick((function(){if(this.projeto){this.dataFim=Object(l["a"])(this.projeto.data_inicio),this.dataInicio=Object(l["a"])(this.projeto.data_fim),this.nomeDoProjeto=this.projeto.nome_do_projeto,this.descrição=this.projeto.descrição,this.finalizado=1===this.projeto.finalizada,this.id=this.projeto.id,this.porcentagem=this.projeto.porcentagem/100;const t=100*this.porcentagem;this.porcentagemCampo=t+"%"}}))},watch:{porcentagem:function(){const t=100*this.porcentagem;console.log("antes",t),this.porcentagemCampo=t+"%",console.log("depois",this.porcentagemCampo)}}},d=c,p=o("2877"),m=o("f09f"),b=o("a370"),u=o("27f9"),h=o("eb85"),f=o("0170"),j=o("6b1d"),g=o("58a81"),v=o("4b7e"),_=o("9c40"),q=o("eebe"),C=o.n(q),P=Object(p["a"])(d,i,r,!1,null,null,null),x=P.exports;C()(P,"components",{QCard:m["a"],QCardSection:b["a"],QInput:u["a"],QSeparator:h["a"],QItemLabel:f["a"],QLinearProgress:j["a"],QBadge:g["a"],QCardActions:v["a"],QBtn:_["a"]});var k={name:"PageIndex",components:{CardProjeto:x},data(){return{projetos:[],progress:.5,progressLabel:"50%"}},methods:{getProjetos(){n["a"].get("/api/projetos").then((t=>{this.projetos=t.data})).catch((t=>{console.log(t)}))}},beforeMount(){this.getProjetos()}},w=k,Q=Object(p["a"])(w,a,s,!1,null,null,null);e["default"]=Q.exports;C()(Q,"components",{QLinearProgress:j["a"],QBadge:g["a"]})}}]);