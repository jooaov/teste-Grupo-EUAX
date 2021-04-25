<template>
 <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
        <div v-if="!disabled" class="text-h5 q-mt-sm q-mb-xs">Novo Projeto</div>

      <q-card-section>
        <div v-if="disabled" class="text-h5 q-mt-sm q-mb-xs">Nome do Projeto</div>
        <q-input borderless v-if="!disabled" class="col-12" label="Nome do Projeto">
      </q-card-section>
      <q-separator />
      <q-card-section>
            <q-item-label v-if="disabled" caption>Descrição do projeto</q-item-label>
            <q-input borderless v-if="!disabled" class="col-12" label="Descrição do projeto">
      </q-card-section>
      <q-separator />
       <q-card-actions>
            <q-btn v-if="disabled" :to="{ path: '/projeto/finalizar' }" color="primary" flat>Finalizar</q-btn>
            <q-btn v-if="disabled" :to="{ path: '/projeto/apagar' }" color="primary" flat>Apagar</q-btn>
            <q-btn v-if="disabled" :to="{ path: '/informacoes/1' }" color="primary" flat>Editar/Atividades</q-btn>
            <q-btn v-if="!disabled" color="primary" flat>Salvar</q-btn>
          </q-card-actions>
    </q-card>
 </div>
</template>

<script>
export default {
  name: 'cardProjeto',
  props: ['disabled']

}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
