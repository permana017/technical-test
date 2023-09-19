<script setup>
import DashboardLayout from "../layouts/DashboardLayout.vue";

function handleClick(params) {
  console.log("dashboard");
}
</script>

<template>
  <DashboardLayout>
    <div>Home</div>
    <router-link to="/dashboard">
      <button @click="handleClick()">Dashboard</button>
    </router-link>
  </DashboardLayout>
</template>
