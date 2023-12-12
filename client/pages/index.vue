<template>
    <div>
        <h1>Home</h1>
        <div class="post-container">
            <PostCard 
            v-for="i in 5"
            :key="i"
            />
        </div>
    </div>
</template>

<script setup>

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