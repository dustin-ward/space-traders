<script>
	import { onMount } from "svelte"
	import { Alert, Spinner, Span } from "flowbite-svelte"
	import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper } from "flowbite-svelte";
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from "flowbite-svelte";
	import { XCircle, CalendarDays, ChartBar, ClipboardDocumentList, ShoppingCart, GlobeAlt, QuestionMarkCircle } from "svelte-heros-v2";
	import { CALLSIGN, FACTION, TOKEN } from '../../store.js';
	import { GetFaction } from '$lib/wailsjs/go/app/App.js';

	let faction;
	let callsign;
	let token;

	onMount(async () => {
		callsign = $CALLSIGN
		token = $TOKEN
		GetFaction($FACTION).then(result => {
			faction = result;
		});
	});

</script>

<div class="bg-[url('./lib/assets/images/system-temp.png')] bg-right">
	<div>
		<Navbar let:toggle>
			<NavBrand class="ml-4">
				<GlobeAlt size="52" color="#34c9eb"/>
				<Span gradient class="self-center whitespace-nowrap text-xl font-semibold px-4">SpaceTraders</Span>
			</NavBrand>
			<div class="flex items-center md:order-2 mr-12">
				<Avatar id="avatar-menu"/>
				<NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1"/>
			</div>
			<Dropdown placement="bottom" triggeredBy="#avatar-menu">
				<DropdownHeader>
					{#if callsign}
						<span class="block text-sm">{callsign}</span>
						<span class="block truncate text-sm font-medium">{faction.name}</span>
					{:else}
						<Spinner/>
					{/if}
				</DropdownHeader>
				<DropdownItem>Dashboard</DropdownItem>
				<DropdownItem>Settings</DropdownItem>
				<DropdownItem>Earnings</DropdownItem>
				<DropdownDivider />
				<DropdownItem href="/">Log Out</DropdownItem>
			</Dropdown>
			<NavUl>
				<NavLi href="/home">Home</NavLi>
				<NavLi href="/map" active>System Map</NavLi>
				<NavLi href="/faction">Faction</NavLi>
			</NavUl>
		</Navbar>
	</div>
	<div class="">
		<Sidebar class="">
			<SidebarWrapper class="h-screen">
				<SidebarGroup class="">
					<SidebarItem label="Temp 1">
						<svelte:fragment slot="icon">
							<CalendarDays size="30"/>
						</svelte:fragment>
					</SidebarItem>
					<SidebarItem label="Temp 2">
						<svelte:fragment slot="icon">
							<ChartBar size="30"/>
						</svelte:fragment>
					</SidebarItem>
					<SidebarItem label="Temp 3">
						<svelte:fragment slot="icon">
							<ClipboardDocumentList size="30"/>
						</svelte:fragment>
					</SidebarItem>
					<SidebarItem label="Temp 4">
						<svelte:fragment slot="icon">
							<ShoppingCart size="30"/>
						</svelte:fragment>
					</SidebarItem>
				</SidebarGroup>
				<SidebarGroup border class="">
					<SidebarItem label="Help">
						<svelte:fragment slot="icon">
							<QuestionMarkCircle size="30"/>
						</svelte:fragment>
					</SidebarItem>
				</SidebarGroup>
			</SidebarWrapper>
		</Sidebar>
	</div>
</div>
