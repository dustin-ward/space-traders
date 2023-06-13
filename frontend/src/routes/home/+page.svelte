<script>
	import { onMount } from "svelte"
	import { CALLSIGN, FACTION, TOKEN } from '../../store.js';
	import { GetFaction } from '$lib/wailsjs/go/app/App.js';
	
	let faction;

	onMount(async () => {
		GetFaction($FACTION).then(result => {
			faction = result;
			console.log(faction);
		});
	});

</script>

<main>
	<nav>
		<h1>{$CALLSIGN}</h1>
		<h2>
			{#if faction}
				{faction.name}
			{:else}
				loading...
			{/if}
		</h2>
		<p>
			{#if faction}
				{faction.description}
			{:else}
				loading...
			{/if}
		</p>
		<a href="/">Log Out</a>
	</nav>
	<div>
	</div>
</main>

<style>
	nav {
		padding: 10px 10px;
		margin: 0;
		height: 100vh;
		width: 250px;
		background-color: rgba(0,0,0,0.3);
		box-sizing: border-box;
	}
	nav p {
		text-align: left;
	}
	h1 {
		margin: 0 0 10px 0;
	}
	h2 {
		margin: 0 0 10px 0;
	}
	
</style>
