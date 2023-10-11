<script setup>
import { computed ,ref} from 'vue';
import CheckSVG from "@/Components/Svg/CheckSVG.vue";
import TimeSVG from "@/Components/Svg/TimeSVG.vue";
import CorrectionSVG from "@/Components/Svg/CorrectionSVG.vue";
import CancelSVG from "@/Components/Svg/CancelSVG.vue";

const props = defineProps(['progress']);
const svg = {
  CancelSVG,
  CorrectionSVG,
  TimeSVG,
  CheckSVG
}

const currentTab = ref('')
const getStatusInfo = computed(() => {
  let statusClasses, statusText, messsage;
  switch (props.progress.status) {
    case 0:
      statusClasses = ['bg-gray-200', 'text-gray-700 border-gray-300 bg-gray-50'];
      statusText = 'Menunggu Persetujuan';
      currentTab.value = 'TimeSVG'
      break;
    case 1:
      statusClasses = ['bg-green-200', 'text-green-700 border-green-300 bg-green-50'];
      statusText = 'Disetujui oleh :';
      currentTab.value = 'CheckSVG'
      break;
    case 2:
      statusClasses = ['bg-yellow-200', 'text-yellow-700 border-yellow-300 bg-yellow-50'];
      statusText = 'Dikoreksi oleh : '
      currentTab.value = 'CorrectionSVG'
      messsage  ="Pesan : " +props.progress.message;
      break;
    default:
      statusClasses = ['bg-red-200', 'text-red-700 border-red-300 bg-red-50'];
      statusText = 'Dibatalkan oleh : '
      currentTab.value = 'CancelSVG'
      messsage  ="Pesan : " +props.progress.message;
  }
  return { statusClasses, statusText, currentTab, messsage };
});
</script>

<template>
  <li class="mb-10 ml-8">
    <span :class="getStatusInfo.statusClasses[0]"
          class="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
      <component :is="svg[currentTab]"></component>
    </span>
    <div class="w-full p-4 border rounded-lg dark:bg-gray-800 dark:border-green-800 dark:text-green-400" role="alert"
         :class="getStatusInfo.statusClasses[1]"
    >
      <div class="flex flex-col items-left justify-between">
        <p class="font-semibold">{{ getStatusInfo.statusText }}</p>
        <p class="font-light">{{ progress.employee.name }} </p>
        <p class="font-light">{{ progress.employee.position }}</p>
        <p class="font-semibold ">{{ getStatusInfo.messsage }}</p>

      </div>
    </div>
  </li>
</template>