<script>
export default{
    name: 'AulaExercicio1',
    data() {
        return {
            mensagem: 'Teste Mensagem'
        }
    },
    methods: {
        alterarMensagem() {
            this.mensagem = 'Mensagem Alterada!'
        }
    }
}
</script>
<template>
    <h1>{{ mensagem }}</h1>
    <button @click="alterarMensagem">Alterar Mensagem</button>
</template>
