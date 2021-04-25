<template>
<div class="row">
    <CardProjeto
    v-for="item in projetos"
    :key="item"
    :disabled="true"
    />

    <CardProjeto :disabled="false"/>
</div>
</template>

<script>
import CardProjeto from 'src/components/cardProjeto.vue'

export default {
  name: 'PageIndex',
  components: { CardProjeto },
  data () {
    return {
      projetos: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  },
  methods: {
    forgotPassword () {
    }
  }

}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
