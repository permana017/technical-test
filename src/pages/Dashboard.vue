<script setup>
import axios from "axios";
import { onMounted, ref, computed } from "vue";
import Card from "../components/Card.vue";
import card from "../assets/js/card";
import ListUser from "../components/ListUser.vue";
import DashboardLayout from "../layouts/DashboardLayout.vue";

const data = ref([]);

const getData = async () => {
  axios
    .get("https://api.slingacademy.com/v1/sample-data/users")
    .then((res) => {
      data.value = res.data?.users;
    })
    .catch((err) => {
      console.log(err);
    });
};

onMounted(() => {
  getData();
});
</script>

<template>
  <DashboardLayout test="dashboard">
    <div class="w-full py-[30px] px-[36px] box-border mt-[68px]">
      <section class="flex justify-between w-full">
        <Card
          v-for="(item, index) in card"
          :key="index"
          :title="item.title"
          :icon="item.icon1"
          :body="item.body"
          :color="item.color"
        />
      </section>
      <ListUser />
    </div>
  </DashboardLayout>
</template>

<style scoped></style>
