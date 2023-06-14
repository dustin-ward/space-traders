import { c as create_ssr_component, a as subscribe, e as escape } from "../../../chunks/index2.js";
import { w as writable } from "../../../chunks/index.js";
const CALLSIGN = writable("NULL_CALLSIGN");
const FACTION = writable("NULL_FACTION");
const TOKEN = writable("NULL_TOKEN");
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-z1cyj5.svelte-z1cyj5{position:fixed;height:100%;width:250px;background-color:var(--st_fg);display:flex;flex-direction:column;align-items:center}nav.svelte-z1cyj5 p.svelte-z1cyj5{text-align:left;padding:15px}nav.svelte-z1cyj5 h1.svelte-z1cyj5{padding:10px;margin:0;padding-bottom:5px}nav.svelte-z1cyj5 h5.svelte-z1cyj5{margin:0;color:var(--st_text_secondary)}.log-out.svelte-z1cyj5.svelte-z1cyj5{width:80%;margin-top:auto;margin-bottom:5%;padding:5px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_FACTION;
  let $$unsubscribe_TOKEN;
  let $$unsubscribe_CALLSIGN;
  $$unsubscribe_FACTION = subscribe(FACTION, (value) => value);
  $$unsubscribe_TOKEN = subscribe(TOKEN, (value) => value);
  $$unsubscribe_CALLSIGN = subscribe(CALLSIGN, (value) => value);
  let callsign;
  $$result.css.add(css);
  $$unsubscribe_FACTION();
  $$unsubscribe_TOKEN();
  $$unsubscribe_CALLSIGN();
  return `<main><nav class="svelte-z1cyj5"><h1 class="svelte-z1cyj5">${escape(callsign)}</h1>
		<h5 class="svelte-z1cyj5">${`loading...`}</h5>
		<p class="svelte-z1cyj5">${`loading...`}</p>
		<a href="/" class="log-out red-button svelte-z1cyj5">Log Out</a></nav>
	<div></div>
</main>`;
});
export {
  Page as default
};
