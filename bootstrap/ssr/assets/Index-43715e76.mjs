import { ref, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-3569107f.mjs";
import { usePage, useForm, Head } from "@inertiajs/vue3";
import { T as TableHead } from "./TableHead-1888e650.mjs";
import "moment";
import { _ as _sfc_main$2 } from "./LinkButton-91889de0.mjs";
import { _ as _sfc_main$4 } from "./PageNav-7aef9da3.mjs";
import "./PrimaryButton-b82fb16e.mjs";
import { _ as _sfc_main$3, a as _sfc_main$6 } from "./SecondaryButton-b7c97a20.mjs";
import "./InputError-caca9101.mjs";
import { _ as _sfc_main$5 } from "./Modal-8027f91f.mjs";
import "./ApplicationLogo-d8892447.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const prop = usePage().props;
    const show = ref(false);
    const form = useForm({
      article: ""
    });
    const deleteArticle = () => {
      form.delete(route("article.destroy", form), {
        onSuccess: () => show.value = !show.value,
        onFinish: () => form.reset()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between"${_scopeId}><h2 class="align-middle uppercase font-semibold text-xl text-gray-800"${_scopeId}> Artikel </h2>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              href: _ctx.route("article.create")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Tambah Artikel `);
                } else {
                  return [
                    createTextVNode(" Tambah Artikel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between" }, [
                createVNode("h2", { class: "align-middle uppercase font-semibold text-xl text-gray-800" }, " Artikel "),
                createVNode(_sfc_main$2, {
                  href: _ctx.route("article.create")
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Tambah Artikel ")
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-visible shadow-sm rounded-2xl"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}><table class="table-auto w-full text-left"${_scopeId}><thead${_scopeId}><tr${_scopeId}>`);
            _push2(ssrRenderComponent(TableHead, { class: "rounded-tl rounded-bl md:w-10" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`No`);
                } else {
                  return [
                    createTextVNode("No")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(TableHead, { class: "md:w-60" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Judul`);
                } else {
                  return [
                    createTextVNode("Judul")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(TableHead, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Deskripsi`);
                } else {
                  return [
                    createTextVNode("Deskripsi")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(TableHead, { class: "md:w-60" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Gambar`);
                } else {
                  return [
                    createTextVNode("Gambar")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(TableHead, { class: "rounded-tr rounded-br" }, null, _parent2, _scopeId));
            _push2(`</tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(unref(prop).article.data, (a, i) => {
              _push2(`<tr${_scopeId}><td class="px-4 py-3"${_scopeId}>${ssrInterpolate(i + 1)}</td><td class="px-4 py-3"${_scopeId}>${ssrInterpolate(a.title)}</td><td class="px-4 py-3"${_scopeId}>${ssrInterpolate(a.description)}</td><td class="px-4 py-3"${_scopeId}><img class="h-32 w-64 rounded-lg"${ssrRenderAttr("src", "/storage/" + a.image)} alt="article thumbnail"${_scopeId}></td><td${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                onClick: ($event) => (show.value = !show.value, unref(form).article = a)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20"${_scopeId2}><path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: "w-3 h-3 text-gray-800 dark:text-white",
                        "aria-hidden": "true",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "currentColor",
                        viewBox: "0 0 18 20"
                      }, [
                        createVNode("path", { d: "M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" })
                      ]))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td></tr>`);
            });
            _push2(`<!--]--></tbody></table>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              links: unref(prop).article.links
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              show: show.value,
              onClose: ($event) => show.value = !show.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-6"${_scopeId2}><h2 class="text-lg font-medium text-gray-900"${_scopeId2}> Yakin untuk menghapus artikel? </h2><p class="mt-1 text-sm text-gray-600"${_scopeId2}> Artikel dengan judul ${ssrInterpolate(unref(form).article.title)} akan dihapus </p><div class="mt-6 flex justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    onClick: ($event) => show.value = !show.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Batal `);
                      } else {
                        return [
                          createTextVNode(" Batal ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    class: ["ml-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: deleteArticle
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Hapus Artikel `);
                      } else {
                        return [
                          createTextVNode(" Hapus Artikel ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-6" }, [
                      createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Yakin untuk menghapus artikel? "),
                      createVNode("p", { class: "mt-1 text-sm text-gray-600" }, " Artikel dengan judul " + toDisplayString(unref(form).article.title) + " akan dihapus ", 1),
                      createVNode("div", { class: "mt-6 flex justify-end" }, [
                        createVNode(_sfc_main$6, {
                          onClick: ($event) => show.value = !show.value
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Batal ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_sfc_main$3, {
                          class: ["ml-3", { "opacity-25": unref(form).processing }],
                          disabled: unref(form).processing,
                          onClick: deleteArticle
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Hapus Artikel ")
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-visible shadow-sm rounded-2xl" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, [
                      createVNode("table", { class: "table-auto w-full text-left" }, [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode(TableHead, { class: "rounded-tl rounded-bl md:w-10" }, {
                              default: withCtx(() => [
                                createTextVNode("No")
                              ]),
                              _: 1
                            }),
                            createVNode(TableHead, { class: "md:w-60" }, {
                              default: withCtx(() => [
                                createTextVNode("Judul")
                              ]),
                              _: 1
                            }),
                            createVNode(TableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("Deskripsi")
                              ]),
                              _: 1
                            }),
                            createVNode(TableHead, { class: "md:w-60" }, {
                              default: withCtx(() => [
                                createTextVNode("Gambar")
                              ]),
                              _: 1
                            }),
                            createVNode(TableHead, { class: "rounded-tr rounded-br" })
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(prop).article.data, (a, i) => {
                            return openBlock(), createBlock("tr", null, [
                              createVNode("td", { class: "px-4 py-3" }, toDisplayString(i + 1), 1),
                              createVNode("td", { class: "px-4 py-3" }, toDisplayString(a.title), 1),
                              createVNode("td", { class: "px-4 py-3" }, toDisplayString(a.description), 1),
                              createVNode("td", { class: "px-4 py-3" }, [
                                createVNode("img", {
                                  class: "h-32 w-64 rounded-lg",
                                  src: "/storage/" + a.image,
                                  alt: "article thumbnail"
                                }, null, 8, ["src"])
                              ]),
                              createVNode("td", null, [
                                createVNode(_sfc_main$3, {
                                  onClick: ($event) => (show.value = !show.value, unref(form).article = a)
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      class: "w-3 h-3 text-gray-800 dark:text-white",
                                      "aria-hidden": "true",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "currentColor",
                                      viewBox: "0 0 18 20"
                                    }, [
                                      createVNode("path", { d: "M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" })
                                    ]))
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])
                            ]);
                          }), 256))
                        ])
                      ]),
                      createVNode(_sfc_main$4, {
                        links: unref(prop).article.links
                      }, null, 8, ["links"])
                    ])
                  ])
                ])
              ]),
              createVNode(_sfc_main$5, {
                show: show.value,
                onClose: ($event) => show.value = !show.value
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-6" }, [
                    createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Yakin untuk menghapus artikel? "),
                    createVNode("p", { class: "mt-1 text-sm text-gray-600" }, " Artikel dengan judul " + toDisplayString(unref(form).article.title) + " akan dihapus ", 1),
                    createVNode("div", { class: "mt-6 flex justify-end" }, [
                      createVNode(_sfc_main$6, {
                        onClick: ($event) => show.value = !show.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Batal ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$3, {
                        class: ["ml-3", { "opacity-25": unref(form).processing }],
                        disabled: unref(form).processing,
                        onClick: deleteArticle
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Hapus Artikel ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["show", "onClose"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Article/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
