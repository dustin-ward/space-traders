<script>
	import { onMount } from "svelte"
	import { DarkMode, Card, Avatar, Heading, P, Span, GradientButton } from "flowbite-svelte";
	import logo from "$lib/assets/images/logo-universal.png";
	import { GetAccounts, ResetAllAccounts } from "$lib/wailsjs/go/app/App.js";
	import { CALLSIGN, FACTION, TOKEN } from '../store.js';
    import { goto } from "$app/navigation";

	let accounts = [];

	onMount(async () => {
		GetAccounts().then((result) => (accounts = result));
	});

	function login(account) {
		CALLSIGN.update(c => c = account.callsign);
		FACTION.update(f => f = account.faction);
		TOKEN.update(t => t = account.token);
		goto("/home", true);
	}

	function reset() {
		ResetAllAccounts()
		accounts = [];
	}
</script>

<DarkMode initialTheme='dark' style="visibility:hidden"/>
<div class="container mx-auto flex flex-col items-center">
	<img alt="Wails logo" id="logo" src={logo} class="my-4"/>
	<Heading tag="h1" class="mb-4" customSize="text-3xl font-extrabold  md:text-5xl lg:text-6xl"><Span gradient>Space Traders</Span></Heading>
	<Heading tag="h2" customSize="text-4xl font-extrabold mb-14">Login</Heading>
	{#if accounts != null && accounts.length > 0}
		<div class="flex flex-row gap-4 mb-32">
			{#each accounts as account}
				<Card href="#" on:click={login(account)} class="w-52" color="primary">
					<div class="flex flex-col items-center">
						<Avatar size="lg" class="mb-8"></Avatar>
						<h1 class="mb-1 text-xl font-medium text-white">{account.callsign}</h1>
						<h5 class="text-sm text-gray-400">{account.faction}</h5>
					</div>
				</Card>
			{/each}
		</div>
		<GradientButton href="/newAccount" outline color="greenToBlue" class="w-72">Create New Account</GradientButton>
	{:else}
		<p>No Accounts available...</p>
		<GradientButton href="/newAccount" color="greenToBlue" class="w-72">Create One!</GradientButton>
	{/if}
	<button class="reset-button" style="visibility:hidden" on:click={reset}>RESET</button>
</div>

<style>
	#logo {
		display: block;
		width: 10%;
		height: 10%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-origin: content-box;
	}

	.reset-button {
		display: block;
		position: absolute;
		bottom: 0;
	}
</style>
