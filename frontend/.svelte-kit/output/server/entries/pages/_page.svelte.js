import { c as create_ssr_component, b as add_attribute, d as each, e as escape } from "../../chunks/index2.js";
const logo = "/_app/immutable/assets/logo-universal.157a874a.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#logo.svelte-1u74k7t{display:block;width:10%;height:10%;margin:auto;padding:5% 0 0;background-position:center;background-repeat:no-repeat;background-size:100% 100%;background-origin:content-box}.accounts-list.svelte-1u74k7t{display:flex;flex-wrap:wrap;justify-content:center;gap:10px 30px}.account.svelte-1u74k7t{background-color:rgba(0,0,0,0.3);border-radius:10px;width:10%}.account.svelte-1u74k7t:hover{box-shadow:rgba(0,0,0,0.3) 0px 0px 3px 3px;cursor:pointer}.reset-button.svelte-1u74k7t{display:block}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let accounts = [];
  $$result.css.add(css);
  return `<main><img alt="Wails logo" id="logo"${add_attribute("src", logo, 0)} class="svelte-1u74k7t">
	<h1>Login Page</h1>
	${accounts != null && accounts.length > 0 ? `<div class="accounts-list svelte-1u74k7t">${each(accounts, (account) => {
    return `<div class="account svelte-1u74k7t"><h3>${escape(account.callsign)}</h3>
					<h5>${escape(account.faction)}</h5>
					<p>${escape(account.token)}</p>
				</div>`;
  })}</div>

		<a href="/newAccount">Create New Account</a>` : `<p>No Accounts available...</p>
		<a href="/newAccount">Create one!</a>`}
	<button class="reset-button svelte-1u74k7t">RESET</button>
</main>`;
});
export {
  Page as default
};
