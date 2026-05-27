<script lang="ts">
import ExercioNum1View from './ExercioNum1View.vue'
import ExercioNum2View from './ExercioNum2View.vue'
import ExercioNum3View from './ExercioNum3View.vue'
import ExercioNum4View from './ExercioNum4View.vue'

export default {
  name: 'ExerciciosListView',
  components: {
    ExercioNum1View,
    ExercioNum2View,
    ExercioNum3View,
    ExercioNum4View,
  },
  data() {
    return {
      exercicios: [
        { num: 1, titulo: 'Mudar mensagem' },
        { num: 2, titulo: 'Card via props' },
        { num: 3, titulo: 'Seletor de cores' },
        { num: 4, titulo: 'Controle de caixas' },
        // { num: 5, titulo: 'Lifecycle Vue' },
      ],
    }
  },
  computed: {
    numRota() {
      return Number(this.$route.params.numero)
    },
    componenteAtual() {
      return this.numRota ? `ExercioNum${this.numRota}View` : ''
    },
    exercicioExiste() {
      if (this.numRota >= 1 && this.numRota <= 4) {
        return true
      }
      return false
    },
  },
}
</script>
<template>
  <h1>Exercicios</h1>
  <RouterLink
    v-for="exercicio in exercicios"
    :key="exercicio.num"
    :to="{ name: 'exercicios', params: { numero: exercicio.num } }"
  >
    Exercicio {{ exercicio.num }} - {{ exercicio.titulo }} <br />
  </RouterLink>
  Exercicio atual: {{ numRota }}
  <template v-if="numRota">
    <component :is="componenteAtual" v-if="exercicioExiste" />
  </template>
</template>
