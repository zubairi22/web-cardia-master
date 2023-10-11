<script setup>
import {computed, onMounted, onUnmounted, ref, watch} from 'vue';
import SecondaryButton from "@/Components/SecondaryButton.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  maxWidth: {
    type: String,
    default: '2xl',
  },
  closeable: {
    type: Boolean,
    default: true,
  },
  title:{
    type: String
  },
  description:{
    type: String
  },
  form:{
    type: Object
  },
  posting:{
    type: Function
  }
});
const emit = defineEmits(['close']);

watch(
    () => props.show,
    () => {
      if (props.show) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = null;
      }
    }
);

const close = () => {
  if (props.closeable) {
    emit('close');
  }
};

const closeOnEscape = (e) => {
  if (e.key === 'Escape' && props.show) {
    close();
  }
};

onMounted(() => document.addEventListener('keydown', closeOnEscape));

onUnmounted(() => {
  document.removeEventListener('keydown', closeOnEscape);
  document.body.style.overflow = null;
});

const maxWidthClass = computed(() => {
  return {
    sm: 'sm:max-w-sm',
    md: 'sm:max-w-md',
    lg: 'sm:max-w-lg',
    xl: 'sm:max-w-xl',
    '2xl': 'sm:max-w-2xl',
  }[props.maxWidth];
});
</script>

<template>
  <teleport to="body">
    <transition leave-active-class="duration-200">
      <div v-show="show" class="fixed inset-y-20 inset-x-36 overflow-y-auto px-4 py-6 sm:px-0 z-50" >
        <transition
            enter-active-class="ease-out duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
          <div v-show="show" class="fixed inset-0 transform transition-all" @click="close">
            <div class="absolute inset-0 bg-gray-500 opacity-75" />
          </div>
        </transition>

        <transition
            enter-active-class="ease-out duration-300"
            enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
              v-show="show"
              class="mb-6 bg-white rounded-lg overflow-x-auto shadow-xl transform transition-all sm:w-full sm:mx-auto"
              :class="maxWidthClass"
          >
            <div v-if="show">
              <div class="p-6">
                <h2 class="text-lg font-medium text-gray-900">
                 {{title}}
                </h2>

                <p class="mt-1 mb-4 text-sm text-gray-600">
                 {{description}}
                </p>

                <slot/>

                <div class="mt-6 flex justify-end">
                  <SecondaryButton @click="close"> Batal </SecondaryButton>

                  <PrimaryButton
                      class="ml-3"
                      :class="{ 'opacity-25': form.processing }"
                      :disabled="form.processing"
                      @click="posting"
                  >
                    Kirim
                  </PrimaryButton>
                </div>
              </div>
            </div>

          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>
