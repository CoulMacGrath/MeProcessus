<template>
  <v-text-field
    color="white"
    v-model="name"
    :counter="10"
    label="Name"
    required
    hide-details
  ></v-text-field>
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
  <v-btn type="submit" block class="mt-2" @click="sendReg">Submit</v-btn>
</template>

<script setup>
import { useCounterStore } from '@/stores/user/auth.ts'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

let email = ref('')
let password = ref('')
let name = ref('')
const store = useCounterStore()
async function sendReg() {
  store.sendReg({
    email: email.value,
    name: name.value,
    password: password.value    
  })
}
</script>

<style scoped>
</style>