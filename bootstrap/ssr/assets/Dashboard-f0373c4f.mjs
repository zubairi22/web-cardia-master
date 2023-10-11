import { ref, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-3569107f.mjs";
import { usePage, Head } from "@inertiajs/vue3";
import { T as TableHead } from "./TableHead-1888e650.mjs";
import moment from "moment";
import { _ as _sfc_main$2 } from "./PageNav-7aef9da3.mjs";
import "./SecondaryButton-b7c97a20.mjs";
import "./PrimaryButton-b82fb16e.mjs";
import "./ApplicationLogo-d8892447.mjs";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const prop = usePage().props;
    ref(false);
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="uppercase font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Dashboard </h2>`);
          } else {
            return [
              createVNode("h2", { class: "uppercase font-semibold text-xl text-gray-800 leading-tight" }, " Dashboard ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-visible shadow-sm rounded-2xl"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}><table class="table-auto w-full text-left whitespace-no-wrap"${_scopeId}><thead${_scopeId}><tr${_scopeId}>`);
            _push2(ssrRenderComponent(TableHead, { class: "rounded-tl rounded-bl" }, {
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
            _push2(ssrRenderComponent(TableHead, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Nama`);
                } else {
                  return [
                    createTextVNode("Nama")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(TableHead, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Umur`);
                } else {
                  return [
                    createTextVNode("Umur")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(TableHead, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Jenis Kelamin`);
                } else {
                  return [
                    createTextVNode("Jenis Kelamin")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(TableHead, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Denyut Nadi`);
                } else {
                  return [
                    createTextVNode("Denyut Nadi")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(TableHead, { class: "rounded-tr rounded-br" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Update`);
                } else {
                  return [
                    createTextVNode("Update")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(unref(prop).vital.data, (vs, i) => {
              _push2(`<tr${_scopeId}><td class="px-4 py-3"${_scopeId}>${ssrInterpolate(i + 1)}</td><td class="px-4 py-3"${_scopeId}>${ssrInterpolate(vs.user.name)}</td><td class="px-4 py-3"${_scopeId}>${ssrInterpolate(vs.user.age)}</td><td class="px-4 py-3"${_scopeId}>${ssrInterpolate(vs.user.sex)}</td><td class="px-4 py-3"${_scopeId}>${ssrInterpolate(vs.heart_rate)}</td><td class="px-4 py-3"${_scopeId}>${ssrInterpolate(unref(moment)(vs.created_at).format("DD-MMM-YYYY hh:ss"))}</td></tr>`);
            });
            _push2(`<!--]--></tbody></table>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              links: unref(prop).vital.links
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-visible shadow-sm rounded-2xl" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, [
                      createVNode("table", { class: "table-auto w-full text-left whitespace-no-wrap" }, [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode(TableHead, { class: "rounded-tl rounded-bl" }, {
                              default: withCtx(() => [
                                createTextVNode("No")
                              ]),
                              _: 1
                            }),
                            createVNode(TableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("Nama")
                              ]),
                              _: 1
                            }),
                            createVNode(TableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("Umur")
                              ]),
                              _: 1
                            }),
                            createVNode(TableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("Jenis Kelamin")
                              ]),
                              _: 1
                            }),
                            createVNode(TableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("Denyut Nadi")
                              ]),
                              _: 1
                            }),
                            createVNode(TableHead, { class: "rounded-tr rounded-br" }, {
                              default: withCtx(() => [
                                createTextVNode("Update")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(prop).vital.data, (vs, i) => {
                            return openBlock(), createBlock("tr", null, [
                              createVNode("td", { class: "px-4 py-3" }, toDisplayString(i + 1), 1),
                              createVNode("td", { class: "px-4 py-3" }, toDisplayString(vs.user.name), 1),
                              createVNode("td", { class: "px-4 py-3" }, toDisplayString(vs.user.age), 1),
                              createVNode("td", { class: "px-4 py-3" }, toDisplayString(vs.user.sex), 1),
                              createVNode("td", { class: "px-4 py-3" }, toDisplayString(vs.heart_rate), 1),
                              createVNode("td", { class: "px-4 py-3" }, toDisplayString(unref(moment)(vs.created_at).format("DD-MMM-YYYY hh:ss")), 1)
                            ]);
                          }), 256))
                        ])
                      ]),
                      createVNode(_sfc_main$2, {
                        links: unref(prop).vital.links
                      }, null, 8, ["links"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
