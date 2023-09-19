<script setup>
import axios from "axios";
import Logo2 from "../components/Logo2.vue";
import Logo1 from "../components/Logo1.vue";
import { onMounted, ref, defineProps } from "vue";

const data = ref([]);
const onClick = ref("");
const props = defineProps({
  test: {
    type: String,
    default: "",
  },
});
const handleClick = (val) => {
  props.test = val;
};

onMounted(() => {
  console.log("test dulu", props.test);
});
</script>

<template>
  <div class="flex justify-between w-full">
    <div class="flex w-full">
      <section class="w-[18%] shadow-md h-[100vh] fixed">
        <div class="p-8">
          <h1 class="font-extrabold text-3xl text-[#152544]">heylink.</h1>
        </div>
        <div class="pl-10 pr-[10px] font-medium text-base">
          <router-link to="/dashboard">
            <div
              :class="
                props.test == 'dashboard'
                  ? `py-4 flex items-center bg-[#E3F2FD] rounded-lg`
                  : 'py-4 flex items-center hover:bg-[#E3F2FD] rounded-lg'
              "
              @click="handleClick('dashboard')"
            >
              <Logo1 class="ml-2" />
              <p class="ml-[10px]">Dashboard</p>
            </div>
          </router-link>
          <router-link to="/overview">
            <div
              :class="
                props.test == 'overview'
                  ? `py-4 flex items-center bg-[#E3F2FD] rounded-lg`
                  : 'py-4 flex items-center hover:bg-[#E3F2FD] rounded-lg'
              "
              @click="handleClick('overview')"
            >
              <Logo2 class="ml-2" />
              <p class="ml-[10px]">Overview</p>
            </div>
          </router-link>
        </div>
      </section>
      <section class="w-[82%] bg-[#F7F8FA] relative left-[18%]">
        <div class="px-[36px] pt-7 pb-3 shadow-s bg-white fixed w-full">
          <p class="font-semibold text-lg">Conversion</p>
        </div>
        <slot />
      </section>
    </div>
  </div>
</template>

<style scoped></style>
