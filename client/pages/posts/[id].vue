<template>
    <div class="article-container">
        <h1>{{ post.Title }}</h1>
        <img :src="post.Image" alt="">
        <p>
            {{ post.Description }}
        </p>
    </div>
</template>

<script setup>
    import axios from "axios";
    const {id} = useRoute().params
    const {data} = await axios({
        method: "get",
        url: `http://localhost:3000/posts/${id}`
    })

    const post = ref(data)

</script>

<style scoped>
.article-container {
    display: flex;
    flex-direction: column;
}

h1 {
    font-size: 3rem;
    text-align: center;
}

img {
    align-self: center;
    max-height: 400px;
}

p {
    font-size: 1.5rem;
    white-space: pre-line;
    line-height: 2rem;
    width: 700px;
    align-self: center;
}
</style>