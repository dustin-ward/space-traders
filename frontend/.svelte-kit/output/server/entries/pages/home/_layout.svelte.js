import { c as create_ssr_component, b as compute_rest_props, g as getContext, d as spread, f as escape_attribute_value, h as escape_object, e as escape, i as get_current_component, j as add_attribute, v as validate_component, k as globals, l as compute_slots, n as is_void, s as setContext, a as subscribe } from "../../../chunks/index2.js";
import { A as Avatar } from "../../../chunks/Avatar.js";
/* empty css                                                       */import { twMerge } from "tailwind-merge";
import { createPopper } from "@popperjs/core";
import { F as Frame, S as Span } from "../../../chunks/Span.js";
import { W as Wrapper } from "../../../chunks/Wrapper.js";
import { F as FACTION, C as CALLSIGN } from "../../../chunks/store.js";
function quintOut(t) {
  return --t * t * t * t * t + 1;
}
const ToolbarButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "name", "ariaLabel", "size", "href"]);
  const background = getContext("background");
  let { color = "default" } = $$props;
  let { name = void 0 } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { size = "md" } = $$props;
  let { href = void 0 } = $$props;
  const colors = {
    dark: "text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700",
    gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700",
    red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-gray-700",
    yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-gray-700",
    green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-gray-700",
    indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-gray-700",
    purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-gray-700",
    pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-gray-700",
    blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-gray-700",
    default: "focus:ring-gray-400 "
  };
  const sizing = {
    xs: "m-0.5 rounded focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
    lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
  };
  let buttonClass;
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-5 h-5"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  buttonClass = twMerge(
    "focus:outline-none whitespace-normal",
    sizing[size],
    colors[color],
    color === "default" && (background ? "hover:bg-gray-100 dark:hover:bg-gray-600" : "hover:bg-gray-100 dark:hover:bg-gray-700"),
    $$props.class
  );
  return `${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``}
    ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</a>` : `<button${spread(
    [
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``}
    ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</button>`}

`;
});
function createEventDispatcher() {
  const component = get_current_component();
  return (type, target, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = new CustomEvent(type, { detail });
      target.dispatchEvent(event);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
const { Object: Object_1 } = globals;
const Popper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "activeContent",
    "arrow",
    "offset",
    "placement",
    "trigger",
    "triggeredBy",
    "strategy",
    "open",
    "yOnly"
  ]);
  let { activeContent = false } = $$props;
  let { arrow = true } = $$props;
  let { offset = 8 } = $$props;
  let { placement = "top" } = $$props;
  let { trigger = "hover" } = $$props;
  let { triggeredBy = void 0 } = $$props;
  let { strategy = "absolute" } = $$props;
  let { open = false } = $$props;
  let { yOnly = false } = $$props;
  const dispatch = createEventDispatcher();
  let triggerEl;
  let contentEl;
  let popper;
  function init(node, _triggerEl) {
    const arrowEl = arrow ? node.lastElementChild : void 0;
    popper = createPopper(_triggerEl, node, {
      placement,
      strategy,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: ({ reference, popper: popper2 }) => {
              return [
                yOnly ? popper2.width / 2 - reference.width / 2 - reference.x : 0,
                offset
              ];
            }
          }
        },
        { name: "eventListeners", enabled: open },
        { name: "flip", enabled: false },
        {
          name: "arrow",
          enabled: arrow,
          options: { element: arrowEl, padding: 10 }
        }
      ]
    });
    return {
      update(_triggerEl2) {
        popper.state.elements.reference = _triggerEl2;
        popper.update();
      },
      destroy() {
        popper.destroy();
      }
    };
  }
  let position = "bottom";
  let arrowClass;
  if ($$props.activeContent === void 0 && $$bindings.activeContent && activeContent !== void 0)
    $$bindings.activeContent(activeContent);
  if ($$props.arrow === void 0 && $$bindings.arrow && arrow !== void 0)
    $$bindings.arrow(arrow);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0)
    $$bindings.trigger(trigger);
  if ($$props.triggeredBy === void 0 && $$bindings.triggeredBy && triggeredBy !== void 0)
    $$bindings.triggeredBy(triggeredBy);
  if ($$props.strategy === void 0 && $$bindings.strategy && strategy !== void 0)
    $$bindings.strategy(strategy);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.yOnly === void 0 && $$bindings.yOnly && yOnly !== void 0)
    $$bindings.yOnly(yOnly);
  {
    dispatch("show", triggerEl, open);
  }
  popper && popper.setOptions({ placement });
  position = placement.split("-", 1)[0];
  arrowClass = twMerge(
    "after:w-[9px] after:h-[9px] after:rotate-45 bg-inherit after:bg-inherit invisible after:visible after:block border-inherit after:border-inherit",
    position === "top" && ($$props.border ? "after:border-b after:border-r -bottom-[5px]" : "-bottom-[4px]"),
    position === "bottom" && ($$props.border ? "after:border-t after:border-l -top-[5px]" : "-top-[4px]"),
    position === "left" && ($$props.border ? "after:border-t after:border-r -right-[5px]" : "-right-[4px]"),
    position === "right" && ($$props.border ? "after:border-b after:border-l -left-[5px]" : "-left-[4px]")
  );
  return `${`<div${add_attribute("this", contentEl, 0)}></div>`}

${open && triggerEl ? `${validate_component(Frame, "Frame").$$render(
    $$result,
    Object_1.assign({}, { use: init }, { options: triggerEl }, { role: "tooltip" }, { tabindex: activeContent ? -1 : void 0 }, $$restProps, {
      class: twMerge("outline-none", $$props.class)
    }),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}
    ${arrow ? `<div${add_attribute("class", arrowClass, 0)}></div>` : ``}`;
      }
    }
  )}` : ``}

`;
});
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["open", "headerClass", "ulClass", "footerClass"]);
  let $$slots = compute_slots(slots);
  let { open = false } = $$props;
  let { headerClass = "py-1 overflow-hidden rounded-t-lg" } = $$props;
  let { ulClass = "py-1 w-44" } = $$props;
  let { footerClass = "py-1 overflow-hidden rounded-b-lg" } = $$props;
  let headerCls = twMerge(headerClass, $$props.classHeader);
  let ulCls = twMerge(ulClass, $$props.classUl);
  let footerCls = twMerge(footerClass, $$props.classFooter);
  let popoverClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.headerClass === void 0 && $$bindings.headerClass && headerClass !== void 0)
    $$bindings.headerClass(headerClass);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.footerClass === void 0 && $$bindings.footerClass && footerClass !== void 0)
    $$bindings.footerClass(footerClass);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        $$restProps.arrow = $$restProps.arrow ?? false;
        $$restProps.trigger = $$restProps.trigger ?? "click";
        $$restProps.placement = $$restProps.placement ?? "bottom";
        $$restProps.color = $$restProps.color ?? "dropdown";
        $$restProps.shadow = $$restProps.shadow ?? true;
        $$restProps.rounded = $$restProps.rounded ?? true;
      }
    }
    popoverClass = twMerge("divide-y divide-gray-100 dark:divide-gray-600", $$props.class);
    $$rendered = `${validate_component(Popper, "Popper").$$render(
      $$result,
      Object.assign({}, { activeContent: true }, $$restProps, { class: popoverClass }, { open }),
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${$$slots.header ? `<div${add_attribute("class", headerCls, 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``}
  <ul${add_attribute("class", $$props.class ?? ulCls, 0)}>${slots.default ? slots.default({}) : ``}</ul>
  ${$$slots.footer ? `<div${add_attribute("class", footerCls, 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
        }
      }
    )}

`;
  } while (!$$settled);
  return $$rendered;
});
const DropdownDivider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass"]);
  let { divClass = "my-1 h-px bg-gray-100 dark:bg-gray-600" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(divClass, $$props.class))
      }
    ],
    {}
  )}></div>

`;
});
const DropdownHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass", "divider"]);
  let { divClass = "py-2 px-4 text-gray-700 dark:text-white" } = $$props;
  let { divider = true } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.divider === void 0 && $$bindings.divider && divider !== void 0)
    $$bindings.divider(divider);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(divClass, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>
${divider ? `${validate_component(DropdownDivider, "DropdownDivider").$$render($$result, {}, {}, {})}` : ``}

`;
});
const DropdownItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["defaultClass", "href"]);
  let { defaultClass = "font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600" } = $$props;
  let { href = void 0 } = $$props;
  let liClass;
  let wrap = true;
  function init(node) {
    wrap = node.parentElement?.tagName === "UL";
  }
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  liClass = twMerge(defaultClass, href ? "block" : "w-full text-left", $$props.class);
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { tag: "li", show: wrap, use: init }, {}, {
    default: () => {
      return `${((tag) => {
        return tag ? `<${href ? "a" : "button"}${spread(
          [
            { href: escape_attribute_value(href) },
            {
              type: escape_attribute_value(href ? void 0 : "button")
            },
            escape_object($$restProps),
            { class: escape_attribute_value(liClass) },
            {
              role: escape_attribute_value(href ? void 0 : "button")
            }
          ],
          {}
        )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
      })(href ? "a" : "button")}`;
    }
  })}

`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["navClass", "navDivClass", "fluid"]);
  let { navClass = "px-2 sm:px-4 py-2.5 w-full" } = $$props;
  let { navDivClass = "mx-auto flex flex-wrap justify-between items-center " } = $$props;
  let { fluid = false } = $$props;
  let hidden = true;
  let toggle = () => {
    hidden = !hidden;
  };
  let navDivCls = twMerge(navDivClass, $$props.classNav);
  if ($$props.navClass === void 0 && $$bindings.navClass && navClass !== void 0)
    $$bindings.navClass(navClass);
  if ($$props.navDivClass === void 0 && $$bindings.navDivClass && navDivClass !== void 0)
    $$bindings.navDivClass(navDivClass);
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  {
    {
      $$restProps.color = $$restProps.color ?? "navbar";
    }
  }
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { tag: "nav" }, $$restProps, { class: twMerge(navClass, $$props.class) }), {}, {
    default: () => {
      return `<div${add_attribute("class", twMerge(navDivCls, fluid && "w-full" || "container"), 0)}>${slots.default ? slots.default({ hidden, toggle }) : ``}</div>`;
    }
  })}

`;
});
const NavBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href"]);
  let { href = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("flex items-center", $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>

`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let { ariaLabel = "bars 3" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `;
  let svgsolid = `<path fill="${color}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 24 24";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { role: "button" },
      { tabindex: "0" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg>

`;
});
const NavHamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["btnClass", "menuClass"]);
  let { btnClass = "ml-3 md:hidden" } = $$props;
  let { menuClass = "h-6 w-6 shrink-0" } = $$props;
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0)
    $$bindings.btnClass(btnClass);
  if ($$props.menuClass === void 0 && $$bindings.menuClass && menuClass !== void 0)
    $$bindings.menuClass(menuClass);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, Object.assign({}, { name: "Open main menu" }, $$restProps, { class: twMerge(btnClass, $$props.class) }), {}, {
    default: () => {
      return `${validate_component(Menu, "Menu").$$render(
        $$result,
        {
          class: twMerge(menuClass, $$props.classMenu)
        },
        {},
        {}
      )}`;
    }
  })}

`;
});
const NavLi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "active", "activeClass", "nonActiveClass"]);
  let { href = "" } = $$props;
  let { active = false } = $$props;
  let { activeClass = void 0 } = $$props;
  let { nonActiveClass = void 0 } = $$props;
  const context = getContext("navbar") ?? {};
  let liClass;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  liClass = twMerge(
    "block py-2 pr-4 pl-3 md:p-0 rounded md:border-0",
    active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass,
    $$props.class
  );
  return `<li>${((tag) => {
    return tag ? `<${href ? "a" : "div"}${spread(
      [
        {
          role: escape_attribute_value(href ? void 0 : "link")
        },
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        { class: escape_attribute_value(liClass) }
      ],
      {}
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "div")}</li>

`;
});
const NavUl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass", "ulClass", "hidden", "slideParams", "activeClass", "nonActiveClass"]);
  let { divClass = "w-full md:block md:w-auto" } = $$props;
  let { ulClass = "flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium" } = $$props;
  let { hidden = true } = $$props;
  let { slideParams = {
    delay: 250,
    duration: 500,
    easing: quintOut
  } } = $$props;
  let { activeClass = "text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent" } = $$props;
  let { nonActiveClass = "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" } = $$props;
  setContext("navbar", { activeClass, nonActiveClass });
  let _divClass;
  let _ulClass;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.slideParams === void 0 && $$bindings.slideParams && slideParams !== void 0)
    $$bindings.slideParams(slideParams);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  _divClass = twMerge(divClass, $$props.class);
  _ulClass = twMerge(
    ulClass,
    // 'divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-700',
    $$props.classUl
  );
  return `${!hidden ? `<div${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(_divClass) },
      { role: "button" },
      { tabindex: "0" }
    ],
    {}
  )}>${validate_component(Frame, "Frame").$$render(
    $$result,
    {
      tag: "ul",
      border: true,
      rounded: true,
      color: "navbarUl",
      class: _ulClass
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}</div>` : `<div${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(_divClass) },
      { hidden: hidden || null }
    ],
    {}
  )}><ul${add_attribute("class", _ulClass, 0)}>${slots.default ? slots.default({}) : ``}</ul></div>`}

`;
});
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "primary" } = $$props;
  let { bg = "text-gray-300" } = $$props;
  let { customColor = "" } = $$props;
  let { size = "8" } = $$props;
  let { currentFill = "currentFill" } = $$props;
  let { currentColor = "currentColor" } = $$props;
  let iconsize = `w-${size} h-${size}`;
  if (currentFill !== "currentFill") {
    color = void 0;
  }
  const fillColorClasses = {
    primary: "fill-primary-600",
    blue: "fill-blue-600",
    gray: "fill-gray-600 dark:fill-gray-300",
    green: "fill-green-500",
    red: "fill-red-600",
    yellow: "fill-yellow-400",
    pink: "fill-pink-600",
    purple: "fill-purple-600",
    white: "fill-white",
    custom: customColor
  };
  let fillColorClass = color === void 0 ? "" : fillColorClasses[color] ?? fillColorClasses.blue;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.customColor === void 0 && $$bindings.customColor && customColor !== void 0)
    $$bindings.customColor(customColor);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.currentFill === void 0 && $$bindings.currentFill && currentFill !== void 0)
    $$bindings.currentFill(currentFill);
  if ($$props.currentColor === void 0 && $$bindings.currentColor && currentColor !== void 0)
    $$bindings.currentColor(currentColor);
  return `<svg role="status"${add_attribute("class", twMerge("inline -mt-px animate-spin dark:text-gray-600", iconsize, bg, fillColorClass, $$props.class), 0)} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"${add_attribute("fill", currentColor, 0)}></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"${add_attribute("fill", currentFill, 0)}></path></svg>

`;
});
const GlobeAlt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "viewBox", "role", "strokeWidth", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  let { role = "img" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  if (variation === "mini") {
    size = "20";
    viewBox = "0 0 20 20";
  }
  let { ariaLabel = "globe alt" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      {
        "stroke-width": escape_attribute_value(strokeWidth)
      }
    ],
    {}
  )}>${variation === "outline" ? `<path d="M12 21C16.1926 21 19.7156 18.1332 20.7157 14.2529M12 21C7.80742 21 4.28442 18.1332 3.2843 14.2529M12 21C14.4853 21 16.5 16.9706 16.5 12C16.5 7.02944 14.4853 3 12 3M12 21C9.51472 21 7.5 16.9706 7.5 12C7.5 7.02944 9.51472 3 12 3M12 3C15.3652 3 18.299 4.84694 19.8431 7.58245M12 3C8.63481 3 5.70099 4.84694 4.15692 7.58245M19.8431 7.58245C17.7397 9.40039 14.9983 10.5 12 10.5C9.00172 10.5 6.26027 9.40039 4.15692 7.58245M19.8431 7.58245C20.5797 8.88743 21 10.3946 21 12C21 12.778 20.9013 13.5329 20.7157 14.2529M20.7157 14.2529C18.1334 15.6847 15.1619 16.5 12 16.5C8.8381 16.5 5.86662 15.6847 3.2843 14.2529M3.2843 14.2529C3.09871 13.5329 3 12.778 3 12C3 10.3946 3.42032 8.88743 4.15692 7.58245"${add_attribute("stroke", color, 0)}${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round"></path>` : `${variation === "mini" ? `<path d="M16.5546 5.41215C15.6845 4.17138 14.4711 3.18897 13.0522 2.60288C13.8305 3.9731 14.3991 5.47789 14.7147 7.07367C15.4062 6.61183 16.0263 6.05128 16.5546 5.41215Z"${add_attribute("fill", color, 0)}></path>
    <path d="M13.3257 7.82478C12.9801 5.69142 12.1346 3.72563 10.9132 2.05155C10.6135 2.0175 10.3088 2 10 2C9.69121 2 9.3865 2.0175 9.08682 2.05155C7.86543 3.72563 7.0199 5.69141 6.67433 7.82478C7.69581 8.25948 8.81982 8.5 10 8.5C11.1802 8.5 12.3042 8.25948 13.3257 7.82478Z"${add_attribute("fill", color, 0)}></path>
    <path d="M6.51418 9.37568C7.59957 9.77938 8.77402 10 10 10C11.226 10 12.4004 9.77938 13.4858 9.37568C13.4952 9.58261 13.5 9.79075 13.5 10C13.5 11.079 13.3734 12.1284 13.1343 13.1343C12.1284 13.3734 11.079 13.5 10 13.5C8.92099 13.5 7.87155 13.3734 6.86572 13.1343C6.62659 12.1284 6.5 11.079 6.5 10C6.5 9.79075 6.50476 9.58261 6.51418 9.37568Z"${add_attribute("fill", color, 0)}></path>
    <path d="M5.28529 7.07367C5.60086 5.47789 6.16954 3.9731 6.94776 2.60288C5.52894 3.18896 4.3155 4.17138 3.44542 5.41215C3.97374 6.05128 4.59375 6.61183 5.28529 7.07367Z"${add_attribute("fill", color, 0)}></path>
    <path d="M17.3336 6.79843C17.7622 7.77878 18 8.86162 18 10C18 10.3088 17.9825 10.6135 17.9484 10.9132C16.9787 11.6207 15.911 12.2021 14.7696 12.6333C14.921 11.7783 15 10.8984 15 10C15 9.5601 14.9811 9.12463 14.944 8.69435C15.8352 8.18645 16.6408 7.54546 17.3336 6.79843Z"${add_attribute("fill", color, 0)}></path>
    <path d="M2.66636 6.79843C3.3592 7.54546 4.16477 8.18645 5.05604 8.69435C5.01894 9.12463 5 9.5601 5 10C5 10.8984 5.07898 11.7783 5.23037 12.6333C4.08897 12.2021 3.02132 11.6207 2.05155 10.9132C2.0175 10.6135 2 10.3088 2 10C2 8.86162 2.23777 7.77878 2.66636 6.79843Z"${add_attribute("fill", color, 0)}></path>
    <path d="M10 15C10.8984 15 11.7783 14.921 12.6333 14.7696C12.2021 15.911 11.6207 16.9787 10.9132 17.9485C10.6135 17.9825 10.3088 18 10 18C9.69121 18 9.3865 17.9825 9.08682 17.9485C8.37929 16.9787 7.79789 15.911 7.36674 14.7696C8.22167 14.921 9.10161 15 10 15Z"${add_attribute("fill", color, 0)}></path>
    <path d="M14.3573 14.3573C14.0334 15.4259 13.5935 16.4441 13.0522 17.3971C15.0158 16.586 16.586 15.0158 17.3971 13.0522C16.4441 13.5935 15.4259 14.0334 14.3573 14.3573Z"${add_attribute("fill", color, 0)}></path>
    <path d="M6.94776 17.3971C4.98419 16.586 3.41399 15.0158 2.60288 13.0522C3.55593 13.5935 4.57408 14.0334 5.64268 14.3573C5.96656 15.4259 6.40648 16.4441 6.94776 17.3971Z"${add_attribute("fill", color, 0)}></path>` : `<path d="M21.7214 12.7517C21.7404 12.5036 21.75 12.2529 21.75 11.9999C21.75 10.4758 21.4003 9.03328 20.7767 7.74835C19.5396 8.92269 18.0671 9.85146 16.4374 10.4565C16.4789 10.9655 16.5 11.4803 16.5 11.9999C16.5 13.1011 16.4051 14.1802 16.2229 15.2293C18.2163 14.7277 20.0717 13.8792 21.7214 12.7517Z"${add_attribute("fill", color, 0)}></path>
    <path d="M14.6343 15.5501C14.874 14.4043 15 13.2168 15 11.9999C15 11.6315 14.9885 11.2659 14.9657 10.9032C14.0141 11.1299 13.021 11.2499 12 11.2499C10.979 11.2499 9.98594 11.1299 9.0343 10.9032C9.01155 11.2659 9 11.6315 9 11.9999C9 13.2168 9.12601 14.4043 9.3657 15.5501C10.2246 15.6817 11.1043 15.7499 12 15.7499C12.8957 15.7499 13.7754 15.6817 14.6343 15.5501Z"${add_attribute("fill", color, 0)}></path>
    <path d="M9.77224 17.119C10.5028 17.2054 11.2462 17.2499 12 17.2499C12.7538 17.2499 13.4972 17.2054 14.2278 17.119C13.714 18.7746 12.9575 20.3235 12 21.724C11.0425 20.3235 10.286 18.7746 9.77224 17.119Z"${add_attribute("fill", color, 0)}></path>
    <path d="M7.77706 15.2293C7.59493 14.1802 7.5 13.1011 7.5 11.9999C7.5 11.4803 7.52114 10.9655 7.56261 10.4565C5.93286 9.85146 4.46039 8.92269 3.22333 7.74835C2.59973 9.03328 2.25 10.4758 2.25 11.9999C2.25 12.2529 2.25964 12.5036 2.27856 12.7517C3.92826 13.8792 5.78374 14.7277 7.77706 15.2293Z"${add_attribute("fill", color, 0)}></path>
    <path d="M21.3561 14.7525C20.3404 18.2104 17.4597 20.8705 13.8776 21.5693C14.744 20.1123 15.4185 18.5278 15.8664 16.8508C17.8263 16.44 19.6736 15.7231 21.3561 14.7525Z"${add_attribute("fill", color, 0)}></path>
    <path d="M2.64395 14.7525C4.32642 15.7231 6.17372 16.44 8.13356 16.8508C8.58146 18.5278 9.25602 20.1123 10.1224 21.5693C6.54027 20.8705 3.65964 18.2104 2.64395 14.7525Z"${add_attribute("fill", color, 0)}></path>
    <path d="M13.8776 2.43055C16.3991 2.92245 18.5731 4.3862 19.9937 6.41599C18.9351 7.48484 17.6637 8.34251 16.2483 8.92017C15.862 6.58282 15.0435 4.39132 13.8776 2.43055Z"${add_attribute("fill", color, 0)}></path>
    <path d="M12 2.27588C13.4287 4.36548 14.4097 6.78537 14.805 9.39744C13.9083 9.62756 12.9684 9.74993 12 9.74993C11.0316 9.74993 10.0917 9.62756 9.19503 9.39744C9.5903 6.78537 10.5713 4.36548 12 2.27588Z"${add_attribute("fill", color, 0)}></path>
    <path d="M10.1224 2.43055C8.95648 4.39132 8.13795 6.58282 7.75171 8.92017C6.33629 8.34251 5.06489 7.48484 4.00635 6.41599C5.42689 4.3862 7.60085 2.92245 10.1224 2.43055Z"${add_attribute("fill", color, 0)}></path>`}`}</svg>

`;
});
function isActive(path) {
  return false;
}
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_FACTION;
  let $CALLSIGN, $$unsubscribe_CALLSIGN;
  $$unsubscribe_FACTION = subscribe(FACTION, (value) => value);
  $$unsubscribe_CALLSIGN = subscribe(CALLSIGN, (value) => $CALLSIGN = value);
  let callsign = $CALLSIGN;
  let faction;
  $$unsubscribe_FACTION();
  $$unsubscribe_CALLSIGN();
  return `<div class="flex h-screen flex-col">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {
    default: ({ toggle }) => {
      return `${validate_component(NavBrand, "NavBrand").$$render($$result, { class: "ml-4", disabled: true }, {}, {
        default: () => {
          return `${validate_component(GlobeAlt, "GlobeAlt").$$render($$result, { size: "52", color: "#34c9eb" }, {}, {})}
			${validate_component(Span, "Span").$$render(
            $$result,
            {
              gradient: true,
              class: "self-center whitespace-nowrap text-xl font-semibold px-4"
            },
            {},
            {
              default: () => {
                return `SpaceTraders`;
              }
            }
          )}`;
        }
      })}
		<div class="flex items-center md:order-2 mr-12">${validate_component(Avatar, "Avatar").$$render($$result, { id: "avatar-menu" }, {}, {})}
			${validate_component(NavHamburger, "NavHamburger").$$render(
        $$result,
        {
          class1: "w-full md:flex md:w-auto md:order-1"
        },
        {},
        {}
      )}</div>
		${validate_component(Dropdown, "Dropdown").$$render(
        $$result,
        {
          placement: "bottom",
          triggeredBy: "#avatar-menu"
        },
        {},
        {
          default: () => {
            return `${validate_component(DropdownHeader, "DropdownHeader").$$render($$result, {}, {}, {
              default: () => {
                return `${callsign ? `<span class="block text-sm">${escape(callsign)}</span>
					<span class="block truncate text-sm font-medium">${escape(faction.name)}</span>` : `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}`;
              }
            })}
			${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
              default: () => {
                return `Dashboard`;
              }
            })}
			${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
              default: () => {
                return `Settings`;
              }
            })}
			${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
              default: () => {
                return `Earnings`;
              }
            })}
			${validate_component(DropdownDivider, "DropdownDivider").$$render($$result, {}, {}, {})}
			${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "/" }, {}, {
              default: () => {
                return `Log Out`;
              }
            })}`;
          }
        }
      )}
		${validate_component(NavUl, "NavUl").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(NavLi, "NavLi").$$render($$result, { href: "/home", active: isActive() }, {}, {
            default: () => {
              return `Home`;
            }
          })}
			${validate_component(NavLi, "NavLi").$$render(
            $$result,
            {
              href: "/home/contracts",
              active: isActive()
            },
            {},
            {
              default: () => {
                return `Contracts`;
              }
            }
          )}
			${validate_component(NavLi, "NavLi").$$render(
            $$result,
            {
              href: "/home/map",
              active: isActive()
            },
            {},
            {
              default: () => {
                return `System Map`;
              }
            }
          )}
			${validate_component(NavLi, "NavLi").$$render(
            $$result,
            {
              href: "/home/faction",
              active: isActive()
            },
            {},
            {
              default: () => {
                return `Faction`;
              }
            }
          )}`;
        }
      })}`;
    }
  })}
	${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
