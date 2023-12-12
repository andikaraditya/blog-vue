<template>
    <div>
        <nav>
            <NuxtLink to="/">Home</NuxtLink>
            <a v-if="access_token" @click.prevent="handleLogout" href="">Logout</a>
            <NuxtLink v-else to="/login">Login</NuxtLink>
        </nav>

        <div>
            <slot />
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";

const defaultStore = useDefaultStore()
const {access_token} = storeToRefs(defaultStore)
const cookie = useCookie()

function handleLogout() {
    cookie.value = null
    defaultStore.clearStoreToken()
    // localStorage.removeItem("access_token")
}
</script>

<style scoped>
nav {
    /* background-color: green; */
    display: flex;
    justify-content: space-between;
    padding: 1rem 3rem;
    border-bottom: solid var(--black) 4px;
}

a {
    font-size: 2rem;
    color: var(--black);
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>