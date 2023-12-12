<template>
    <div 
    @click="navigateTo(`/posts/${post.id}`)"
    class="post-card pointer-hover">
        <h2>{{ post.Title }}</h2>
        <span>Posted by {{ post.User.username }} | {{ (new Date(post.createdAt)).toLocaleString("id-ID", {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }) }}
        </span>
        <div class="card-text">
            <p>
                {{ post.Description }}
            </p>
        </div>
        <p>
            ... read more
        </p>
    </div>
</template>

<script setup>
const {post} = defineProps(["post"])

</script>

<style scoped>
.post-card {
    width: 500px;
    border: solid var(--black) 2px;
    padding: 1rem 3rem;
    height: 400px;
    align-self: center;
    margin-bottom: 2rem;
    border-radius: 10px;
}

h2 {
    font-size: 1.8rem;
}

.card-text {
    height: 60%;
    overflow: hidden;
    /* background-color: green; */
}

p {
    font-size: 1.5rem;
    white-space: pre-line;
    line-height: 2rem;
    text-align: justify;
}
</style>
