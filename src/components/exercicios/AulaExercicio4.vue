<script>
export default {
    name: 'AulaExercicio4',
    props: {
        tamanhos: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            tamanhoSelecionado: this.tamanhos[0]
        }
    },
    methods: {
        selecionarTamanho(tamanho) {
            console.log('Clicou', tamanho)
            this.tamanhoSelecionado = tamanho
        },
    }
}
</script>
<template>
    <div v-if="tamanhos">
        <button
            v-for="tamanho in tamanhos"
            @click="selecionarTamanho(tamanho)"
        >
        {{ tamanho.nome }}
        </button>
    </div>
    <div 
        class="caixa"
        :style="{
            width: tamanhoSelecionado.valor,
            height: tamanhoSelecionado.valor
        }"
    >

    </div>

</template>
<style>
.caixa {
    background-color: blueviolet;
    width: 100px;
    height: 100px;
}
</style>