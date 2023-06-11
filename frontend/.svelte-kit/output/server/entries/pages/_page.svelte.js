import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "../../chunks/index.js";
const logo = "/_app/immutable/assets/logo-universal.157a874a.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#logo.svelte-1s8uqj6{display:block;width:10%;height:10%;margin:auto;padding:5% 0 0;background-position:center;background-repeat:no-repeat;background-size:100% 100%;background-origin:content-box}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let accounts = [];
  $$result.css.add(css);
  return `<main><img alt="Wails logo" id="logo"${add_attribute("src", logo, 0)} class="svelte-1s8uqj6">
	<h1>Login Page</h1>
	${accounts != null && accounts.length > 0 ? `<div class="accounts-list">${each(accounts, (account) => {
    return `<div class="account"><h3>${escape(account.callsign)}</h3>
					<h5>${escape(account.faction)}</h5>
					<p>${escape(account.token)}</p>
				</div>`;
  })}</div>` : `<p>No Accounts available...</p>
		<a href="/newAccount">Create one!</a>`}
</main>`;
});
export {
  Page as default
};
