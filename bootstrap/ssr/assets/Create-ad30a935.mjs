import { unref, withCtx, createVNode, createTextVNode, withModifiers, Transition, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-3569107f.mjs";
import { usePage, useForm, Head } from "@inertiajs/vue3";
import "./TableHead-1888e650.mjs";
import "moment";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4 } from "./InputError-caca9101.mjs";
import { _ as _sfc_main$5 } from "./PrimaryButton-b82fb16e.mjs";
import "./ApplicationLogo-d8892447.mjs";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    usePage().props;
    const form = useForm({
      name: "",
      type: "",
      location: "",
      contact: "",
      latitude: "",
      longitude: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Input Fasilitas Kesehatan" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="uppercase font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Input Fasilitas Kesehatan </h2>`);
          } else {
            return [
              createVNode("h2", { class: "uppercase font-semibold text-xl text-gray-800 leading-tight" }, " Input Fasilitas Kesehatan ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-visible shadow-sm rounded-2xl"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}><form class="space-y-6"${_scopeId}><div class="grid gap-4 mb-6 md:grid-cols-7"${_scopeId}><div class="col-span-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Nama Fasilitas Kesehatan" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "name",
              type: "text",
              placeholder: "Rumah Sakit ...",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Tipe Fasilitas Kesehatan" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "type",
              type: "text",
              placeholder: "Tipe A,B,C,D",
              modelValue: unref(form).type,
              "onUpdate:modelValue": ($event) => unref(form).type = $event,
              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.type
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Lokasi Fasiltias Kesehatan" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "location",
              type: "text",
              placeholder: "Jalan ...",
              modelValue: unref(form).location,
              "onUpdate:modelValue": ($event) => unref(form).location = $event,
              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.location
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid gap-4 mb-6 md:grid-cols-3"${_scopeId}><div class="col-span-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Contact" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "contact",
              type: "number",
              placeholder: "0821xxxxxxx",
              modelValue: unref(form).contact,
              "onUpdate:modelValue": ($event) => unref(form).contact = $event,
              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.contact
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Latitude" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "latitude",
              type: "number",
              step: "any",
              placeholder: "-3.4416630258087766",
              modelValue: unref(form).latitude,
              "onUpdate:modelValue": ($event) => unref(form).latitude = $event,
              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.latitude
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Longitude" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "longitude",
              type: "number",
              step: "any",
              placeholder: "114.84821256683844",
              modelValue: unref(form).longitude,
              "onUpdate:modelValue": ($event) => unref(form).longitude = $event,
              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.longitude
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Simpan`);
                } else {
                  return [
                    createTextVNode("Simpan")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(form).recentlySuccessful) {
              _push2(`<p class="text-sm text-gray-600"${_scopeId}> Saved. </p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></form></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-visible shadow-sm rounded-2xl" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(($event) => unref(form).post(_ctx.route("hospital.store")), ["prevent"]),
                        class: "space-y-6"
                      }, [
                        createVNode("div", { class: "grid gap-4 mb-6 md:grid-cols-7" }, [
                          createVNode("div", { class: "col-span-5" }, [
                            createVNode(_sfc_main$2, { value: "Nama Fasilitas Kesehatan" }),
                            createVNode(_sfc_main$3, {
                              id: "name",
                              type: "text",
                              placeholder: "Rumah Sakit ...",
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.name
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "col-span-2" }, [
                            createVNode(_sfc_main$2, { value: "Tipe Fasilitas Kesehatan" }),
                            createVNode(_sfc_main$3, {
                              id: "type",
                              type: "text",
                              placeholder: "Tipe A,B,C,D",
                              modelValue: unref(form).type,
                              "onUpdate:modelValue": ($event) => unref(form).type = $event,
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.type
                            }, null, 8, ["message"])
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$2, { value: "Lokasi Fasiltias Kesehatan" }),
                          createVNode(_sfc_main$3, {
                            id: "location",
                            type: "text",
                            placeholder: "Jalan ...",
                            modelValue: unref(form).location,
                            "onUpdate:modelValue": ($event) => unref(form).location = $event,
                            class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$4, {
                            class: "mt-2",
                            message: unref(form).errors.location
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "grid gap-4 mb-6 md:grid-cols-3" }, [
                          createVNode("div", { class: "col-span-1" }, [
                            createVNode(_sfc_main$2, { value: "Contact" }),
                            createVNode(_sfc_main$3, {
                              id: "contact",
                              type: "number",
                              placeholder: "0821xxxxxxx",
                              modelValue: unref(form).contact,
                              "onUpdate:modelValue": ($event) => unref(form).contact = $event,
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.contact
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "col-span-1" }, [
                            createVNode(_sfc_main$2, { value: "Latitude" }),
                            createVNode(_sfc_main$3, {
                              id: "latitude",
                              type: "number",
                              step: "any",
                              placeholder: "-3.4416630258087766",
                              modelValue: unref(form).latitude,
                              "onUpdate:modelValue": ($event) => unref(form).latitude = $event,
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.latitude
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "col-span-1" }, [
                            createVNode(_sfc_main$2, { value: "Longitude" }),
                            createVNode(_sfc_main$3, {
                              id: "longitude",
                              type: "number",
                              step: "any",
                              placeholder: "114.84821256683844",
                              modelValue: unref(form).longitude,
                              "onUpdate:modelValue": ($event) => unref(form).longitude = $event,
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.longitude
                            }, null, 8, ["message"])
                          ])
                        ]),
                        createVNode("div", { class: "flex items-center gap-4" }, [
                          createVNode(_sfc_main$5, {
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Simpan")
                            ]),
                            _: 1
                          }, 8, ["disabled"]),
                          createVNode(Transition, {
                            "enter-from-class": "opacity-0",
                            "leave-to-class": "opacity-0",
                            class: "transition ease-in-out"
                          }, {
                            default: withCtx(() => [
                              unref(form).recentlySuccessful ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-sm text-gray-600"
                              }, " Saved. ")) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ])
                      ], 40, ["onSubmit"])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Hospital/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
