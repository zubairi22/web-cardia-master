<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head, useForm, usePage} from '@inertiajs/vue3';
import TableHead from "@/Components/TableHead.vue";
import moment from 'moment'
import LinkButton from "@/Components/LinkButton.vue";
import PageNav from "@/Components/PageNav.vue";
import DangerButton from "@/Components/DangerButton.vue";
import {ref} from "vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import Modal from "@/Components/Modal.vue";

const prop = usePage().props
const show = ref(false)
const form = useForm({
  hospital: '',
});

const deleteHospital = () => {
  form.delete(route('hospital.destroy' , form), {
    onSuccess: () => show.value = !show.value,
    onFinish: () => form.reset(),
  });
};

</script>

<template>
    <Head title="Fasilitas Kesehatan" />

  <AuthenticatedLayout>
    <template #header>
      <div class="flex justify-between">
        <h2 class="align-middle uppercase font-semibold text-xl text-gray-800">
          Fasilitas Kesehatan
        </h2>
        <LinkButton :href="route('hospital.create')">
          Tambah Fasilitas Kesehatan
        </LinkButton>
      </div>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-visible shadow-sm rounded-2xl">
          <div class="p-6 text-gray-900">
            <table class="table-auto w-full text-left">
              <thead>
              <tr>
                <table-head class="rounded-tl rounded-bl">No</table-head>
                <table-head>Nama</table-head>
                <table-head>Lokasi</table-head>
                <table-head>Kontak</table-head>
                <table-head>LatLng</table-head>
                <table-head class="rounded-tr rounded-br"></table-head>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(a, i) in prop.hospitals.data">
                <td class="px-4 py-3">{{ i + 1 }}</td>
                <td class="px-4 py-3">{{ a.name }} Tipe : {{ a.type }}</td>
                <td class="px-4 py-3">{{ a.location }}</td>
                <td class="px-4 py-3">{{ a.contact }}</td>
                <td class="px-4 py-3">{{ a.latitude }} <br> {{ a.langitude }}</td>
                <td>
                  <DangerButton @click="show = !show, form.hospital = a">
                    <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                      <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"/>
                    </svg>
                  </DangerButton>
                </td>
              </tr>
              </tbody>
            </table>
            <PageNav :links="prop.hospitals.links"></PageNav>
          </div>
        </div>
      </div>
    </div>
    <Modal :show="show" @close="show = !show">
      <div class="p-6">
        <h2 class="text-lg font-medium text-gray-900">
          Yakin untuk menghapus fasilitas kesehatan?
        </h2>

        <p class="mt-1 text-sm text-gray-600">
          Fasilitas kesehatan {{ form.hospital.name }} akan dihapus
        </p>

        <div class="mt-6 flex justify-end">
          <SecondaryButton @click="show = !show"> Batal </SecondaryButton>

          <DangerButton
              class="ml-3"
              :class="{ 'opacity-25': form.processing }"
              :disabled="form.processing"
              @click="deleteHospital"
          >
            Hapus Fasilitas kesehatan
          </DangerButton>
        </div>
      </div>
    </Modal>
  </AuthenticatedLayout>
</template>
