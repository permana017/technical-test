<script setup>
import DashboardLayout from "../layouts/DashboardLayout.vue";
import ListProvinci from "../components/ListProvinci.vue";
import CityList from "../components/CityList.vue";
</script>

<template>
  <DashboardLayout test="overview">
    <section
      class="bg-[#F7F8FA] mt-[68px] w-full py-[30px] px-[36px] box-border min-h-[calc(100vh-68px)] flex justify-between"
    >
      <ListProvinci />
      <CityList />
    </section>
  </DashboardLayout>
</template>

<style scoped></style>
