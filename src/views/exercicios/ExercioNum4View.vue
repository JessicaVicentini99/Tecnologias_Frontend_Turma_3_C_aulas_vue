<script>
import AulaExercicio4 from '@/components/exercicios/AulaExercicio4.vue'

export default {
  name: 'ExercioNum4View',
  components: {
    AulaExercicio4,
  },
  data() {
    return {
      listaTamanhos: [
        { nome: 'Pequena', valor: '100px' },
        { nome: 'Media', valor: '160px' },
        { nome: 'Grande', valor: '220px' },
      ],
    }
  },
}
</script>
<template>
  <h2>Exercicio 4</h2>
  <AulaExercicio4 :tamanhos="listaTamanhos" />
</template>
