(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"125c":function(a,t,i){"use strict";i("856d")},3640:function(a,t,i){"use strict";i.d(t,"a",(function(){return c}));var e=i("7338"),o=i.n(e);const s=window.location.href,d=s.split("/"),n=d[0]+"//"+d[2],c=o.a.create({baseURL:n,timeout:9e4,withCredentials:!0,headers:{"Content-Type":"application/json"}})},"36f6":function(a,t,i){"use strict";i("b7de")},"3c1c":function(a,t,i){"use strict";function e(a){const t=a.split("-")[0],i=a.split("-")[1],e=a.split("-")[2];return("0"+e).slice(-2)+"/"+("0"+i).slice(-2)+"/"+t}function o(a){const t=a.split("/")[0],i=a.split("/")[1],e=a.split("/")[2];return e+"-"+("0"+i).slice(-2)+"-"+("0"+t).slice(-2)}i.d(t,"a",(function(){return e})),i.d(t,"b",(function(){return o}))},"856d":function(a,t,i){},b1fe:function(a,t,i){"use strict";i.r(t);var e=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",[a.edit?a._e():i("h2",{staticClass:"items-center"},[a._v(a._s(a.projeto.nome_do_projeto))]),a.edit?i("h2",{staticClass:"items-center"},[i("q-input",{attrs:{label:"Standard"},model:{value:a.nomeDoProjeto,callback:function(t){a.nomeDoProjeto=t},expression:"nomeDoProjeto"}})],1):a._e(),i("div",{staticClass:"row"},[i("q-input",{staticClass:"col-3",attrs:{disable:!a.edit,mask:"##/##/####","fill-mask":"",outlined:"",label:"Data Início"},model:{value:a.dataFim,callback:function(t){a.dataFim=t},expression:"dataFim"}}),i("q-input",{staticClass:"col-3",attrs:{disable:!a.edit,mask:"##/##/####","fill-mask":"",outlined:"",label:"Data de fim"},model:{value:a.dataInicio,callback:function(t){a.dataInicio=t},expression:"dataInicio"}}),i("q-btn-group",[a.edit?i("q-btn",{attrs:{color:"secondary",label:"Salvar"},on:{click:function(t){a.edit=!a.edit}}}):a._e(),a.edit?a._e():i("q-btn",{attrs:{color:"secondary",label:"Editar"},on:{click:function(t){a.edit=!a.edit}}}),i("q-btn",{staticStyle:{color:"#ff1a1a"},attrs:{color:"secondary",label:"Apagar"},on:{click:function(t){a.edit=!a.edit}}})],1)],1),i("q-separator",{staticStyle:{"margin-top":"1%"}}),i("div",{staticClass:"row"},[a._l(a.atividades,(function(a){return i("span",{key:a.id},[i("CardAtividade",{attrs:{atividade:a}})],1)})),i("CardAtividadeCreate",{attrs:{projetoID:a.id}})],2)],1)},o=[],s=i("3640"),d=i("3c1c"),n=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"q-pa-md row items-start q-gutter-md"},[i("q-card",{staticClass:"my-card"},[i("q-card-section",[a.editar?a._e():i("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[a._v(a._s(a.atividade.nome_da_atividade))]),a.editar?i("q-input",{staticClass:"col-12",attrs:{borderless:"",label:"nome da atividade"},model:{value:a.nomeDaAtividade,callback:function(t){a.nomeDaAtividade=t},expression:"nomeDaAtividade"}}):a._e()],1),i("q-separator"),i("q-card-section",[a.editar?a._e():i("q-item-label",{attrs:{caption:""}},[a._v(a._s(a.atividade.descrição))]),a.editar?i("q-input",{staticClass:"col-12",attrs:{borderless:"",label:"Descrição da atividade"},model:{value:a.descrição,callback:function(t){a.descrição=t},expression:"descrição"}}):a._e()],1),i("q-separator"),i("q-card-actions",[i("div",{staticClass:"row"},[i("q-input",{staticClass:"col-6",attrs:{disable:!a.editar,mask:"##/##/####","fill-mask":"",outlined:"",label:"Data Inicial"},model:{value:a.dataInicio,callback:function(t){a.dataInicio=t},expression:"dataInicio"}}),i("q-input",{staticClass:"col-6",attrs:{disable:!a.editar,mask:"##/##/####","fill-mask":"",outlined:"",label:"Data Final"},model:{value:a.dataFim,callback:function(t){a.dataFim=t},expression:"dataFim"}})],1),i("div",{staticClass:"q-gutter-sm"},[i("q-checkbox",{attrs:{disable:!a.editar,label:"Finalizado"},model:{value:a.finalizado,callback:function(t){a.finalizado=t},expression:"finalizado"}})],1),i("div",{staticClass:"row"},[a.editar?i("q-btn",{staticClass:"col-6",attrs:{color:"primary",flat:""},on:{click:a.editarAtividade}},[a._v("Salvar")]):a._e(),a.editar?a._e():i("q-btn",{staticClass:"col-6",attrs:{color:"primary",flat:""},on:{click:function(t){a.editar=!a.editar}}},[a._v("Editar")]),i("q-btn",{staticClass:"col-6",attrs:{color:"red",flat:""},on:{click:a.apagarAtividade}},[a._v("Apagar")])],1)])],1)],1)},c=[],l={name:"cardAtividade",props:{atividade:{type:Object,required:!0},projetoID:{type:Number,required:!0}},methods:{editarAtividade(){s["a"].put("/api/atividades/"+this.id,{nome:this.nomeDaAtividade,"descrição":this.descrição,data_inicio:Object(d["b"])(this.dataInicio),data_fim:Object(d["b"])(this.dataFim),finalizado:this.finalizado?1:0}).then((a=>{console.log(a),200===a.status&&(this.editar=!1)})).catch((a=>{console.log(a)}))},apagarAtividade(){s["a"].delete("/api/atividades/"+this.id).then((a=>{console.log(a),this.fechar()})).catch((a=>{console.log(a)}))},fechar(){this.$destroy(),this.$el.parentNode.removeChild(this.$el)}},data(){return{dataFim:"",dataInicio:"",finalizado:!1,nomeDaAtividade:"","descrição":"",editar:!1,id:0}},beforeMount(){this.dataFim=Object(d["a"])(this.atividade.data_inicio),this.dataInicio=Object(d["a"])(this.atividade.data_fim),this.nomeDaAtividade=this.atividade.nome_da_atividade,this.descrição=this.atividade.descricao,this.finalizado=1===this.atividade.finalizado,this.id=this.atividade.id}},r=l,m=(i("36f6"),i("2877")),u=i("f09f"),p=i("a370"),v=i("27f9"),b=i("eb85"),f=i("0170"),h=i("4b7e"),q=i("8f8e"),C=i("9c40"),_=i("eebe"),k=i.n(_),j=Object(m["a"])(r,n,c,!1,null,"0a8495b4",null),A=j.exports;k()(j,"components",{QCard:u["a"],QCardSection:p["a"],QInput:v["a"],QSeparator:b["a"],QItemLabel:f["a"],QCardActions:h["a"],QCheckbox:q["a"],QBtn:C["a"]});var D=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"q-pa-md row items-start q-gutter-md"},[i("q-card",{staticClass:"my-card"},[i("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[a._v("Nova Atividade")]),i("q-card-section",[i("q-input",{staticClass:"col-12",attrs:{borderless:"",label:"nome da atividade"},model:{value:a.nomeDaAtividade,callback:function(t){a.nomeDaAtividade=t},expression:"nomeDaAtividade"}})],1),i("q-separator"),i("q-card-section",[i("q-input",{staticClass:"col-12",attrs:{borderless:"",label:"Descrição da atividade"},model:{value:a.descrição,callback:function(t){a.descrição=t},expression:"descrição"}})],1),i("q-separator"),i("q-card-actions",[i("div",{staticClass:"row"},[i("q-input",{staticClass:"col-6",attrs:{mask:"##/##/####","fill-mask":"",outlined:"",label:"Data Inicial"},model:{value:a.dataInicio,callback:function(t){a.dataInicio=t},expression:"dataInicio"}}),i("q-input",{staticClass:"col-6",attrs:{mask:"##/##/####","fill-mask":"",outlined:"",label:"Data Final"},model:{value:a.dataFim,callback:function(t){a.dataFim=t},expression:"dataFim"}})],1),i("div",{staticClass:"q-gutter-sm"},[i("q-checkbox",{attrs:{label:"Finalizado"},model:{value:a.finalizado,callback:function(t){a.finalizado=t},expression:"finalizado"}})],1),i("br"),i("q-btn",{staticClass:"col-12",attrs:{color:"primary",flat:""},on:{click:a.salvarAtividade}},[a._v("Salvar")])],1)],1)],1)},I=[],g={name:"cardAtividadeEdit",props:{projetoID:{type:Number,required:!0}},methods:{salvarAtividade(){s["a"].post("/api/atividades",{nome:this.nomeDaAtividade,"descrição":this.descrição,data_inicio:Object(d["b"])(this.dataInicio),data_fim:Object(d["b"])(this.dataFim),finalizado:this.finalizado,projetos_id:this.projetoID}).then((a=>{console.log(a),location.reload()})).catch((a=>{console.log(a)}))},fechar(){this.$destroy(),this.$el.parentNode.removeChild(this.$el)},apagarAtividade(){}},data(){return{nomeDaAtividade:"","descrição":"",dataInicio:"",dataFim:"",finalizado:!1,id:0}}},x=g,F=(i("125c"),Object(m["a"])(x,D,I,!1,null,"137c3f09",null)),Q=F.exports;k()(F,"components",{QCard:u["a"],QCardSection:p["a"],QInput:v["a"],QSeparator:b["a"],QCardActions:h["a"],QCheckbox:q["a"],QBtn:C["a"]});var y={name:"informações",props:["id"],components:{CardAtividade:A,CardAtividadeCreate:Q},data(){return{dataFim:"",dataInicio:"",atividades:[],projeto:{},edit:!1,nomeDoProjeto:""}},methods:{onClick(){},getAtividades(){s["a"].get("/api/atividades/projeto/"+this.id).then((a=>{this.atividades=a.data,console.log(this.projetos)})).catch((a=>{console.log(a)}))},getProjeto(){s["a"].get("/api/projetos/"+this.id).then((a=>{this.projeto=a.data,this.dataFim=Object(d["a"])(a.data.data_fim),this.dataInicio=Object(d["a"])(a.data.data_inicio),this.nomeDoProjeto=a.data.nome_do_projeto,this.nomeDoProjeto=a.data.nome_do_projeto})).catch((a=>{console.log(a)}))}},beforeMount(){this.getProjeto(),this.getAtividades()}},w=y,z=i("e7a9"),O=Object(m["a"])(w,e,o,!1,null,null,null);t["default"]=O.exports;k()(O,"components",{QInput:v["a"],QBtnGroup:z["a"],QBtn:C["a"],QSeparator:b["a"]})},b7de:function(a,t,i){}}]);