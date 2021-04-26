<template>
 <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
        <div v-if="!disabled" class="text-h5 q-mt-sm q-mb-xs">Novo Projeto</div>

      <q-card-section>
        <div v-if="disabled" class="text-h5 q-mt-sm q-mb-xs">{{projeto.nome_do_projeto}}</div>
        <q-input borderless v-model="nomeDoProjeto" v-if="!disabled" class="col-12" label="Nome do Projeto">
      </q-card-section>
      <q-separator />
      <q-card-section>
            <q-item-label v-if="disabled" caption>{{projeto.descricao}}</q-item-label>
            <q-input borderless v-model="descrição" v-if="!disabled" class="col-12" label="Descrição do projeto">
      </q-card-section>
      <q-separator />
       <div class="row">
            <q-input class="col-6" :disable="disabled" mask="##/##/####" v-model="dataInicio" fill-mask outlined label="Data Inicial" />
            <q-input class="col-6" :disable="disabled" mask="##/##/####" v-model="dataFim" fill-mask outlined label="Data Final"  />
         </div>
         <div>
            <q-item-label v-if="disabled && projeto.projetoAtrasado" style="color:red">Atrasado</q-item-label>
         </div>
         <div>
            <q-linear-progress v-if="disabled" rounded size="20px" :value="porcentagem" color="green" class="q-mt-sm" >
            <div class="absolute-full flex flex-center">
              <q-badge color="white" text-color="accent" :label="porcentagemCampo" />
            </div>
            </q-linear-progress>
         </div>
      <q-separator />
       <q-card-actions>
            <q-btn v-if="disabled" @click="finalizarProjeto" color="primary" flat>Finalizar</q-btn>
            <q-btn v-if="disabled" @click="apagarProjeto" color="primary" flat>Apagar</q-btn>
            <q-btn v-if="disabled" :to="{ path: '/informacoes/'+this.id }" color="primary" flat>Editar/Atividades</q-btn>
            <q-btn v-if="!disabled" @click="salvarProjeto" color="primary" flat>Salvar</q-btn>
          </q-card-actions>
    </q-card>
 </div>
</template>

<script>
import { FormataStringData, FormataStringDataDoDB, CompararDatas } from 'src/tools/dateFormat'
import { axiosInstance } from 'src/tools/axios'

export default {
  name: 'cardProjeto',
  props: ['disabled', 'projeto'],
  event: 'novo-projeto',
  data () {
    return {
      dataFim: '',
      dataInicio: '',
      finalizado: false,
      nomeDoProjeto: '',
      descrição: '',
      editar: false,
      porcentagem: 0.5,
      porcentagemCampo: '0%',
      id: 0
    }
  },
  methods: {
    apagarProjeto () {
      axiosInstance.delete('/api/projetos/' + this.id)
        .then(
          (response) => {
            console.log(response)
            this.fechar()
            location.reload()
          })
        .catch((error) => {
          console.log(error)
          this.showNotif(error.response.data)
        })
    },
    salvarProjeto () {
      if (CompararDatas(this.dataInicio, this.dataFim)) {
        console.log('datas invalidas')
        this.showNotif('Datas Invalidas')
        return
      }
      if (
        this.nomeDoProjeto === '' ||
        this.dataInicio === '' ||
        this.dataFim === '' ||
        this.descrição === ''
      ) {
        console.log('Algum campo em branco')
        this.showNotif('Algum campo em branco')
        return
      }
      axiosInstance.post('/api/projetos', {
        nome: this.nomeDoProjeto,
        data_inicio: FormataStringDataDoDB(this.dataInicio),
        data_fim: FormataStringDataDoDB(this.dataFim),
        descrição: this.descrição
      }).then(
        (response) => {
          console.log(response)
          location.reload()
        })
        .catch((error) => {
          console.log(error)
          this.showNotif(error.response.data)
        })
    },
    fechar () {
      this.$destroy()
      this.$el.parentNode.removeChild(this.$el)
    },
    finalizarProjeto () {
      axiosInstance.put('/api/projetos/finalizar/' + this.id)
        .then(
          (response) => {
            console.log(response)
            location.reload()
          })
        .catch((error) => {
          console.log(error)
          this.showNotif(error.response.data)
        })
    },
    showNotif ($msg) {
      this.$q.notify({
        message: $msg,
        color: 'red'
      })
    }

  },
  beforeMount () {
    if (this.projeto) {
      this.dataFim = FormataStringData(this.projeto.data_fim)
      this.dataInicio = FormataStringData(this.projeto.data_inicio)
      this.nomeDoProjeto = this.projeto.nome_do_projeto
      this.descrição = this.projeto.descrição
      this.finalizado = this.projeto.finalizada === 1
      this.id = this.projeto.id
      this.porcentagem = this.projeto.porcentagem / 100
      const porcentagemCompleta = this.porcentagem * 100
      this.porcentagemCampo = porcentagemCompleta + '%'
    }
  },
  watch: {
    // whenever question changes, this function will run
    porcentagem: function () {
      const porcentagemCompleta = this.porcentagem * 100
      this.porcentagemCampo = porcentagemCompleta + '%'
    }
  }

}
</script>
