<template>
  <v-text-field
    color="white"
    v-model="email"
    :counter="10"
    label="e-mail"
    required
    hide-details
  ></v-text-field>
  <v-text-field
    color="white"
    v-model="password"
    :counter="10"
    label="password"
    required
    hide-details
  ></v-text-field>
  <v-btn type="submit" block class="mt-2" @click="sendLog">Submit</v-btn>
  <v-btn type="submit" block class="mt-2" @click="checkAuth">CheckAuth</v-btn>
</template>

<script setup>
import { useCounterStore } from '@/stores/user/auth.ts'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

let email = ref('')
let password = ref('')
const store = useCounterStore()
async function sendLog() {
  store.sendLog({
    email: email.value,
    password: password.value    
  })
}
async function checkAuth(){
  store.checkAuth()
}
</script>

<style scoped>
</style>

