<template>
    <div>
        <h1>Home</h1>
        <div class="post-container">
            <button
            @click="navigateTo(`/create`)"
            class="pointer-hover"
            >
                Create Post
            </button>
            <PostCard 
            v-for="post in posts"
            :key="post.id"
            :post="post"
            />
        </div>
    </div>
</template>

<script setup>
import axios from "axios";

const {data} = await axios({
    method: "get",
    url: "http://localhost:3000/posts"
})

const posts = ref(data)

</script>

<style scoped>
h1 {
    font-size: 3rem;
    text-align: center;
    margin: 1rem 0;
}

button {
    font-size: 1.5rem;
    padding: 0.5rem;
    background-color: white;
    border-radius: 10px;
    border: solid black 1px;
    width: 150px;
    align-self: center;
    margin-bottom: 1rem;
}

.post-container {
    display: flex;
    flex-direction: column;
}
</style>