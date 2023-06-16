import { c as create_ssr_component, r as onDestroy, j as add_attribute, v as validate_component } from "../../../../chunks/index2.js";
const LeafletMap_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import 'leaflet/dist/leaflet.css';main.svelte-1k9lyxg div.svelte-1k9lyxg{height:800px}",
  map: null
};
const LeafletMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mapElement;
  onDestroy(async () => {
  });
  $$result.css.add(css);
  return `<main class="svelte-1k9lyxg"><div class="svelte-1k9lyxg"${add_attribute("this", mapElement, 0)}></div>
</main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


<div class="h-full overflow-hidden"><h1>MAP</h1>
	${validate_component(LeafletMap, "LeafletMap").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
