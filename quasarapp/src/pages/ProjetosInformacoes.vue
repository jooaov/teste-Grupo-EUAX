<template>
    <div>
      <h2 class="items-center" v-if="!edit">{{nomeDoProjeto}}</h2>
      <h2 class="items-center" v-if="edit"><q-input v-model="nomeDoProjeto" label="Standard" /></h2>

        <q-item-label  v-if="!edit" caption>{{descrição}}</q-item-label>
      <h2 class="items-center" v-if="edit"><q-input v-model="descrição" label="Standard" /></h2>
      <div class="row">
        <q-input class="col-3" :disable="!edit" mask="##/##/####" fill-mask outlined v-model="dataInicio" label="Data Início"  />
        <q-input class="col-3" :disable="!edit" mask="##/##/####" fill-mask outlined v-model="dataFim" label="Data de fim"  />
         <q-btn-group>
         <q-btn color="secondary" v-if="edit"  @click="editarProjeto" label="Salvar" />
         <q-btn color="secondary" v-if="!edit" @click="edit=!edit" label="Editar" />
         </q-btn-group>
      </div>
      <q-separator style="margin-top: 1%;" />
      <div class="row">
        <span  v-for="atividade in atividades" :key="atividade.id">
          <CardAtividade :atividade="atividade" />
        </span>
          <CardAtividadeCreate :projetoID="id" />
      </div>
    </div>
</template>

<script>
import { axiosInstance } from 'src/tools/axios'
import { FormataStringData, FormataStringDataDoDB, CompararDatas } from 'src/tools/dateFormat'
import CardAtividade from 'src/components/cardAtividade'
import CardAtividadeCreate from 'src/components/cardAtividadeCreate'

export default {
  name: 'informações',
  props: ['id'],
  components: { CardAtividade, CardAtividadeCreate },
  data () {
    return {
      dataFim: '',
      dataInicio: '',
      atividades: [],
      projeto: {},
      edit: false,
      nomeDoProjeto: '',
      descrição: ''
    }
  },
  methods: {
    editarProjeto () {
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
      this.edit = !this.edit
      axiosInstance.put('/api/projetos/' + this.id, {
        nome: this.nomeDoProjeto,
        data_inicio: FormataStringDataDoDB(this.dataInicio),
        data_fim: FormataStringDataDoDB(this.dataFim),
        descrição: this.descrição
      }).then(
        (response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
          this.showNotif(error.response.data)
        })
    },
    getAtividades () {
      axiosInstance.get('/api/atividades/projeto/' + this.id).then(
        (response) => {
          this.atividades = response.data
          console.log(this.projetos)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getProjeto () {
      axiosInstance.get('/api/projetos/' + this.id).then(
        (response) => {
          this.projeto = response.data
          this.dataFim = FormataStringData(response.data.data_fim)
          this.dataInicio = FormataStringData(response.data.data_inicio)
          this.nomeDoProjeto = response.data.nome_do_projeto
          this.descrição = response.data.descrição
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
    }
  },
  beforeMount () {
    this.getProjeto()
    this.getAtividades()
  }
}
</script>
