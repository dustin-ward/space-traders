<script>
	import { onMount } from "svelte"
	import logo from "$lib/assets/images/logo-universal.png";
	import { GetAccounts, ResetAllAccounts } from "$lib/wailsjs/go/main/App.js";
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
					<p>{account.token}</p>
				</div>
			{/each}
		</div>

		<a href="/newAccount">Create New Account</a>
	{:else}
		<p>No Accounts available...</p>
		<a href="/newAccount">Create one!</a>
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
	}

	.account {
		background-color: rgba(0,0,0,0.3);
		border-radius: 10px;
		width: 10%;
	}

	.account:hover {
		box-shadow: rgba(0,0,0,0.3) 0px 0px 3px 3px;
		cursor: pointer;
	}

	.reset-button {
		display: block;
	}
</style>
