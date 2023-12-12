<template>
    <div 
    @click="navigateTo(`/posts/1`)"
    class="post-card pointer-hover">
        <h2>Post Title</h2>
        <span>Posted by anonymous | date</span>
        <div class="card-text">
            <p>
                {{ text }}
            </p>
        </div>
        <p>
            ... read more
        </p>
    </div>
</template>

<script setup>
const text = ref("Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque voluptates modi dignissimos asperiores aliquid veniam quaerat, laborum quas veritatis porro rem aspernatur eum ullam illo vel. Nulla, saepe nemo?\nModi, optio cumque distinctio aperiam facilis maiores laudantium adipisci, sit aut quas eos itaque qui? Laboriosam, omnis  soluta. Voluptatem pariatur consectetur laudantium doloremque maxime dolore deleniti molestias aliquam dolorem ducimus? Alias ad rerum mollitia soluta at cupiditate doloribus, voluptas tenetur? Est quo, officiis repellat harum dolor debitis? A dolorumnisi vel inventore voluptatem quo beatae ad illum? Quam, ea magni.\nAccusantium odit in asperiores eum officia inventore corporis iure vero pariatur, doloribus ad, deleniti quo id placeat odio at nesciunt ea iusto architecto totam? Animi repudiandae recusandae modi doloribus voluptatibus.\nVeniam doloribus cupiditate illo delectus unde numquam voluptas reprehenderit laudantium optio, quidem ipsam, magni sapiente expedita quos quae sunt ad! Fugiat reprehenderit autem praesentium iste aperiam! Fugiat, odio saepe? Possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eius tempora, veritatis ut assumenda dolorem eveniet consequuntur consectetur eum debitis iusto dolore, quo omnis illum reiciendis. Dolore harum repellendus vel.\nExercitationem magnam ullam doloremque magni nihil itaque tempore dolores obcaecati. Officiis nulla blanditiis eveniet repudiandae nostrum quibusdam perferendis repellat eius quis ipsa, accusamus libero inventore molestias suscipit excepturi vero minima?\nNam alias quaerat, ea consectetur dignissimos voluptate aspernatur! Illum earum quia omnis magnam reprehenderit rem accusantium distinctio expedita, adipisci, natus at quae quasi eveniet aut officia, iste similique facilis impedit.")
</script>

<style scoped>
.post-card {
    width: 500px;
    border: solid black 2px;
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
}
</style>
