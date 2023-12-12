<template>
    <div>
        <h1>Home</h1>
        <div class="post-container">
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
}

.post-container {
    display: flex;
    flex-direction: column;
}
</style>