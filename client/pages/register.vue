<template>
    <div class="login-card">
        <h1>Register</h1>
        <p>Click <NuxtLink to="/login">here</NuxtLink> to login</p>
        <form @submit.prevent="handleRegister">
            <div class="form-group">
                <label for="">Username</label>
                <input v-model="username" type="text" placeholder="Enter your username" required>
            </div>
            <div class="form-group">
                <label for="">Email</label>
                <input v-model="email" type="email" placeholder="Enter your email" required>
            </div>
            <div class="form-group">
                <label for="">Password</label>
                <input v-model="password" type="password" placeholder="Enter your password" required>
            </div>
            <button class="pointer-hover">Login</button>
        </form>
    </div>
</template>

<script setup>
    import axios from "axios";
    const email = ref("")
    const password = ref("")
    const username = ref("")

    async function handleRegister() {
        try {
            const {data} = await axios({
                method: "post",
                url: "http://localhost:3000/register",
                data: {
                    username: username.value,
                    email: email.value,
                    password: password.value
                }
            })
            navigateTo("/login")
        } catch (error) {
            console.log(error)
        }
    }
</script>

<style scoped>
.login-card {
    /* background-color: red; */
    width: 500px;
    text-align: center;
    margin: 4rem auto;
    border: solid var(--black) 2px;
    padding: 3rem 1rem;
    border-radius: 10px;
}

h1 {
    font-size: 3rem;
    margin: 1rem;
}

.form-group {
    /* background-color: green; */
    width: 90%;
    margin: auto;
}

p {
    font-size: 1.5rem;
}

p a {
    color: var(--black);
    font-weight: bold;
}

label, input {
    display: block;
}
label {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    /* text-align: left; */
}

input {
    width: 90%;
    margin: 1rem auto;
    height: 2.5rem;
    border-radius: 10px;
    border: solid var(--black) 1px;
    padding-left: 1rem;
}

button {
    font-size: 1.5rem;
    margin-top: 1rem;
    background-color: white;
    border-radius: 10px;
    padding: 0.5rem 1.5rem;
}
</style>