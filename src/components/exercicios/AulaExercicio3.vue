<script>
export default{
    name: 'AulaExercicio3',
    props: {
        cores: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            corSelecionada: ''
        }
    },
    methods: {
        selecionarCor(cor) {
            this.corSelecionada = cor
        }
    }
}
</script>
<template>
    <h1>Exercicio 3</h1>
    <h3>Voce selecionou a cor: {{ corSelecionada }}</h3>
    <button 
        v-for="cor in cores" :key="cor"
        @click="selecionarCor(cor)"
        :style="{borderColor: corSelecionada === cor ? cor : '#b0b0b0'}"
        >
        {{ cor }}
    </button>
</template>
