<script setup>
import axios from "axios";
import { onMounted, ref, computed } from "vue";
import Modal from "./Modal.vue";

const data = ref([]);
const modalStatus = ref(false);
const detail = ref([]);

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

const getDetail = async (id) => {
  axios
    .get(`https://api.slingacademy.com/v1/sample-data/users/${id}`)
    .then((res) => {
      detail.value = res.data.user;
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("hallo");
};

const handleClick = (id) => {
  getDetail(id);
  modalStatus.value = !modalStatus.value;
};

// const convertDate = computed((date) => {
//   let test = data.value;
//   let dateString = date;
//   let dateArr = dateString.split("");
//   let result = "";
//   for (let i = 0; i < dateArr.length; i++) {
//     if (dateArr[i] === "-") {
//       result += " / ";
//     } else if (dateArr[i] !== "T") {
//       result += dateArr[i];
//     } else {
//       i = dateArr.length;
//     }
//   }
//   return result;
// });

onMounted(() => {
  getData();
});
</script>

<template>
  <section class="mt-[31px] bg-white rounded-t-[10px]">
    <div class="px-7 pt-6 pb-4">
      <p class="text-base text-[#080808] font-semibold">User List</p>
    </div>
    <div
      class="flex py-[18px] font-semibold text-[12px] text-[#7C7C7C] border-t-[2px]"
    >
      <p class="w-[60px] text-center">ID</p>
      <ul class="flex w-full justify-between">
        <li class="w-[16%]">User</li>
        <li class="w-[12%]">Date Of Birth</li>
        <li class="w-[22%]">Email</li>
        <li class="w-[16%]">Job</li>
        <li class="w-[16%]">Country</li>
        <li class="w-[16%]">Action</li>
      </ul>
    </div>
    <div
      class="flex py-[18px] font-normal text-[12px] text-[#686868] border-t-[2px]"
      v-for="(item, index) in data"
      :key="index"
    >
      <p class="w-[60px] text-center">{{ item?.id }}</p>
      <ul class="flex w-full justify-between">
        <li class="w-[16%] text-[#080808] font-medium flex items-center">
          <img
            :src="item.profile_picture"
            height="24"
            width="24"
            alt=""
            class="rounded-full mr-2"
          />
          <p>{{ item?.first_name + " " + item.last_name }}</p>
        </li>
        <li class="w-[12%]">{{ item?.date_of_birth.slice(0, 10) }}</li>
        <li class="w-[22%] text-[#080808] font-medium">
          {{ item?.email }}
        </li>
        <li class="w-[16%]">{{ item?.job }}</li>
        <li class="w-[16%] text-[#080808] font-medium">
          {{ item?.country }}
        </li>
        <li class="w-[16%]">
          <button
            class="rounded-[4px] shadow-md px-4 py-1 border-[1px] text-[#080808] font-medium"
            @click="handleClick(item.id)"
          >
            View Detail
          </button>
        </li>
      </ul>
    </div>
    <Modal
      v-if="modalStatus"
      @modalClose="() => (modalStatus = !modalStatus)"
      :name="detail.first_name + ' ' + detail.last_name"
      :email="detail.email"
      :phone="detail.phone"
      :img="detail.profile_picture"
      :address="detail.street"
      :gender="detail.gender"
      :job="detail.job"
      :country="detail.country"
      :city="detail.city"
    />
  </section>
</template>
