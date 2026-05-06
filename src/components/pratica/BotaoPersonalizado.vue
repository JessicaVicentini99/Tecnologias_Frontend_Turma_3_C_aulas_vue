<script>
export default {
    name: 'BotaoPersonalizado',
    props: {
        corDeFundo: {
            type: String,
            required: true
        },
        corTexto: {
            type: String,
            required: true
        },
        largura: {
            type: String,
            required: true
        },
        texto: {
            type: String,
            required: true
        }
    }
}
</script>
<template>
    <button
        :style="{
            backgroundColor: corDeFundo,
            color: corTexto,
            width: largura
        }"
    >
        {{ texto }}
    </button>
</template>