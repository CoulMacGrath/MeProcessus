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

<script setup lang="ts">
import { url } from 'inspector'
import { ref } from 'vue'

let email = ref('')
let name = ref('')
let password = ref('')

async function sendReg() {
  console.log({
    email: email.value,
    name: name.value,
    password: password.value
  })
  let response = await postData('http://localhost:3000/authentication/register', {
    email: email.value,
    name: name.value,
    password: password.value
  })
  console.log(response)
}
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  })
  return response.json() // parses JSON response into native JavaScript objects
}
</script>

<style scoped>
</style>