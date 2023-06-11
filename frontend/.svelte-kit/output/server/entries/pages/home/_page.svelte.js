import { c as create_ssr_component, a as subscribe, e as escape } from "../../../chunks/index2.js";
import { w as writable } from "../../../chunks/index.js";
const CALLSIGN = writable(0);
const FACTION = writable(0);
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-17u3oa{height:100%;width:250px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $CALLSIGN, $$unsubscribe_CALLSIGN;
  let $FACTION, $$unsubscribe_FACTION;
  $$unsubscribe_CALLSIGN = subscribe(CALLSIGN, (value) => $CALLSIGN = value);
  $$unsubscribe_FACTION = subscribe(FACTION, (value) => $FACTION = value);
  $$result.css.add(css);
  $$unsubscribe_CALLSIGN();
  $$unsubscribe_FACTION();
  return `<main><div><nav class="svelte-17u3oa"><h1>${escape($CALLSIGN)}</h1>
			<h2>${escape($FACTION)}</h2>
			<a href="/">Log Out</a></nav></div>
</main>`;
});
export {
  Page as default
};
