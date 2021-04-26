<template>
<div>
  <div>
    <h4>Progresso total</h4>
    <q-linear-progress rounded size="20px" :value="porcentagem" color="blue" class="q-mt-sm" >
      <div class="absolute-full flex flex-center">
        <q-badge color="white" text-color="accent" :label="porcentagemCampo" />
      </div>
    </q-linear-progress>
  </div>
  <div class="row">
      <CardProjeto
      v-for="projeto in projetos"
      :key="projeto.id"
      :disabled="true"
      :projeto="projeto"
      />

      <CardProjeto :disabled="false"/>
  </div>
</div>
</template>

<script>
import CardProjeto from 'src/components/cardProjeto.vue'
import { axiosInstance } from 'src/tools/axios'

export default {
  name: 'PageIndex',
  components: { CardProjeto },
  data () {
    return {
      projetos: [],
      porcentagem: 0.5,
      porcentagemCampo: '0%'
    }
  },
  methods: {
    getProjetos () {
      axiosInstance.get('/api/projetos').then(
        (response) => {
          if (response.data.length !== 0) {
            const porcentagem = response.data.pop()
            this.porcentagem = porcentagem / 100

            const porcentagemCompleta = this.porcentagem * 100
            this.porcentagemCampo = porcentagemCompleta + '%'

            this.projetos = response.data
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  beforeMount () {
    this.getProjetos()
  }
}
</script>
