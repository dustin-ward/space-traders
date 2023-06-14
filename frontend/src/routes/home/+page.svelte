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
	<nav>
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
	nav {
		position: fixed;
		height: 100%;
		width: 250px;
		background-color: var(--st_fg);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	nav p {
		text-align: left;
		padding: 15px;
	}
	nav h1 {
		padding: 10px;
		margin: 0;
		padding-bottom: 5px;
	}
	nav h5 {
		margin: 0;
		color: var(--st_text_secondary);
	}

	.log-out {
		width: 80%;
		margin-top: auto;
		margin-bottom: 5%;
		padding: 5px;
	}
</style>
