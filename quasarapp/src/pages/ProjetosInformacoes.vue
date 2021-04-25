<template>
    <div>
      <h2 class="items-center">nome do projeto</h2>
      <div class="row">
        <q-input class="col-3" mask="##/##/####" fill-mask outlined v-model="dataFim" label="Data Início"  />
        <q-input class="col-3" mask="##/##/####" fill-mask outlined v-model="dataInicio" label="Data de fim"  />
         <q-btn color="secondary" label="Salvar" />
      </div>
      <q-separator style="margin-top: 1%;" />
      <div class="row">
        <span  v-for="item in atividades" :key="item">
          <CardAtividade :disabled="true"/>
        </span>
          <CardAtividade :disabled="false"/>
      </div>
    </div>
</template>

<script>
import CardAtividade from 'src/components/cardAtividade.vue'

export default {
  name: 'informações',
  props: ['id'],
  components: { CardAtividade },
  data () {
    return {
      dataFim: '',
      dataInicio: '',
      atividades: [1, 2, 3, 4, 5, 6]
    }
  },
  methods: {
    onClick () {
    }
  },
  beforeMount () {
  }
}
</script>
