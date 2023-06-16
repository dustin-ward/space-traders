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

<div class=" overflow-hidden">
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
