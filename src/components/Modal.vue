<script setup>
import { Icon } from "@iconify/vue";
import { defineProps } from "vue";

const props = defineProps({
  img: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "Camilla Rios",
  },
  email: {
    type: String,
    default: "cammila@mail.com",
  },
  phone: {
    type: String,
    default: "+5611229933444",
  },
  address: {
    type: String,
    default: "",
  },
  job: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div
    class="fixed bg-[#D9D9D980] top-0 left-0 w-[100%] h-[100vh] flex items-center justify-center"
  >
    <div class="p-3 bg-white rounded-[10px] w-">
      <div class="flex py-6 pl-6">
        <img
          :src="props.img"
          height="150"
          width="150"
          alt=""
          class="mr-9 rounded-full"
        />
        <div class="text-[#080808] font-medium mr-10">
          <h1 class="text-[40px]">{{ props.name }}</h1>
          <p class="text-xl">{{ props.email }}</p>
          <p>{{ props.phone }}</p>
        </div>
        <div>
          <Icon
            icon="mdi:close"
            color="#fa1212"
            width="24"
            height="24"
            class="cursor-pointer"
            @click="$emit('modalClose')"
          />
        </div>
      </div>
      <div class="pl-6 py-6">
        <div class="text-[#080808] font-medium text-xl flex mb-3">
          <p>Gender :</p>
          <p class="text-[#7C7C7C] ml-2 text-lg">{{ props.gender }}</p>
        </div>
        <div class="text-[#080808] font-medium text-xl flex mb-3">
          <p>Job :</p>
          <p class="text-[#7C7C7C] ml-2 text-lg">{{ props.job }}</p>
        </div>
        <div class="text-[#080808] font-medium text-xl flex mb-3">
          <p>City :</p>
          <p class="text-[#7C7C7C] ml-2 text-lg">{{ props.city }}</p>
        </div>
        <div class="text-[#080808] font-medium text-xl flex mb-3">
          <p>Street :</p>
          <p class="text-[#7C7C7C] ml-2 text-lg">{{ props.address }}</p>
        </div>
        <div class="text-[#080808] font-medium text-xl flex mb-3">
          <p>Country :</p>
          <p class="text-[#7C7C7C] ml-2 text-lg">{{ props.country }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
