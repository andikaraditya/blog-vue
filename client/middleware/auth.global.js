export default defineNuxtRouteMiddleware((to, from) => {
    const cookie = useCookie()
    // console.log(cookie.value)
    if (cookie.value && (to.path === "/login" || to.path === "/register")) {
        return navigateTo("/")
    }

    if (!cookie.value && (to.path === "/create" || to.name === "edit-id")) {
        return navigateTo("/")
    }
})
