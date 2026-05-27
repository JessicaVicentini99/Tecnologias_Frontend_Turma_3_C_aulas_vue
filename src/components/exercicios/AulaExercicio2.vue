<script>
export default{
    name: 'AulaExercicio2',
    props: {
        titulo: String,
        descricao: String,
        imagem: String
    }
}
</script>
<template>
    <div class="card">
        <img :src="imagem">
        <h2>{{ titulo }}</h2>
        <p>{{ descricao }}</p>
    </div>
</template>
<style>
.card {
    background-color: aliceblue;
    width: 300px;
}
.card img {
    width: 150px;
}
</style>
