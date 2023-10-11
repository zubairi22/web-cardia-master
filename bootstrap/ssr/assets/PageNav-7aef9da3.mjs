import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "PageNav",
  __ssrInlineRender: true,
  props: ["links"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "text-right pt-4" }, _attrs))}><ul class="inline-flex items-center -space-x-px p-2"><!--[-->`);
      ssrRenderList(__props.links, (link, p) => {
        _push(`<!--[-->`);
        if (link.url === null) {
          _push(`<div class="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded">${link.label}</div>`);
        } else {
          _push(ssrRenderComponent(unref(Link), {
            class: ["mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-blue focus:border-indigo-500 focus:text-indigo-500", { "bg-blue-700 text-white": link.active }],
            href: link.url
          }, null, _parent));
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PageNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
