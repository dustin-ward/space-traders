import { c as create_ssr_component, b as compute_rest_props, d as spread, h as escape_object, f as escape_attribute_value, j as add_attribute, v as validate_component, o as each, e as escape } from "../../chunks/index2.js";
import { A as Avatar } from "../../chunks/Avatar.js";
import { H as Heading, C as Card, G as GradientButton } from "../../chunks/Heading.js";
/* empty css                                                    */import { twMerge } from "tailwind-merge";
import { S as Span } from "../../chunks/Span.js";
const DarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["btnClass", "size"]);
  let { btnClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5" } = $$props;
  let { size = "md" } = $$props;
  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0)
    $$bindings.btnClass(btnClass);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `${$$result.head += `<!-- HEAD_svelte-7ajg2y_START --><script>localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? window.document.documentElement.classList.add('dark')
      : window.document.documentElement.classList.remove('dark');
  <\/script><!-- HEAD_svelte-7ajg2y_END -->`, ""}

<button${spread(
    [
      { "aria-label": "Dark mode" },
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(btnClass, $$props.class))
      }
    ],
    {}
  )}><span class="hidden dark:block">${slots.lightIcon ? slots.lightIcon({}) : `
      <svg${add_attribute("class", sizes[size], 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
  0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    `}</span>
  <span class="block dark:hidden">${slots.darkIcon ? slots.darkIcon({}) : `
      <svg${add_attribute("class", sizes[size], 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
    `}</span></button>

`;
});
const logo = "/_app/immutable/assets/logo-universal.157a874a.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#logo.svelte-ojxjv1{display:block;width:10%;height:10%;background-position:center;background-repeat:no-repeat;background-size:100% 100%;background-origin:content-box}.reset-button.svelte-ojxjv1{display:block;position:absolute;bottom:0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let accounts = [];
  $$result.css.add(css);
  return `${validate_component(DarkMode, "DarkMode").$$render(
    $$result,
    {
      initialTheme: "dark",
      style: "visibility:hidden"
    },
    {},
    {}
  )}
<div class="container mx-auto flex flex-col items-center"><img alt="Wails logo" id="logo"${add_attribute("src", logo, 0)} class="my-4 svelte-ojxjv1">
	${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      class: "mb-4",
      customSize: "text-3xl font-extrabold  md:text-5xl lg:text-6xl"
    },
    {},
    {
      default: () => {
        return `${validate_component(Span, "Span").$$render($$result, { gradient: true }, {}, {
          default: () => {
            return `Space Traders`;
          }
        })}`;
      }
    }
  )}
	${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h2",
      customSize: "text-4xl font-extrabold mb-14"
    },
    {},
    {
      default: () => {
        return `Login`;
      }
    }
  )}
	${accounts != null && accounts.length > 0 ? `<div class="flex flex-row gap-4 mb-32">${each(accounts, (account) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        href: "#",
        class: "w-52",
        color: "primary"
      },
      {},
      {
        default: () => {
          return `<div class="flex flex-col items-center">${validate_component(Avatar, "Avatar").$$render($$result, { size: "lg", class: "mb-8" }, {}, {})}
						<h1 class="mb-1 text-xl font-medium text-white">${escape(account.callsign)}</h1>
						<h5 class="text-sm text-gray-400">${escape(account.faction)}</h5></div>
				`;
        }
      }
    )}`;
  })}</div>
		${validate_component(GradientButton, "GradientButton").$$render(
    $$result,
    {
      href: "/newAccount",
      outline: true,
      color: "greenToBlue",
      class: "w-72"
    },
    {},
    {
      default: () => {
        return `Create New Account`;
      }
    }
  )}` : `<p>No Accounts available...</p>
		${validate_component(GradientButton, "GradientButton").$$render(
    $$result,
    {
      href: "/newAccount",
      color: "greenToBlue",
      class: "w-72"
    },
    {},
    {
      default: () => {
        return `Create One!`;
      }
    }
  )}`}
	<button class="reset-button svelte-ojxjv1" style="visibility:hidden">RESET</button>
</div>`;
});
export {
  Page as default
};
