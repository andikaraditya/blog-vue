<template>
    <div class="article-container">
        <h1>{{ post.Title }}</h1>
        <img :src="post.Image" alt="">
        <button
        v-if="access_token"
        class="pointer-hover"
        @click="navigateTo(`/edit/${post.id}`)"
        >Edit Post</button>
        <span>Posted by {{ post.User.username }} | {{ (new Date(post.createdAt)).toLocaleString("id-ID", {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }) }}
        </span>
        <p>
            {{ post.Description }}
        </p>
    </div>
</template>

<script setup>
    import axios from "axios";

    const defaultStore = useDefaultStore()
    const {access_token} = storeToRefs(defaultStore)

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

button {
    font-size: 1.5rem;
    margin-top: 1rem;
    background-color: white;
    border-radius: 10px;
    padding: 0.5rem 1.5rem;
    width: 200px;
    margin: 1rem auto;
}

span {
    align-self: center;
    font-size: 1.3rem;
}

p {
    font-size: 1.5rem;
    white-space: pre-line;
    line-height: 2rem;
    width: 700px;
    align-self: center;
}
</style>