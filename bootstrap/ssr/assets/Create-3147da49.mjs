import { unref, withCtx, createVNode, createTextVNode, withModifiers, withDirectives, vModelText, Transition, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
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
      title: "",
      description: "",
      image: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Input Artikel" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="uppercase font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Input Artikel </h2>`);
          } else {
            return [
              createVNode("h2", { class: "uppercase font-semibold text-xl text-gray-800 leading-tight" }, " Input Artikel ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-visible shadow-sm rounded-2xl"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}><form class="space-y-6"${_scopeId}><div class="grid gap-4 mb-6 md:grid-cols-7"${_scopeId}><div class="col-span-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "title",
              value: "Judul Artikel"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "title",
              type: "text",
              placeholder: "Judul Artikel",
              modelValue: unref(form).title,
              "onUpdate:modelValue": ($event) => unref(form).title = $event,
              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.title
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "image",
              value: "Gambar"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              onInput: ($event) => unref(form).image = $event.target.files[0],
              class: "relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.18rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none",
              type: "file",
              accept: "image/png, image/jpeg"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.image
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "description",
              value: "Deskripsi Artikel"
            }, null, _parent2, _scopeId));
            _push2(`<textarea id="description" type="text" style="${ssrRenderStyle({ "height": "200px" })}" class="mt-1 block w-full" required${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.description
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center gap-4"${_scopeId}>`);
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
                        onSubmit: withModifiers(($event) => unref(form).post(_ctx.route("article.store")), ["prevent"]),
                        class: "space-y-6"
                      }, [
                        createVNode("div", { class: "grid gap-4 mb-6 md:grid-cols-7" }, [
                          createVNode("div", { class: "col-span-5" }, [
                            createVNode(_sfc_main$2, {
                              for: "title",
                              value: "Judul Artikel"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "title",
                              type: "text",
                              placeholder: "Judul Artikel",
                              modelValue: unref(form).title,
                              "onUpdate:modelValue": ($event) => unref(form).title = $event,
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.title
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "col-span-2" }, [
                            createVNode(_sfc_main$2, {
                              for: "image",
                              value: "Gambar"
                            }),
                            createVNode(_sfc_main$3, {
                              onInput: ($event) => unref(form).image = $event.target.files[0],
                              class: "relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.18rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none",
                              type: "file",
                              accept: "image/png, image/jpeg"
                            }, null, 8, ["onInput"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.image
                            }, null, 8, ["message"])
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$2, {
                            for: "description",
                            value: "Deskripsi Artikel"
                          }),
                          withDirectives(createVNode("textarea", {
                            id: "description",
                            type: "text",
                            "onUpdate:modelValue": ($event) => unref(form).description = $event,
                            style: { "height": "200px" },
                            class: "mt-1 block w-full",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).description]
                          ]),
                          createVNode(_sfc_main$4, {
                            class: "mt-2",
                            message: unref(form).errors.description
                          }, null, 8, ["message"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Article/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
