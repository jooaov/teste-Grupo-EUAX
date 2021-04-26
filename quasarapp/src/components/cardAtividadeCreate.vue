<template>
 <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <div class="text-h5 q-mt-sm q-mb-xs">Nova Atividade</div>
      <q-card-section>
        <q-input borderless v-model="nomeDaAtividade" class="col-12" label="nome da atividade">
      </q-card-section>
      <q-separator />
      <q-card-section>
            <q-input borderless v-model="descrição" class="col-12" label="Descrição da atividade">
      </q-card-section>
      <q-separator />
       <q-card-actions>
         <div class="row">
            <q-input class="col-6" mask="##/##/####" v-model="dataInicio" fill-mask outlined label="Data Inicial" />
            <q-input class="col-6" mask="##/##/####" v-model="dataFim" fill-mask outlined label="Data Final"  />
         </div>
          <div class="q-gutter-sm">
            <q-checkbox v-model="finalizado" label="Finalizado" />
          </div>
          <br/>
            <q-btn class="col-12" @click="salvarAtividade" color="primary" flat>Salvar</q-btn>
        </q-card-actions>
    </q-card>
 </div>
</template>

<script>
import { FormataStringDataDoDB, CompararDatas } from 'src/tools/dateFormat'
import { axiosInstance } from 'src/tools/axios'

export default {
  name: 'cardAtividadeEdit',
  props: {
    projetoID: {
      type: Number,
      required: true
    }
  },
  methods: {
    salvarAtividade () {
      if (CompararDatas(this.dataInicio, this.dataFim)) {
        console.log('datas invalidas')
        this.showNotif('datas invalidas')
        return
      }
      if (
        this.nomeDaAtividade === '' ||
        this.descrição === '' ||
        this.dataInicio === '' ||
        this.dataFim === '' ||
        this.finalizado === '' ||
        this.projetoID === ''

      ) {
        console.log('Algum campo em branco')
        this.showNotif('Algum campo em branco')
        return
      }
      axiosInstance.post('/api/atividades', {
        nome: this.nomeDaAtividade,
        descrição: this.descrição,
        data_inicio: FormataStringDataDoDB(this.dataInicio),
        data_fim: FormataStringDataDoDB(this.dataFim),
        finalizado: this.finalizado,
        projetos_id: this.projetoID
      })
        .then(
          (response) => {
            console.log(response)
            location.reload()
          })
        .catch((error) => {
          console.log(error)
        })
    },
    fechar () {
      this.$destroy()
      this.$el.parentNode.removeChild(this.$el)
    },
    showNotif ($msg) {
      this.$q.notify({
        message: $msg,
        color: 'red'
      })
    }
  },
  data () {
    return {
      nomeDaAtividade: '',
      descrição: '',
      dataInicio: '',
      dataFim: '',
      finalizado: false,
      id: 0
    }
  }
}

</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
