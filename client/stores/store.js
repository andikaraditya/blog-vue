import { defineStore } from "pinia"

export const useDefaultStore = defineStore("defaultStore", {
    state: () => {
        const cookie = useCookie()
        return {
            access_token: cookie.value
        }
    },
    actions: {
        setStoreToken(token) {
            this.access_token = token
        },
        clearStoreToken() {
            this.access_token = ""
        }
    }
})