<script>
import BotaoPersonalizado from '@/components/pratica/BotaoPersonalizado.vue';
export default {
    name: 'Pratica1View',
    components: {
        BotaoPersonalizado
    }
}
</script>
<template>
    <h1>Pratica 1</h1>
    <BotaoPersonalizado
        texto="Confirmar"
        cor-de-fundo="#78ff85"
        cor-texto="#000000"
        largura="150px"
    />
    <br>
    <BotaoPersonalizado
        texto="Cancelar"
        cor-de-fundo="#d40808"
        cor-texto="#000000"
        largura="150px"
    />
</template>