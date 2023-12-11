<template>
    <div>
        <nav>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/login">Login</NuxtLink>
        </nav>

        <div>
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
nav {
    /* background-color: green; */
    display: flex;
    justify-content: space-between;
    padding: 1rem 3rem;
    border-bottom: solid black 4px;
}

a {
    font-size: 2rem;
    color: black;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>