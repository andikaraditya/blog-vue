import { defineStore } from "pinia"

export const useDefaultStore = defineStore("defaultStore", {
    state: () => {
        return {
            access_token: ""
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