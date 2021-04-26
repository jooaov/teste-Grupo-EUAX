<template>
 <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h5 q-mt-sm q-mb-xs" v-if="!editar">{{atividade.nome_da_atividade}}</div>
        <q-input borderless v-if="editar" v-model="nomeDaAtividade" class="col-12" label="nome da atividade">
      </q-card-section>
      <q-separator />
      <q-card-section>
            <q-item-label v-if="!editar" caption>{{atividade.descrição}}</q-item-label>
            <q-input borderless v-if="editar" v-model="descrição" class="col-12" label="Descrição da atividade">
      </q-card-section>
      <q-separator />
       <q-card-actions>
         <div class="row">
            <q-input class="col-6" :disable="!editar" mask="##/##/####" v-model="dataInicio" fill-mask outlined label="Data Inicial" />
            <q-input class="col-6" :disable="!editar" mask="##/##/####" v-model="dataFim" fill-mask outlined label="Data Final"  />
         </div>
          <div class="q-gutter-sm">
            <q-checkbox v-model="finalizado" :disable="!editar" label="Finalizado" />
          </div>
          <div class="row">
            <q-btn class="col-6" v-if="editar" @click="editarAtividade" color="primary" flat>Salvar</q-btn>
            <q-btn class="col-6" v-if="!editar" @click="editar=!editar" color="primary" flat>Editar</q-btn>
            <q-btn class="col-6" color="red" @click="apagarAtividade" flat>Apagar</q-btn>
         </div>
        </q-card-actions>
    </q-card>
 </div>
</template>

<script>
import { FormataStringDataDoDB, FormataStringData, CompararDatas } from 'src/tools/dateFormat'
import { axiosInstance } from 'src/tools/axios'

export default {
  name: 'cardAtividade',
  props: {
    atividade: {
      type: Object,
      required: true
    },
    projetoID: {
      type: Number,
      required: true
    }
  },
  methods: {
    editarAtividade () {
      if (CompararDatas(this.dataInicio, this.dataFim)) {
        console.log('datas invalidas')
        this.showNotif('Datas Invalidas')
        return
      }
      if (
        this.nomeDaAtividade === '' ||
        this.dataInicio === '' ||
        this.dataFim === '' ||
        this.finalizado === ''

      ) {
        console.log('Algum campo em branco')
        this.showNotif('Algum campo em branco')
        return
      }
      axiosInstance.put('/api/atividades/' + this.id, {
        nome: this.nomeDaAtividade,
        descrição: this.descrição,
        data_inicio: FormataStringDataDoDB(this.dataInicio),
        data_fim: FormataStringDataDoDB(this.dataFim),
        finalizado: this.finalizado ? 1 : 0
      })
        .then(
          (response) => {
            console.log(response)
            if (response.status === 200) {
              this.editar = false
              location.reload()
            }
          })
        .catch((error) => {
          console.log(error)
        })
    },
    showNotif ($msg) {
      this.$q.notify({
        message: $msg,
        color: 'red'
      })
    },
    apagarAtividade () {
      axiosInstance.delete('/api/atividades/' + this.id)
        .then(
          (response) => {
            console.log(response)
            this.fechar()
          })
        .catch((error) => {
          console.log(error)
        })
    },
    fechar () {
      this.$destroy()
      this.$el.parentNode.removeChild(this.$el)
    }
  },
  data () {
    return {
      dataFim: '',
      dataInicio: '',
      finalizado: false,
      nomeDaAtividade: '',
      descrição: '',
      editar: false,
      id: 0
    }
  },
  beforeMount () {
    console.log(this.atividade)
    this.dataFim = FormataStringData(this.atividade.data_fim)
    this.dataInicio = FormataStringData(this.atividade.data_inicio)
    this.nomeDaAtividade = this.atividade.nome_da_atividade
    this.descrição = this.atividade.descrição
    this.finalizado = this.atividade.finalizado === 1
    this.id = this.atividade.id
  }
}

</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
