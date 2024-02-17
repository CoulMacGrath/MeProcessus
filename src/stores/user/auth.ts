import { defineStore } from 'pinia'
import { ref } from 'vue'
import { makeRequest } from '@/helper'

type UserLogInput = {
    email: string,
    password: string
}
type UserRegInput = {
    email: string,
    name: string
    password: string
}


export const useCounterStore = defineStore('auth', () => {
    async function sendLog(payload: UserLogInput) {
        console.log(payload)
        const response = await makeRequest('http://localhost:3000/authentication/log-in', payload, 'Post')
        console.log(response)
    }
    async function sendReg(payload: UserRegInput) {
        console.log(payload)
        const response = await makeRequest('http://localhost:3000/authentication/register', payload, 'post')
        console.log(response)
    }
    async function checkAuth() {

        try {
            const response = await makeRequest('http://localhost:3000/authentication', null, 'Get')
            console.log(response)
            return true
        }
        catch (error) {
            return false
        }

    }
    return { sendLog, sendReg, checkAuth }
})
