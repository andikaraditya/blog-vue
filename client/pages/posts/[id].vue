<template>
    <div class="article-container">
        <h1>Post number: {{ id }}</h1>
        <img src="https://placehold.co/600x400" alt="">
        <p>
            {{ text }}
        </p>
    </div>
</template>

<script setup>
    const {id} = useRoute().params
    const text = ref("Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque voluptates modi dignissimos asperiores aliquid veniam quaerat, laborum quas veritatis porro rem aspernatur eum ullam illo vel. Nulla, saepe nemo?\nModi, optio cumque distinctio aperiam facilis maiores laudantium adipisci, sit aut quas eos itaque qui? Laboriosam, omnis  soluta. Voluptatem pariatur consectetur laudantium doloremque maxime dolore deleniti molestias aliquam dolorem ducimus? Alias ad rerum mollitia soluta at cupiditate doloribus, voluptas tenetur? Est quo, officiis repellat harum dolor debitis? A dolorumnisi vel inventore voluptatem quo beatae ad illum? Quam, ea magni.\nAccusantium odit in asperiores eum officia inventore corporis iure vero pariatur, doloribus ad, deleniti quo id placeat odio at nesciunt ea iusto architecto totam? Animi repudiandae recusandae modi doloribus voluptatibus.\nVeniam doloribus cupiditate illo delectus unde numquam voluptas reprehenderit laudantium optio, quidem ipsam, magni sapiente expedita quos quae sunt ad! Fugiat reprehenderit autem praesentium iste aperiam! Fugiat, odio saepe? Possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eius tempora, veritatis ut assumenda dolorem eveniet consequuntur consectetur eum debitis iusto dolore, quo omnis illum reiciendis. Dolore harum repellendus vel.\nExercitationem magnam ullam doloremque magni nihil itaque tempore dolores obcaecati. Officiis nulla blanditiis eveniet repudiandae nostrum quibusdam perferendis repellat eius quis ipsa, accusamus libero inventore molestias suscipit excepturi vero minima?\nNam alias quaerat, ea consectetur dignissimos voluptate aspernatur! Illum earum quia omnis magnam reprehenderit rem accusantium distinctio expedita, adipisci, natus at quae quasi eveniet aut officia, iste similique facilis impedit.")
</script>

<style scoped>
.article-container {
    display: flex;
    flex-direction: column;
}

h1 {
    font-size: 3rem;
    text-align: center;
}

img {
    align-self: center;
    max-height: 400px;
}

p {
    font-size: 1.5rem;
    white-space: pre-line;
    line-height: 2rem;
    width: 700px;
    align-self: center;
}
</style>