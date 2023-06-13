import { c as create_ssr_component, a as subscribe, e as escape } from "../../../chunks/index2.js";
import { w as writable } from "../../../chunks/index.js";
const CALLSIGN = writable(0);
const FACTION = writable(0);
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-n445rk.svelte-n445rk{padding:10px 10px;margin:0;height:100vh;width:250px;background-color:rgba(0,0,0,0.3);box-sizing:border-box}nav.svelte-n445rk p.svelte-n445rk{text-align:left}h1.svelte-n445rk.svelte-n445rk{margin:0 0 10px 0}h2.svelte-n445rk.svelte-n445rk{margin:0 0 10px 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_FACTION;
  let $CALLSIGN, $$unsubscribe_CALLSIGN;
  $$unsubscribe_FACTION = subscribe(FACTION, (value) => value);
  $$unsubscribe_CALLSIGN = subscribe(CALLSIGN, (value) => $CALLSIGN = value);
  $$result.css.add(css);
  $$unsubscribe_FACTION();
  $$unsubscribe_CALLSIGN();
  return `<main><nav class="svelte-n445rk"><h1 class="svelte-n445rk">${escape($CALLSIGN)}</h1>
		<h2 class="svelte-n445rk">${`loading...`}</h2>
		<p class="svelte-n445rk">${`loading...`}</p>
		<a href="/">Log Out</a></nav>
	<div></div>
</main>`;
});
export {
  Page as default
};
