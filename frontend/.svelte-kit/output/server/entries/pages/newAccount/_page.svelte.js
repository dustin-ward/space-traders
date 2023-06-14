import { c as create_ssr_component, b as add_attribute, d as each, e as escape } from "../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".back-button.svelte-1d792u5{display:block;position:absolute;top:2%;left:2%;padding:5px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let callsign;
  let factionList = [];
  $$result.css.add(css);
  return `<main><a href="/" class="back-button red-button svelte-1d792u5">Back</a>
	<h1>Create Account</h1>
	<div class="create-form"><h3>Callsign:</h3>
		<input${add_attribute("value", callsign, 0)}>
		<h3>Faction:</h3>
		<form><select>${each(factionList, (faction) => {
    return `<option${add_attribute("value", faction.symbol, 0)}>${escape(faction.name)}
				</option>`;
  })}</select>
			<button ${"disabled"} type="submit" class="red-button">Submit
			</button></form></div>
</main>`;
});
export {
  Page as default
};
