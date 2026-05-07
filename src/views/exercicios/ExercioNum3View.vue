<script>
import AulaExercicio3 from '@/components/exercicios/AulaExercicio3.vue'

export default{
    name: 'ExercicioNum1View',
    components: {
        AulaExercicio3
    },
    data() {
        return {
            lista: ['blue', 'green', 'red', 'purple', 'orange']
        }
    }
}
</script>
<template>
   <AulaExercicio3 :cores="lista"/>
</template>
