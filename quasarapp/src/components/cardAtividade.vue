<template>
 <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <div v-if="!disabled" class="text-h5 q-mt-sm q-mb-xs">Nova Atividade</div>
      <q-card-section>
        <div class="text-h5 q-mt-sm q-mb-xs" v-if="disabled">nome da atividade</div>
        <q-input borderless v-if="!disabled" class="col-12" label="nome da atividade">
      </q-card-section>
      <q-separator />
      <q-card-section>
            <q-item-label v-if="disabled" caption>Descrição da atividade</q-item-label>
            <q-input borderless v-if="!disabled" class="col-12" label="Descrição da atividade">
      </q-card-section>
      <q-separator />
       <q-card-actions>
         <div class="row">
            <q-input class="col-6" mask="##/##/####" fill-mask outlined label="Data Inicial" :disable="disabled" />
            <q-input class="col-6" mask="##/##/####" fill-mask outlined label="Data Final" :disable="disabled" />
         </div>
          <div class="q-gutter-sm">
            <q-checkbox label="Finalizado" />
          </div>
          <div class="row">
            <q-btn class="col-6" color="primary" flat>Salvar</q-btn>
            <q-btn class="col-6" color="red" @click="apagarAtividade" flat>Apagar</q-btn>
         </div>
        </q-card-actions>
    </q-card>
 </div>
</template>

<script>
export default {
  name: 'cardAtividade',
  props: {
    disabled: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    apagarAtividade () {
      // if (!this.disabled) {
      this.$emit('deletarCard', 1)
      // }
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
