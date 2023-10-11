<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head, usePage} from '@inertiajs/vue3';
import TableHead from "@/Components/TableHead.vue";
import moment from 'moment'
import PageNav from "@/Components/PageNav.vue";
import DangerButton from "@/Components/DangerButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import {ref} from "vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";

const prop = usePage().props
const show = ref(false)
const selected = ref()

</script>

<template>
    <Head title="Dashboard" />

  <AuthenticatedLayout>
    <template #header>
      <h2 class="uppercase font-semibold text-xl text-gray-800 leading-tight">
        Dashboard
      </h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-visible shadow-sm rounded-2xl">
          <div class="p-6 text-gray-900">
            <table class="table-auto w-full text-left whitespace-no-wrap">
              <thead>
              <tr>
                <table-head class="rounded-tl rounded-bl">No</table-head>
                <table-head>Nama</table-head>
                <table-head>Umur</table-head>
                <table-head>Jenis Kelamin</table-head>
                <table-head>Denyut Nadi</table-head>
                <table-head class="rounded-tr rounded-br">Update</table-head>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(vs, i) in prop.vital.data">
                <td class="px-4 py-3">{{ i + 1 }}</td>
                <td class="px-4 py-3">{{ vs.user.name }}</td>
                <td class="px-4 py-3">{{ vs.user.age }}</td>
                <td class="px-4 py-3">{{ vs.user.sex }}</td>
                <td class="px-4 py-3">{{ vs.heart_rate }}</td>
                <td class="px-4 py-3">{{moment(vs.created_at).format('DD-MMM-YYYY hh:ss')}}</td>
              </tr>
              </tbody>
            </table>
            <PageNav :links="prop.vital.links"></PageNav>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>
