<template>
    <div class="login-card">
        <h1>Login</h1>
        <p>Click <NuxtLink to="/register">here</NuxtLink> to register</p>
        <form>
            <div class="form-group">
                <label for="">Email</label>
                <input type="text" placeholder="Enter your email">
            </div>
            <div class="form-group">
                <label for="">Password</label>
                <input type="password" placeholder="Enter your password">
            </div>
            <button class="pointer-hover">Login</button>
        </form>
    </div>
</template>

<script setup>

</script>

<style scoped>
.login-card {
    /* background-color: red; */
    width: 500px;
    text-align: center;
    margin: 4rem auto;
    border: solid black 2px;
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
    border: solid black 1px;
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