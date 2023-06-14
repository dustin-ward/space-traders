import { c as create_ssr_component, a as subscribe, e as escape } from "../../../chunks/index2.js";
import { w as writable } from "../../../chunks/index.js";
const CALLSIGN = writable("NULL_CALLSIGN");
const FACTION = writable("NULL_FACTION");
const TOKEN = writable("NULL_TOKEN");
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".topbar.svelte-6rw2q4.svelte-6rw2q4{display:flex;align-content:center;width:100%;height:8%;background-color:rgb(50,50,50);margin:0}.sidebar.svelte-6rw2q4.svelte-6rw2q4{position:fixed;height:92%;width:250px;background-color:var(--st_fg);display:flex;flex-direction:column;align-items:center}.sidebar.svelte-6rw2q4 p.svelte-6rw2q4{text-align:left;padding:15px}.sidebar.svelte-6rw2q4 h1.svelte-6rw2q4{padding:10px;padding-bottom:5px}.sidebar.svelte-6rw2q4 h5.svelte-6rw2q4{margin:0;color:var(--st_text_secondary)}.log-out.svelte-6rw2q4.svelte-6rw2q4{width:80%;margin-top:auto;margin-bottom:5%;padding:5px}",
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
  return `<main><nav class="topbar svelte-6rw2q4"><h1>SpaceTraders</h1></nav>
	<nav class="sidebar svelte-6rw2q4"><h1 class="svelte-6rw2q4">${escape(callsign)}</h1>
		<h5 class="svelte-6rw2q4">${`loading...`}</h5>
		<p class="svelte-6rw2q4">${`loading...`}</p>
		<a href="/" class="log-out red-button svelte-6rw2q4">Log Out</a></nav>
	<div></div>
</main>`;
});
export {
  Page as default
};
