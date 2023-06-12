import { c as create_ssr_component, a as subscribe, e as escape } from "../../../chunks/index2.js";
import { w as writable } from "../../../chunks/index.js";
const CALLSIGN = writable(0);
const FACTION = writable(0);
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-8a2o4v{padding:10px 0px;margin:0;height:100vh;width:250px;background-color:rgba(0,0,0,0.3);box-sizing:border-box}h1.svelte-8a2o4v{margin:0 0 10px 0}h2.svelte-8a2o4v{margin:0 0 10px 0}",
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
  return `<main><nav class="svelte-8a2o4v"><h1 class="svelte-8a2o4v">${escape($CALLSIGN)}</h1>
		<h2 class="svelte-8a2o4v">${escape($FACTION)}</h2>
		<a href="/">Log Out</a></nav>
	<div></div>
</main>`;
});
export {
  Page as default
};
