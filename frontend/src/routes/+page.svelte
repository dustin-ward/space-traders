<script>
	import { onMount } from "svelte"
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

<main>
	<img alt="Wails logo" id="logo" src={logo} />
	<h1>Login Page</h1>
	{#if accounts != null && accounts.length > 0}
		<div class="accounts-list">
			{#each accounts as account}
				<div class="account" on:click={login(account)}>
					<h3>{account.callsign}</h3>
					<h5>{account.faction}</h5>
				</div>
			{/each}
		</div>
		<a href="/newAccount" class="create-button red-button">Create New Account</a>
	{:else}
		<p>No Accounts available...</p>
		<br>
		<a href="/newAccount" class="create-button red-button">Create one!</a>
	{/if}
	<button class="reset-button" on:click={reset}>RESET</button>
</main>

<style>
	#logo {
		display: block;
		width: 10%;
		height: 10%;
		margin: auto;
		padding: 5% 0 0;
		background-position: center;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-origin: content-box;
	}

	.accounts-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 10px 30px;
		margin: 10%;
	}

	.account {
		background-color: var(--st_fg);
		border-radius: 10px;
		width: 10%;
		padding: 10px 30px;
		margin: 0;
		text-align: center;
	}

	.account:hover {
		box-shadow: rgba(0,0,0,0.3) 0px 0px 3px 3px;
		text-shadow: 0 0 10px var(--st_text);
		cursor: pointer;
	}

	.reset-button {
		display: block;
		position: absolute;
		bottom: 0;
	}

	.create-button {
		padding: 15px;
	}
</style>
