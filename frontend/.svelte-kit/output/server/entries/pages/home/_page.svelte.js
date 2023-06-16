import { c as create_ssr_component, b as compute_rest_props, d as spread, h as escape_object, f as escape_attribute_value, j as add_attribute, e as escape, l as compute_slots, a as subscribe, v as validate_component } from "../../../chunks/index2.js";
/* empty css                                                       */import { twMerge } from "tailwind-merge";
import { F as FACTION, T as TOKEN, C as CALLSIGN } from "../../../chunks/store.js";
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["asideClass"]);
  let { asideClass = "w-64" } = $$props;
  if ($$props.asideClass === void 0 && $$bindings.asideClass && asideClass !== void 0)
    $$bindings.asideClass(asideClass);
  return `<aside${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(asideClass, $$props.class))
      },
      { "aria-label": "Sidebar" }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</aside>

`;
});
const SidebarItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["aClass", "href", "label", "spanClass", "activeClass", "active"]);
  let $$slots = compute_slots(slots);
  let { aClass = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { href = "" } = $$props;
  let { label = "" } = $$props;
  let { spanClass = "ml-3" } = $$props;
  let { activeClass = "flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { active = false } = $$props;
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0)
    $$bindings.spanClass(spanClass);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  return `<li><a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(twMerge(active ? activeClass : aClass, $$props.class))
      }
    ],
    {}
  )}>${slots.icon ? slots.icon({}) : ``}
    <span${add_attribute("class", spanClass, 0)}>${escape(label)}</span>
    ${$$slots.subtext ? `${slots.subtext ? slots.subtext({}) : ``}` : ``}</a></li>

`;
});
const SidebarGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ulClass", "borderClass", "border"]);
  let { ulClass = "space-y-2" } = $$props;
  let { borderClass = "pt-4 mt-4 border-t border-gray-200 dark:border-gray-700" } = $$props;
  let { border = false } = $$props;
  if (border) {
    ulClass += " " + borderClass;
  }
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  return `<ul${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(ulClass, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</ul>

`;
});
const SidebarWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass"]);
  let { divClass = "overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800" } = $$props;
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
  )}>${slots.default ? slots.default({}) : ``}</div>

`;
});
const CalendarDays = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { ariaLabel = "calendar days" } = $$props;
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
  )}>${variation === "outline" ? `<path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.25736 4.00736 5.25 5.25 5.25H18.75C19.9926 5.25 21 6.25736 21 7.5V18.75M3 18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75M3 18.75V11.25C3 10.0074 4.00736 9 5.25 9H18.75C19.9926 9 21 10.0074 21 11.25V18.75M12 12.75H12.0075V12.7575H12V12.75ZM12 15H12.0075V15.0075H12V15ZM12 17.25H12.0075V17.2575H12V17.25ZM9.75 15H9.7575V15.0075H9.75V15ZM9.75 17.25H9.7575V17.2575H9.75V17.25ZM7.5 15H7.5075V15.0075H7.5V15ZM7.5 17.25H7.5075V17.2575H7.5V17.25ZM14.25 12.75H14.2575V12.7575H14.25V12.75ZM14.25 15H14.2575V15.0075H14.25V15ZM14.25 17.25H14.2575V17.2575H14.25V17.25ZM16.5 12.75H16.5075V12.7575H16.5V12.75ZM16.5 15H16.5075V15.0075H16.5V15Z"${add_attribute("stroke", color, 0)}${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round"></path>` : `${variation === "mini" ? `<path d="M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H6.01C6.42421 11.25 6.76 11.5858 6.76 12V12.01C6.76 12.4242 6.42421 12.76 6.01 12.76H6C5.58579 12.76 5.25 12.4242 5.25 12.01V12Z"${add_attribute("fill", color, 0)}></path>
    <path d="M6 13.25C5.58579 13.25 5.25 13.5858 5.25 14V14.01C5.25 14.4242 5.58579 14.76 6 14.76H6.01C6.42421 14.76 6.76 14.4242 6.76 14.01V14C6.76 13.5858 6.42421 13.25 6.01 13.25H6Z"${add_attribute("fill", color, 0)}></path>
    <path d="M7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H8.01C8.42421 11.25 8.76 11.5858 8.76 12V12.01C8.76 12.4242 8.42421 12.76 8.01 12.76H8C7.58579 12.76 7.25 12.4242 7.25 12.01V12Z"${add_attribute("fill", color, 0)}></path>
    <path d="M8 13.25C7.58579 13.25 7.25 13.5858 7.25 14V14.01C7.25 14.4242 7.58579 14.76 8 14.76H8.01C8.42421 14.76 8.76 14.4242 8.76 14.01V14C8.76 13.5858 8.42421 13.25 8.01 13.25H8Z"${add_attribute("fill", color, 0)}></path>
    <path d="M9.25 10C9.25 9.58579 9.58579 9.25 10 9.25H10.01C10.4242 9.25 10.76 9.58579 10.76 10V10.01C10.76 10.4242 10.4242 10.76 10.01 10.76H10C9.58579 10.76 9.25 10.4242 9.25 10.01V10Z"${add_attribute("fill", color, 0)}></path>
    <path d="M10 11.25C9.58579 11.25 9.25 11.5858 9.25 12V12.01C9.25 12.4242 9.58579 12.76 10 12.76H10.01C10.4242 12.76 10.76 12.4242 10.76 12.01V12C10.76 11.5858 10.4242 11.25 10.01 11.25H10Z"${add_attribute("fill", color, 0)}></path>
    <path d="M9.25 14C9.25 13.5858 9.58579 13.25 10 13.25H10.01C10.4242 13.25 10.76 13.5858 10.76 14V14.01C10.76 14.4242 10.4242 14.76 10.01 14.76H10C9.58579 14.76 9.25 14.4242 9.25 14.01V14Z"${add_attribute("fill", color, 0)}></path>
    <path d="M12 9.25C11.5858 9.25 11.25 9.58579 11.25 10V10.01C11.25 10.4242 11.5858 10.76 12 10.76H12.01C12.4242 10.76 12.76 10.4242 12.76 10.01V10C12.76 9.58579 12.4242 9.25 12.01 9.25H12Z"${add_attribute("fill", color, 0)}></path>
    <path d="M11.25 12C11.25 11.5858 11.5858 11.25 12 11.25H12.01C12.4242 11.25 12.76 11.5858 12.76 12V12.01C12.76 12.4242 12.4242 12.76 12.01 12.76H12C11.5858 12.76 11.25 12.4242 11.25 12.01V12Z"${add_attribute("fill", color, 0)}></path>
    <path d="M12 13.25C11.5858 13.25 11.25 13.5858 11.25 14V14.01C11.25 14.4242 11.5858 14.76 12 14.76H12.01C12.4242 14.76 12.76 14.4242 12.76 14.01V14C12.76 13.5858 12.4242 13.25 12.01 13.25H12Z"${add_attribute("fill", color, 0)}></path>
    <path d="M13.25 10C13.25 9.58579 13.5858 9.25 14 9.25H14.01C14.4242 9.25 14.76 9.58579 14.76 10V10.01C14.76 10.4242 14.4242 10.76 14.01 10.76H14C13.5858 10.76 13.25 10.4242 13.25 10.01V10Z"${add_attribute("fill", color, 0)}></path>
    <path d="M14 11.25C13.5858 11.25 13.25 11.5858 13.25 12V12.01C13.25 12.4242 13.5858 12.76 14 12.76H14.01C14.4242 12.76 14.76 12.4242 14.76 12.01V12C14.76 11.5858 14.4242 11.25 14.01 11.25H14Z"${add_attribute("fill", color, 0)}></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 2C6.16421 2 6.5 2.33579 6.5 2.75V4H13.5V2.75C13.5 2.33579 13.8358 2 14.25 2C14.6642 2 15 2.33579 15 2.75V4H15.25C16.7688 4 18 5.23122 18 6.75V15.25C18 16.7688 16.7688 18 15.25 18H4.75C3.23122 18 2 16.7688 2 15.25V6.75C2 5.23122 3.23122 4 4.75 4H5V2.75C5 2.33579 5.33579 2 5.75 2ZM4.75 7.5C4.05964 7.5 3.5 8.05964 3.5 8.75V15.25C3.5 15.9404 4.05964 16.5 4.75 16.5H15.25C15.9404 16.5 16.5 15.9404 16.5 15.25V8.75C16.5 8.05964 15.9404 7.5 15.25 7.5H4.75Z"${add_attribute("fill", color, 0)}></path>` : `<path d="M12.75 12.75C12.75 13.1642 12.4142 13.5 12 13.5C11.5858 13.5 11.25 13.1642 11.25 12.75C11.25 12.3358 11.5858 12 12 12C12.4142 12 12.75 12.3358 12.75 12.75Z"${add_attribute("fill", color, 0)}></path>
    <path d="M7.5 15.75C7.91421 15.75 8.25 15.4142 8.25 15C8.25 14.5858 7.91421 14.25 7.5 14.25C7.08579 14.25 6.75 14.5858 6.75 15C6.75 15.4142 7.08579 15.75 7.5 15.75Z"${add_attribute("fill", color, 0)}></path>
    <path d="M8.25 17.25C8.25 17.6642 7.91421 18 7.5 18C7.08579 18 6.75 17.6642 6.75 17.25C6.75 16.8358 7.08579 16.5 7.5 16.5C7.91421 16.5 8.25 16.8358 8.25 17.25Z"${add_attribute("fill", color, 0)}></path>
    <path d="M9.75 15.75C10.1642 15.75 10.5 15.4142 10.5 15C10.5 14.5858 10.1642 14.25 9.75 14.25C9.33579 14.25 9 14.5858 9 15C9 15.4142 9.33579 15.75 9.75 15.75Z"${add_attribute("fill", color, 0)}></path>
    <path d="M10.5 17.25C10.5 17.6642 10.1642 18 9.75 18C9.33579 18 9 17.6642 9 17.25C9 16.8358 9.33579 16.5 9.75 16.5C10.1642 16.5 10.5 16.8358 10.5 17.25Z"${add_attribute("fill", color, 0)}></path>
    <path d="M12 15.75C12.4142 15.75 12.75 15.4142 12.75 15C12.75 14.5858 12.4142 14.25 12 14.25C11.5858 14.25 11.25 14.5858 11.25 15C11.25 15.4142 11.5858 15.75 12 15.75Z"${add_attribute("fill", color, 0)}></path>
    <path d="M12.75 17.25C12.75 17.6642 12.4142 18 12 18C11.5858 18 11.25 17.6642 11.25 17.25C11.25 16.8358 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.8358 12.75 17.25Z"${add_attribute("fill", color, 0)}></path>
    <path d="M14.25 15.75C14.6642 15.75 15 15.4142 15 15C15 14.5858 14.6642 14.25 14.25 14.25C13.8358 14.25 13.5 14.5858 13.5 15C13.5 15.4142 13.8358 15.75 14.25 15.75Z"${add_attribute("fill", color, 0)}></path>
    <path d="M15 17.25C15 17.6642 14.6642 18 14.25 18C13.8358 18 13.5 17.6642 13.5 17.25C13.5 16.8358 13.8358 16.5 14.25 16.5C14.6642 16.5 15 16.8358 15 17.25Z"${add_attribute("fill", color, 0)}></path>
    <path d="M16.5 15.75C16.9142 15.75 17.25 15.4142 17.25 15C17.25 14.5858 16.9142 14.25 16.5 14.25C16.0858 14.25 15.75 14.5858 15.75 15C15.75 15.4142 16.0858 15.75 16.5 15.75Z"${add_attribute("fill", color, 0)}></path>
    <path d="M15 12.75C15 13.1642 14.6642 13.5 14.25 13.5C13.8358 13.5 13.5 13.1642 13.5 12.75C13.5 12.3358 13.8358 12 14.25 12C14.6642 12 15 12.3358 15 12.75Z"${add_attribute("fill", color, 0)}></path>
    <path d="M16.5 13.5C16.9142 13.5 17.25 13.1642 17.25 12.75C17.25 12.3358 16.9142 12 16.5 12C16.0858 12 15.75 12.3358 15.75 12.75C15.75 13.1642 16.0858 13.5 16.5 13.5Z"${add_attribute("fill", color, 0)}></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 2.25C7.16421 2.25 7.5 2.58579 7.5 3V4.5H16.5V3C16.5 2.58579 16.8358 2.25 17.25 2.25C17.6642 2.25 18 2.58579 18 3V4.5H18.75C20.4069 4.5 21.75 5.84315 21.75 7.5V18.75C21.75 20.4069 20.4069 21.75 18.75 21.75H5.25C3.59315 21.75 2.25 20.4069 2.25 18.75V7.5C2.25 5.84315 3.59315 4.5 5.25 4.5H6V3C6 2.58579 6.33579 2.25 6.75 2.25ZM20.25 11.25C20.25 10.4216 19.5784 9.75 18.75 9.75H5.25C4.42157 9.75 3.75 10.4216 3.75 11.25V18.75C3.75 19.5784 4.42157 20.25 5.25 20.25H18.75C19.5784 20.25 20.25 19.5784 20.25 18.75V11.25Z"${add_attribute("fill", color, 0)}></path>`}`}</svg>

`;
});
const ChartBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { ariaLabel = "chart bar" } = $$props;
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
  )}>${variation === "outline" ? `<path d="M3 13.125C3 12.5037 3.50368 12 4.125 12H6.375C6.99632 12 7.5 12.5037 7.5 13.125V19.875C7.5 20.4963 6.99632 21 6.375 21H4.125C3.50368 21 3 20.4963 3 19.875V13.125Z"${add_attribute("stroke", color, 0)}${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M9.75 8.625C9.75 8.00368 10.2537 7.5 10.875 7.5H13.125C13.7463 7.5 14.25 8.00368 14.25 8.625V19.875C14.25 20.4963 13.7463 21 13.125 21H10.875C10.2537 21 9.75 20.4963 9.75 19.875V8.625Z"${add_attribute("stroke", color, 0)}${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M16.5 4.125C16.5 3.50368 17.0037 3 17.625 3H19.875C20.4963 3 21 3.50368 21 4.125V19.875C21 20.4963 20.4963 21 19.875 21H17.625C17.0037 21 16.5 20.4963 16.5 19.875V4.125Z"${add_attribute("stroke", color, 0)}${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round"></path>` : `${variation === "mini" ? `<path d="M15.5 2C14.6716 2 14 2.67157 14 3.5V16.5C14 17.3284 14.6716 18 15.5 18H16.5C17.3284 18 18 17.3284 18 16.5V3.5C18 2.67157 17.3284 2 16.5 2H15.5Z"${add_attribute("fill", color, 0)}></path>
    <path d="M9.5 6C8.67157 6 8 6.67157 8 7.5V16.5C8 17.3284 8.67157 18 9.5 18H10.5C11.3284 18 12 17.3284 12 16.5V7.5C12 6.67157 11.3284 6 10.5 6H9.5Z"${add_attribute("fill", color, 0)}></path>
    <path d="M3.5 10C2.67157 10 2 10.6716 2 11.5V16.5C2 17.3284 2.67157 18 3.5 18H4.5C5.32843 18 6 17.3284 6 16.5V11.5C6 10.6716 5.32843 10 4.5 10H3.5Z"${add_attribute("fill", color, 0)}></path>` : `<path d="M18.375 2.25C17.3395 2.25 16.5 3.08947 16.5 4.125V19.875C16.5 20.9105 17.3395 21.75 18.375 21.75H19.125C20.1605 21.75 21 20.9105 21 19.875V4.125C21 3.08947 20.1605 2.25 19.125 2.25H18.375Z"${add_attribute("fill", color, 0)}></path>
    <path d="M9.75 8.625C9.75 7.58947 10.5895 6.75 11.625 6.75H12.375C13.4105 6.75 14.25 7.58947 14.25 8.625V19.875C14.25 20.9105 13.4105 21.75 12.375 21.75H11.625C10.5895 21.75 9.75 20.9105 9.75 19.875V8.625Z"${add_attribute("fill", color, 0)}></path>
    <path d="M3 13.125C3 12.0895 3.83947 11.25 4.875 11.25H5.625C6.66053 11.25 7.5 12.0895 7.5 13.125V19.875C7.5 20.9105 6.66053 21.75 5.625 21.75H4.875C3.83947 21.75 3 20.9105 3 19.875V13.125Z"${add_attribute("fill", color, 0)}></path>`}`}</svg>

`;
});
const ClipboardDocumentList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { ariaLabel = "clipboard document list" } = $$props;
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
  )}>${variation === "outline" ? `<path d="M9 12H12.75M9 15H12.75M9 18H12.75M15.75 18.75H18C19.2426 18.75 20.25 17.7426 20.25 16.5V6.10822C20.25 4.97324 19.405 4.01015 18.2739 3.91627C17.9006 3.88529 17.5261 3.85858 17.1505 3.83619M11.3495 3.83619C11.2848 4.04602 11.25 4.26894 11.25 4.5C11.25 4.91421 11.5858 5.25 12 5.25H16.5C16.9142 5.25 17.25 4.91421 17.25 4.5C17.25 4.26894 17.2152 4.04602 17.1505 3.83619M11.3495 3.83619C11.6328 2.91757 12.4884 2.25 13.5 2.25H15C16.0116 2.25 16.8672 2.91757 17.1505 3.83619M11.3495 3.83619C10.9739 3.85858 10.5994 3.88529 10.2261 3.91627C9.09499 4.01015 8.25 4.97324 8.25 6.10822V8.25M8.25 8.25H4.875C4.25368 8.25 3.75 8.75368 3.75 9.375V20.625C3.75 21.2463 4.25368 21.75 4.875 21.75H14.625C15.2463 21.75 15.75 21.2463 15.75 20.625V9.375C15.75 8.75368 15.2463 8.25 14.625 8.25H8.25ZM6.75 12H6.7575V12.0075H6.75V12ZM6.75 15H6.7575V15.0075H6.75V15ZM6.75 18H6.7575V18.0075H6.75V18Z"${add_attribute("stroke", color, 0)}${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round"></path>` : `${variation === "mini" ? `<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9875 3.0124C17.1185 3.1311 17.9999 4.08761 17.9999 5.25V11.75C17.9999 12.9926 16.9925 14 15.7499 14H13.4999V7C13.4999 5.61929 12.3806 4.5 10.9999 4.5H8.12793C8.4115 3.69769 9.13721 3.10424 10.0123 3.0124C10.131 1.88145 11.0875 1 12.2499 1H13.7499C14.9123 1 15.8688 1.88145 15.9875 3.0124ZM11.4999 3.25C11.4999 2.83579 11.8357 2.5 12.2499 2.5H13.7499C14.1641 2.5 14.4999 2.83579 14.4999 3.25V3.5H11.4999V3.25Z"${add_attribute("fill", color, 0)}></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 7C2 6.44771 2.44772 6 3 6H11C11.5523 6 12 6.44772 12 7V17C12 17.5523 11.5523 18 11 18H3C2.44772 18 2 17.5523 2 17V7ZM4 10.25C4 9.83579 4.33579 9.5 4.75 9.5H9.25C9.66421 9.5 10 9.83579 10 10.25C10 10.6642 9.66421 11 9.25 11H4.75C4.33579 11 4 10.6642 4 10.25ZM4 13.75C4 13.3358 4.33579 13 4.75 13H9.25C9.66421 13 10 13.3358 10 13.75C10 14.1642 9.66421 14.5 9.25 14.5H4.75C4.33579 14.5 4 14.1642 4 13.75Z"${add_attribute("fill", color, 0)}></path>` : `<path fill-rule="evenodd" clip-rule="evenodd" d="M7.50183 6H11.2477L11.25 6H14.6299C16.4915 6.00268 17.9999 7.51269 17.9999 9.375V18.75C19.6567 18.75 20.9999 17.4068 20.9999 15.75V6.10821C20.9999 4.60282 19.8751 3.2966 18.3358 3.16884C18.1121 3.15027 17.8879 3.13321 17.6632 3.11767C17.1633 2.15647 16.1583 1.5 15 1.5H13.5C12.3417 1.5 11.3367 2.15647 10.8368 3.11765C10.6121 3.13319 10.3878 3.15026 10.1639 3.16884C8.66165 3.29353 7.55421 4.54069 7.50183 6ZM13.5 3C12.6716 3 12 3.67157 12 4.5H16.5C16.5 3.67157 15.8284 3 15 3H13.5Z"${add_attribute("fill", color, 0)}></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 9.375C3 8.33947 3.83947 7.5 4.875 7.5H14.625C15.6605 7.5 16.5 8.33947 16.5 9.375V20.625C16.5 21.6605 15.6605 22.5 14.625 22.5H4.875C3.83947 22.5 3 21.6605 3 20.625V9.375ZM6 12C6 11.5858 6.33579 11.25 6.75 11.25H6.7575C7.17171 11.25 7.5075 11.5858 7.5075 12V12.0075C7.5075 12.4217 7.17171 12.7575 6.7575 12.7575H6.75C6.33579 12.7575 6 12.4217 6 12.0075V12ZM8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H12.75C13.1642 11.25 13.5 11.5858 13.5 12C13.5 12.4142 13.1642 12.75 12.75 12.75H9C8.58579 12.75 8.25 12.4142 8.25 12ZM6 15C6 14.5858 6.33579 14.25 6.75 14.25H6.7575C7.17171 14.25 7.5075 14.5858 7.5075 15V15.0075C7.5075 15.4217 7.17171 15.7575 6.7575 15.7575H6.75C6.33579 15.7575 6 15.4217 6 15.0075V15ZM8.25 15C8.25 14.5858 8.58579 14.25 9 14.25H12.75C13.1642 14.25 13.5 14.5858 13.5 15C13.5 15.4142 13.1642 15.75 12.75 15.75H9C8.58579 15.75 8.25 15.4142 8.25 15ZM6 18C6 17.5858 6.33579 17.25 6.75 17.25H6.7575C7.17171 17.25 7.5075 17.5858 7.5075 18V18.0075C7.5075 18.4217 7.17171 18.7575 6.7575 18.7575H6.75C6.33579 18.7575 6 18.4217 6 18.0075V18ZM8.25 18C8.25 17.5858 8.58579 17.25 9 17.25H12.75C13.1642 17.25 13.5 17.5858 13.5 18C13.5 18.4142 13.1642 18.75 12.75 18.75H9C8.58579 18.75 8.25 18.4142 8.25 18Z"${add_attribute("fill", color, 0)}></path>`}`}</svg>

`;
});
const QuestionMarkCircle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { ariaLabel = "question mark circle" } = $$props;
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
  )}>${variation === "outline" ? `<path d="M9.87891 7.51884C11.0505 6.49372 12.95 6.49372 14.1215 7.51884C15.2931 8.54397 15.2931 10.206 14.1215 11.2312C13.9176 11.4096 13.6917 11.5569 13.4513 11.6733C12.7056 12.0341 12.0002 12.6716 12.0002 13.5V14.25M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 17.25H12.0075V17.2575H12V17.25Z"${add_attribute("stroke", color, 0)}${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round"></path>` : `${variation === "mini" ? `<path fill-rule="evenodd" clip-rule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM8.93934 6.93931C8.64645 7.23221 8.17157 7.23221 7.87868 6.93931C7.58579 6.64642 7.58579 6.17155 7.87868 5.87865C9.05025 4.70708 10.9497 4.70708 12.1213 5.87865C13.2929 7.05023 13.2929 8.94972 12.1213 10.1213C11.7288 10.5138 11.2528 10.7756 10.75 10.9051V11.25C10.75 11.6642 10.4142 12 10 12C9.58579 12 9.25 11.6642 9.25 11.25V10.75C9.25 10.0297 9.81995 9.57826 10.3313 9.46322C10.5982 9.40318 10.8516 9.26969 11.0607 9.06063C11.6464 8.47485 11.6464 7.5251 11.0607 6.93931C10.4749 6.35353 9.52513 6.35353 8.93934 6.93931ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44771 13 9 13.4477 9 14C9 14.5523 9.44771 15 10 15Z"${add_attribute("fill", color, 0)}></path>` : `<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM13.6277 8.08328C12.7389 7.30557 11.2616 7.30557 10.3728 8.08328C10.0611 8.35604 9.58723 8.32445 9.31447 8.01272C9.04171 7.701 9.0733 7.22717 9.38503 6.95441C10.8394 5.68186 13.1611 5.68186 14.6154 6.95441C16.1285 8.27835 16.1285 10.4717 14.6154 11.7956C14.3588 12.0202 14.0761 12.2041 13.778 12.3484C13.1018 12.6756 12.7502 13.1222 12.7502 13.5V14.25C12.7502 14.6642 12.4144 15 12.0002 15C11.586 15 11.2502 14.6642 11.2502 14.25V13.5C11.2502 12.221 12.3095 11.3926 13.1246 10.9982C13.3073 10.9098 13.4765 10.799 13.6277 10.6667C14.4577 9.9404 14.4577 8.80959 13.6277 8.08328ZM12 18C12.4142 18 12.75 17.6642 12.75 17.25C12.75 16.8358 12.4142 16.5 12 16.5C11.5858 16.5 11.25 16.8358 11.25 17.25C11.25 17.6642 11.5858 18 12 18Z"${add_attribute("fill", color, 0)}></path>`}`}</svg>

`;
});
const ShoppingCart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { ariaLabel = "shopping cart" } = $$props;
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
  )}>${variation === "outline" ? `<path d="M2.25 3H3.63568C4.14537 3 4.59138 3.34265 4.7227 3.83513L5.1059 5.27209M7.5 14.25C5.84315 14.25 4.5 15.5931 4.5 17.25H20.25M7.5 14.25H18.7183C19.8394 11.9494 20.8177 9.56635 21.6417 7.1125C16.88 5.89646 11.8905 5.25 6.75 5.25C6.20021 5.25 5.65214 5.2574 5.1059 5.27209M7.5 14.25L5.1059 5.27209M6 20.25C6 20.6642 5.66421 21 5.25 21C4.83579 21 4.5 20.6642 4.5 20.25C4.5 19.8358 4.83579 19.5 5.25 19.5C5.66421 19.5 6 19.8358 6 20.25ZM18.75 20.25C18.75 20.6642 18.4142 21 18 21C17.5858 21 17.25 20.6642 17.25 20.25C17.25 19.8358 17.5858 19.5 18 19.5C18.4142 19.5 18.75 19.8358 18.75 20.25Z"${add_attribute("stroke", color, 0)}${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round"></path>` : `${variation === "mini" ? `<path d="M1 1.75C1 1.33579 1.33579 1 1.75 1H3.37846C4.25256 1 4.99261 1.64498 5.11205 2.51088L5.17955 3.00024C9.75911 3.01263 14.2281 3.49872 18.5398 4.41236C18.9395 4.49706 19.1979 4.88613 19.1209 5.2874C18.7145 7.40548 18.1717 9.47515 17.502 11.4869C17.4 11.7933 17.1134 12 16.7904 12H6C5.88567 12 5.77351 12.0076 5.66393 12.0223C4.78545 12.14 4.05092 12.7153 3.70796 13.5H17.25C17.6642 13.5 18 13.8358 18 14.25C18 14.6642 17.6642 15 17.25 15H2.75948C2.55068 15 2.35133 14.913 2.2094 14.7598C2.06747 14.6067 1.9958 14.4013 2.01164 14.1931C2.13566 12.5628 3.23526 11.2069 4.72829 10.7066L3.62612 2.71584C3.60906 2.59214 3.50333 2.5 3.37846 2.5H1.75C1.33579 2.5 1 2.16421 1 1.75Z"${add_attribute("fill", color, 0)}></path>
    <path d="M6 17.5C6 18.3284 5.32843 19 4.5 19C3.67157 19 3 18.3284 3 17.5C3 16.6716 3.67157 16 4.5 16C5.32843 16 6 16.6716 6 17.5Z"${add_attribute("fill", color, 0)}></path>
    <path d="M15.5 19C16.3284 19 17 18.3284 17 17.5C17 16.6716 16.3284 16 15.5 16C14.6716 16 14 16.6716 14 17.5C14 18.3284 14.6716 19 15.5 19Z"${add_attribute("fill", color, 0)}></path>` : `<path d="M2.25 2.25C1.83579 2.25 1.5 2.58579 1.5 3C1.5 3.41421 1.83579 3.75 2.25 3.75H3.63568C3.80558 3.75 3.95425 3.86422 3.99803 4.02838L6.55576 13.6199C4.94178 14.0385 3.75 15.5051 3.75 17.25C3.75 17.6642 4.08579 18 4.5 18H20.25C20.6642 18 21 17.6642 21 17.25C21 16.8358 20.6642 16.5 20.25 16.5H5.37803C5.68691 15.6261 6.52034 15 7.5 15H18.7183C19.0051 15 19.2668 14.8364 19.3925 14.5785C20.5277 12.249 21.5183 9.83603 22.3527 7.35126C22.4191 7.15357 22.4002 6.93716 22.3005 6.75399C22.2008 6.57082 22.0294 6.43743 21.8273 6.38583C17.0055 5.15442 11.9536 4.5 6.75 4.5C6.39217 4.5 6.03505 4.5031 5.67868 4.50926L5.44738 3.64188C5.2285 2.82109 4.48515 2.25 3.63568 2.25H2.25Z"${add_attribute("fill", color, 0)}></path>
    <path d="M3.75 20.25C3.75 19.4216 4.42157 18.75 5.25 18.75C6.07843 18.75 6.75 19.4216 6.75 20.25C6.75 21.0784 6.07843 21.75 5.25 21.75C4.42157 21.75 3.75 21.0784 3.75 20.25Z"${add_attribute("fill", color, 0)}></path>
    <path d="M16.5 20.25C16.5 19.4216 17.1716 18.75 18 18.75C18.8284 18.75 19.5 19.4216 19.5 20.25C19.5 21.0784 18.8284 21.75 18 21.75C17.1716 21.75 16.5 21.0784 16.5 20.25Z"${add_attribute("fill", color, 0)}></path>`}`}</svg>

`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_FACTION;
  let $$unsubscribe_TOKEN;
  let $$unsubscribe_CALLSIGN;
  $$unsubscribe_FACTION = subscribe(FACTION, (value) => value);
  $$unsubscribe_TOKEN = subscribe(TOKEN, (value) => value);
  $$unsubscribe_CALLSIGN = subscribe(CALLSIGN, (value) => value);
  $$unsubscribe_FACTION();
  $$unsubscribe_TOKEN();
  $$unsubscribe_CALLSIGN();
  return `<div class="overflow-hidden"><div class="">${validate_component(Sidebar, "Sidebar").$$render($$result, { class: "" }, {}, {
    default: () => {
      return `${validate_component(SidebarWrapper, "SidebarWrapper").$$render($$result, { class: "h-screen" }, {}, {
        default: () => {
          return `${validate_component(SidebarGroup, "SidebarGroup").$$render($$result, { class: "" }, {}, {
            default: () => {
              return `${validate_component(SidebarItem, "SidebarItem").$$render($$result, { label: "Temp 1" }, {}, {
                icon: () => {
                  return `${validate_component(CalendarDays, "CalendarDays").$$render($$result, { size: "30" }, {}, {})}`;
                }
              })}
					${validate_component(SidebarItem, "SidebarItem").$$render($$result, { label: "Temp 2" }, {}, {
                icon: () => {
                  return `${validate_component(ChartBar, "ChartBar").$$render($$result, { size: "30" }, {}, {})}`;
                }
              })}
					${validate_component(SidebarItem, "SidebarItem").$$render($$result, { label: "Temp 3" }, {}, {
                icon: () => {
                  return `${validate_component(ClipboardDocumentList, "ClipboardDocumentList").$$render($$result, { size: "30" }, {}, {})}`;
                }
              })}
					${validate_component(SidebarItem, "SidebarItem").$$render($$result, { label: "Temp 4" }, {}, {
                icon: () => {
                  return `${validate_component(ShoppingCart, "ShoppingCart").$$render($$result, { size: "30" }, {}, {})}`;
                }
              })}`;
            }
          })}
				${validate_component(SidebarGroup, "SidebarGroup").$$render($$result, { border: true, class: "" }, {}, {
            default: () => {
              return `${validate_component(SidebarItem, "SidebarItem").$$render($$result, { label: "Help" }, {}, {
                icon: () => {
                  return `${validate_component(QuestionMarkCircle, "QuestionMarkCircle").$$render($$result, { size: "30" }, {}, {})}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div></div>`;
});
export {
  Page as default
};
