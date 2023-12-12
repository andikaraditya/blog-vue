<template>
    <div class="article-container">
        <header>
            <div id="header-content">
            </div>
        </header>
        <h1>{{ post.Title }}</h1>
        <img :src="post.Image" alt="">
        <button
        v-if="access_token"
        class="pointer-hover"
        @click="navigateTo(`/edit/${post.id}`)"
        >Edit Post</button>
        <span>Posted by {{ post.User.username }} <br> {{ (new Date(post.createdAt)).toLocaleString("id-ID", {
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
header {
    height: 40vh;
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pigeon_Point_Lighthouse_%282016%29.jpg/2560px-Pigeon_Point_Lighthouse_%282016%29.jpg");
    background-size: 120%;
    margin-bottom: 3rem;
    position: absolute;
    width: 100%;
    z-index: -1;
}

#header-content {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.11);
}

h1 {
    font-size: 5rem;
    text-align: center;
    margin: 3rem auto;
    color: black;
}

.article-container {
    display: flex;
    flex-direction: column;
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
    margin: 1rem auto;
    text-align: center;
    line-height: 2rem;
}

p {
    font-size: 1.5rem;
    white-space: pre-line;
    line-height: 2rem;
    width: 700px;
    align-self: center;
    text-align: justify;
}

@media (max-width: 860px) {
    h1 {
        font-size: 4rem;
    }
    p {
        width: 80%;
    }
}
</style>