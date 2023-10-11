<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head, useForm, usePage} from '@inertiajs/vue3';
import TableHead from "@/Components/TableHead.vue";
import moment from 'moment'
import TextInput from "@/Components/TextInput.vue";
import InputLabel from "@/Components/InputLabel.vue";
import InputError from "@/Components/InputError.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";

const prop = usePage().props

const form = useForm({
  name: "",
  type: "",
  location: "",
  contact: "",
  latitude: "",
  longitude: "",
});

</script>

<template>
    <Head title="Input Fasilitas Kesehatan" />

  <AuthenticatedLayout>
    <template #header>
      <h2 class="uppercase font-semibold text-xl text-gray-800 leading-tight">
        Input Fasilitas Kesehatan
      </h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-visible shadow-sm rounded-2xl">
          <div class="p-6 text-gray-900">
            <form @submit.prevent="form.post(route('hospital.store'))" class="space-y-6">
              <div class="grid gap-4 mb-6 md:grid-cols-7">
                <div class="col-span-5">
                  <InputLabel value="Nama Fasilitas Kesehatan" />
                  <TextInput
                      id="name"
                      type="text"
                      placeholder="Rumah Sakit ..."
                      v-model="form.name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                  />
                  <InputError class="mt-2" :message="form.errors.name" />
                </div>
                <div class="col-span-2">
                  <InputLabel value="Tipe Fasilitas Kesehatan" />
                  <TextInput
                      id="type"
                      type="text"
                      placeholder="Tipe A,B,C,D"
                      v-model="form.type"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                  />
                  <InputError class="mt-2" :message="form.errors.type" />
                </div>
              </div>
              <div>
                <InputLabel value="Lokasi Fasiltias Kesehatan" />
                <TextInput
                    id="location"
                    type="text"
                    placeholder="Jalan ..."
                    v-model="form.location"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />
                <InputError class="mt-2" :message="form.errors.location" />
              </div>
              <div class="grid gap-4 mb-6 md:grid-cols-3">
                <div class="col-span-1">
                  <InputLabel value="Contact" />
                  <TextInput
                      id="contact"
                      type="number"
                      placeholder="0821xxxxxxx"
                      v-model="form.contact"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                  />
                  <InputError class="mt-2" :message="form.errors.contact" />
                </div>
                <div class="col-span-1">
                  <InputLabel value="Latitude" />
                  <TextInput
                      id="latitude"
                      type="number"
                      step="any"
                      placeholder="-3.4416630258087766"
                      v-model="form.latitude"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                  />
                  <InputError class="mt-2" :message="form.errors.latitude" />
                </div>
                <div class="col-span-1">
                  <InputLabel value="Longitude" />
                  <TextInput
                      id="longitude"
                      type="number"
                      step="any"
                      placeholder="114.84821256683844"
                      v-model="form.longitude"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                  />
                  <InputError class="mt-2" :message="form.errors.longitude" />
                </div>
              </div>
              <div class="flex items-center gap-4">
                <PrimaryButton :disabled="form.processing">Simpan</PrimaryButton>

                <Transition
                    enter-from-class="opacity-0"
                    leave-to-class="opacity-0"
                    class="transition ease-in-out">
                  <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">
                    Saved.
                  </p>
                </Transition>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>
