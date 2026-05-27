<script>
export default {
  name: 'HooksViews',
  data() {
    return {
      teste: 'Ola',
    }
  },
  beforeCreate() {
    console.log('beforeCreate: ainda nao existe o data, componente nao foi totalmente inicializado')
  },
  created() {
    console.log('created: data e props ja existem mas o DOM não')
  },
  beforeMount() {
    console.log('beforeMount, DOM esta prestes a ser criado')
  },
  mounted() {
    console.log('mounted: DOM foi inserido componente montado')
  },
  beforeUpdate() {
    console.log('beforeUpdate: algo vai ser alterado no DOM')
  },
  updated() {
    console.log('updated: DOM foi atualizado')
  },
  beforeUnmount() {
    console.log('beforeUnmount: DOM esta prestes a ser removido')
  },
  unmounted() {
    console.log('unmounted: DOM foi removido.')
  },
}
</script>
<template>
  <h1>Hooks</h1>
  {{ teste }}
</template>
