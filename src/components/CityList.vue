<script setup>
import city from "../assets/js/city";
import { onMounted, ref, computed } from "vue";

const cityById = ref(null);
const cityId = ref(null);
const sort = ref("");

const search = (id) => {
  let data = city.find((item) => {
    return item.id === id;
  });
  cityById.value = data;
};

const handleSearch = (param) => {
  search(param);
};

const sorting = computed(() => {
  cityById.value = null;
  if (sort.value === "z-a") {
    city.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sort.value === "a-z") {
    city.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    city.sort((a, b) => a.id - b.id);
  }
});

onMounted(() => {});
</script>

<template>
  <section class="mt-[31px] bg-white rounded-t-[10px] w-[48%]">
    <div class="px-7 pt-6 pb-4">
      <p class="text-lg text-[#080808] font-semibold">City List</p>
      <p>{{ sorting }}</p>
      <div class="flex justify-between mt-5">
        <div>
          <select
            v-model="sort"
            name="sort"
            id=""
            class="p-2 border rounded-lg focus:outline-none text-ceter text-base font-medium"
          >
            <option disabled value="">Sort by</option>
            <option value="id">Sort By id</option>
            <option value="a-z">Sort A-Z</option>
            <option value="z-a">Sort Z-A</option>
          </select>
        </div>
        <div>
          <input
            type="number"
            placeholder="Search city by id"
            class="p-2 border rounded-lg focus:outline-none text-ceter text-base font-medium"
            v-model="cityId"
          />
          <button
            class="border rounded-md py-2 px-2 shadow-md ml-2 font-medium bg-[#E3F2FD]"
            @click="handleSearch(cityId)"
          >
            search
          </button>
        </div>
      </div>
    </div>
    <div class="flex py-[18px] font-semibold text-[12px] text-[#7C7C7C]">
      <p class="w-[60px] text-center">ID</p>
      <ul class="flex w-full">
        <li class="w-[50%]">Name</li>
        <li class="w-[40%]">Id Province</li>
      </ul>
    </div>
    <div class="overflow-y-scroll h-[65vh]">
      <div
        class="flex py-[18px] font-normal text-[12px] text-[#686868] justify-start"
        v-if="cityById"
      >
        <p class="w-[60px] text-center">{{ cityById.id }}</p>
        <ul class="flex w-full">
          <li class="w-[50%] text-[#080808] font-medium flex items-center">
            {{ cityById.name }}
          </li>
          <li class="w-[40%] ml-5">{{ cityById.provinsi_id }}</li>
        </ul>
      </div>
      <div
        v-else
        class="flex py-[18px] font-normal text-[12px] text-[#686868] justify-start"
        v-for="(item, index) in city"
        :key="index"
      >
        <p class="w-[60px] text-center">{{ item.id }}</p>
        <ul class="flex w-full">
          <li class="w-[50%] text-[#080808] font-medium flex items-center">
            {{ item.name }}
          </li>
          <li class="w-[40%] ml-5">{{ item.provinsi_id }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
