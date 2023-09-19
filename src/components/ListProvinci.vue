<script setup>
import province from "../assets/js/province";
import { onMounted, ref, computed } from "vue";

const provById = ref(null);
const provId = ref(null);
const sort = ref("");

const search = (id) => {
  let data = province.find((item) => {
    return item.id === id;
  });
  provById.value = data;
};

const handleSearch = (param) => {
  search(param);
};

const sorting = computed(() => {
  provById.value = null;
  if (sort.value === "z-a") {
    province.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sort.value === "a-z") {
    province.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    province.sort((a, b) => a.id - b.id);
  }
});

onMounted(() => {});
</script>

<template>
  <section class="mt-[31px] bg-white rounded-t-[10px] w-[48%]">
    <div class="px-7 pt-6 pb-4">
      <p class="text-lg text-[#080808] font-semibold">Province List</p>
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
            placeholder="Search prov by id"
            class="p-2 border rounded-lg focus:outline-none text-ceter text-base font-medium"
            v-model="provId"
          />
          <button
            class="border rounded-md py-2 px-2 shadow-md ml-2 font-medium bg-[#E3F2FD]"
            @click="handleSearch(provId)"
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
        <li class="w-[40%]">Id Wilayah</li>
      </ul>
    </div>
    <div
      class="flex py-[18px] font-normal text-[12px] text-[#686868] justify-start"
      v-if="provById"
    >
      <p class="w-[60px] text-center">{{ provById.id }}</p>
      <ul class="flex w-full">
        <li class="w-[50%] text-[#080808] font-medium flex items-center">
          {{ provById.name }}
        </li>
        <li class="w-[40%] ml-5">{{ provById.wilayah_id }}</li>
      </ul>
    </div>
    <div
      v-else
      class="flex py-[18px] font-normal text-[12px] text-[#686868] justify-start"
      v-for="(item, index) in province"
      :key="index"
    >
      <p class="w-[60px] text-center">{{ item.id }}</p>
      <ul class="flex w-full">
        <li class="w-[50%] text-[#080808] font-medium flex items-center">
          {{ item.name }}
        </li>
        <li class="w-[40%] ml-5">{{ item.wilayah_id }}</li>
      </ul>
    </div>
  </section>
</template>
