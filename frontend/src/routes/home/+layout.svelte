<script>
	import { page } from '$app/stores'; 
	import { onMount } from 'svelte';
	import { Span, Spinner, Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from "flowbite-svelte";
	import { GlobeAlt } from "svelte-heros-v2";
	import { GetFaction } from '$lib/wailsjs/go/app/App.js';
	import { CALLSIGN, FACTION, NAV_ACTIVE } from '../../store.js';
	
	let callsign = $CALLSIGN;
	let faction;

	function isActive(path) {
		return false;
	}

	onMount(async () => {
		GetFaction($FACTION).then(result => {
			faction = result;
		});
	});
</script>

<div class="flex h-screen flex-col">
	<Navbar let:toggle>
		<NavBrand class="ml-4" disabled>
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
			<NavLi href="/home" active={isActive("/home")}>Home</NavLi>
			<NavLi href="/home/contracts" active={isActive("/home/contracts")}>Contracts</NavLi>
			<NavLi href="/home/map" active={isActive("/home/map")}>System Map</NavLi>
			<NavLi href="/home/faction" active={isActive("/home/faction")}>Faction</NavLi>
		</NavUl>
	</Navbar>
	<slot/>
</div>


