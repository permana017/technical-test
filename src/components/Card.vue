<script setup>
import { defineProps } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  body: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="w-[32%]">
    <div class="pl-6 pr-[18px] py-4 bg-white rounded-t-[10px]">
      <div class="flex justify-between items-end">
        <p class="text-[#727272] text-[12px] font-semibold">
          {{ props.title }}
        </p>
        <div
          class="h-[34.5px] w-[34.5px] rounded bg-[#F2F4F7] flex justify-center items-center"
        >
          <Icon
            icon="solar:square-transfer-horizontal-linear"
            color="#817F7F"
            width="23"
          />
        </div>
      </div>
      <p class="mt-[10px] mb-[22px] font-semibold text-xl">
        {{ props.body }}
      </p>
    </div>
    <div
      class="py-4 pl-6 pr-[18px] bg-[#F9FAFC] rounded-b-[10px] flex justify-between items-center"
    >
      <div class="flex">
        <Icon :icon="props.icon" width="16" :color="props.color" />
        <p :class="`text-[${props.color}] font-semibold text-[10px] mr-2 ml-1`">
          2,15%
        </p>
        <p class="text-[#AAAAAA] font-normal text-[10px]">Last Month</p>
      </div>
      <p class="text-[10px] font-semibold text-[#6E6E6E]">View More</p>
    </div>
  </div>
</template>
