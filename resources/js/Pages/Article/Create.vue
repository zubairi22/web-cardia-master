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
  title: "",
  description: "",
  image: null,
});

</script>

<template>
    <Head title="Input Artikel" />

  <AuthenticatedLayout>
    <template #header>
      <h2 class="uppercase font-semibold text-xl text-gray-800 leading-tight">
        Input Artikel
      </h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-visible shadow-sm rounded-2xl">
          <div class="p-6 text-gray-900">
            <form @submit.prevent="form.post(route('article.store'))" class="space-y-6">
              <div class="grid gap-4 mb-6 md:grid-cols-7">
                <div class="col-span-5">
                  <InputLabel for="title" value="Judul Artikel" />
                  <TextInput
                      id="title"
                      type="text"
                      placeholder="Judul Artikel"
                      v-model="form.title"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                  />
                  <InputError class="mt-2" :message="form.errors.title" />
                </div>
                <div class="col-span-2">
                  <InputLabel for="image" value="Gambar" />
                  <TextInput
                      @input="form.image = $event.target.files[0]"
                      class="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.18rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
                      type="file"
                      accept="image/png, image/jpeg"
                  />
                  <InputError class="mt-2" :message="form.errors.image" />
                </div>
              </div>
              <div>
                <InputLabel for="description" value="Deskripsi Artikel" />
                <textarea
                    id="description"
                    type="text"
                    v-model="form.description"
                    style="height: 200px"
                    class="mt-1 block w-full"
                    required
                />
                <InputError class="mt-2" :message="form.errors.description" />
              </div>
              <div class="flex items-center gap-4">
                <PrimaryButton :disabled="form.processing">Simpan</PrimaryButton>

                <Transition
                    enter-from-class="opacity-0"
                    leave-to-class="opacity-0"
                    class="transition ease-in-out"
                >
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
