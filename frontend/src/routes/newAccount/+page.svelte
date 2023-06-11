<script>
	import { onMount } from "svelte"
	import { goto } from "$app/navigation"
	import { GetFactions, CreateAccount } from "$lib/wailsjs/go/main/App.js";

	let callsign;
	let chosenFaction;
	let factionList = [];

	onMount(async () => {
		GetFactions().then((result) => (factionList = result));
	});

	function handleSubmit() {
		console.log("NEW ACCOUNT: Callsign:", callsign, "Faction:", chosenFaction);
		CreateAccount(callsign, chosenFaction);
		goto("/", true);
	}
</script>

<main>
	<a href="/">Back</a>
	<h1>Create Account</h1>
	<div class="create-form">
		<h3>Callsign:</h3>
		<input bind:value={callsign}>
		<h3>Faction:</h3>
		<form on:submit|preventDefault={handleSubmit}>
			<select bind:value={chosenFaction}>
				{#each factionList as faction}
				<option value={faction}>
					{faction}
				</option>
				{/each}
			</select>
			<button disabled={!callsign || !chosenFaction} type=submit>
				Submit
			</button>
		</form>
	</div>
</main>

<style>
</style>
