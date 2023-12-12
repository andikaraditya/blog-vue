<template>
    <div>
        <header>
            <div id="header-content">
                <h1>Lightstation Blog</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur totam doloremque sed id debitis unde reiciendis cupiditate deserunt sunt placeat. Rerum beatae iste commodi laborum accusamus iure sed, eius tempore.
                </p>
                <button
                v-if="access_token"
                @click="navigateTo(`/create`)"
                class="pointer-hover"
                >
                    Create Post
                </button>
                <button
                v-else
                @click="navigateTo(`/login`)"
                class="pointer-hover"
                >
                    Login to create post
                </button>
            </div>
        </header>
        <p id="body-title">My Journals</p>
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

const defaultStore = useDefaultStore()
const {access_token} = storeToRefs(defaultStore)

const {data} = await axios({
    method: "get",
    url: "http://localhost:3000/posts"
})

const posts = ref(data)

</script>

<style scoped>
header {
    height: 80vh;
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pigeon_Point_Lighthouse_%282016%29.jpg/2560px-Pigeon_Point_Lighthouse_%282016%29.jpg");
    background-size: cover;
    background-position-y: -40px;
    margin-bottom: 3rem;
}

#header-content {
    background-color: green;
    width: 50%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.185);
    display: flex;
    flex-direction: column;
}

#header-content p {
    text-align: center;
    font-size: 1.8rem;
    color: black;
    width: 80%;
    align-self: center;
}

h1 {
    font-size: 5rem;
    text-align: center;
    margin: 0;
    color: black;
    padding: 2rem 0;
}

button {
    font-size: 1.5rem;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 10px;
    border: solid black 2px;
    width: 200px;
    align-self: center;
    margin-bottom: 1rem;
    color: black;
}

#body-title {
    font-size: 3rem;
    text-align: center;
}
.post-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>