<template>
    <div>
        <h1>Create New Post</h1>
        <div class="form-card">
            <form @submit.prevent="handleCreate" action="">
                <label for="">Title</label>
                <input v-model="Title" type="text" name="" id="" placeholder="Enter post title">
                <label for="">Content</label>
                <textarea v-model="Description" name="" id="" cols="30" rows="10" placeholder="Enter post content"></textarea>
                <label for="">Image</label>
                <input v-model="Image" type="text" name="" id="" placeholder="Enter image url">
                <button class="pointer-hover">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
    import axios from "axios";
    const Title = ref("")
    const Description = ref("")
    const Image = ref("")

    async function handleCreate() {
        try {
            const {data} = await axios({
                method: "post",
                url: "http://localhost:3000/posts",
                data: {
                    Title: Title.value,
                    Description: Description.value,
                    Image: Image.value
                },
                headers: {
                    access_token: localStorage.access_token
                }
            })

            navigateTo("/")
        } catch (error) {
            console.log(error)
        }
    }
</script>

<style scoped>
h1 {
    font-size: 3rem;
    text-align: center;
    margin: 1rem 0;
}

.form-card {
    /* background-color: red; */
    width: 500px;
    text-align: center;
    margin: 4rem auto;
    border: solid black 2px;
    padding: 2rem 1rem;
    border-radius: 10px;
}

label, input {
    display: block;
}
label {
    font-size: 2rem;
    margin-bottom: 1rem;
}

input {
    width: 90%;
    margin: 1rem auto;
    height: 2.5rem;
    border-radius: 10px;
    border: solid black 1px;
    padding-left: 1rem;
}

textarea {
    width: 90%;
    margin: 1rem auto;
    height: 400px;
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