<script>
	import { onMount } from "svelte"
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

<main>
	<nav class="topbar">
		<h1>SpaceTraders</h1>
		<a href="#" class="account-info">A</a>
	</nav>
	<nav class="sidebar">
		<h1>{callsign}</h1>
		<h5>
			{#if faction}
				{faction.name}
			{:else}
				loading...
			{/if}
		</h5>
		<p>
			{#if faction}
				{faction.description}
			{:else}
				loading...
			{/if}
		</p>
		<a href="/" class="log-out red-button">Log Out</a>
	</nav>
	<div>
	</div>
</main>

<style>
	.topbar {
		position: relative;
		/* top: 0; */
		z-index: 1;
		display: flex;
		flex-direction: row;
		align-content: center;
		justify-content: center;
		width: 100%;
		height: 10vh;
		background-color: rgb(50,50,50);
		margin: 0;
	}

	.sidebar {
		/* padding-top: 8%; */
		/* padding-bottom: 5%; */
		position: fixed;
		height: 90vh;
		width: 250px;
		background-color: var(--st_fg);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.sidebar p {
		text-align: left;
		padding: 15px;
	}
	.sidebar h1 {
		padding: 10px;
		padding-bottom: 5px;
	}
	.sidebar h5 {
		margin: 0;
		color: var(--st_text_secondary);
	}

	.log-out {
		width: 80%;
		margin-top: auto;
		margin-bottom: 5%;
		padding: 5px;
	}

	.account-info {
		margin-left: auto;
	}
</style>
