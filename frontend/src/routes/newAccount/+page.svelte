<script>
	import { onMount } from "svelte";
	import { Card, Heading, Span, Input, Label, Select, GradientButton, Button } from "flowbite-svelte";
	import { ArrowLeft } from "svelte-heros-v2";
	import { GetFactions, CreateAccount } from "$lib/wailsjs/go/app/App.js";
	import { goto } from "$app/navigation";

	let callsign;
	let chosenFaction;
	let factionList = [{value: "NULL", name: "loading..."}];

	onMount(async () => {
		GetFactions().then((result) => {
			let temp = [];
			result.forEach(element => {
				temp.push({value: element.symbol, name: element.name});
			});
			factionList = temp;
		});
	});

	function handleSubmit() {
		console.log("NEW ACCOUNT: Callsign:", callsign, "Faction:", chosenFaction);
		CreateAccount(callsign, chosenFaction);
		// TODO: Make sure home page refreshes account list on return
		goto("/", true);
	}
</script>

<Button href="/" outline class="p-2 absolute top-5 left-8"><ArrowLeft size="24"/></Button>
<div class="flex h-screen">
	<Card class="flex flex-col items-center m-auto" color="primary">
		<Heading tag="h1" class="text-4xl font-extrabold mb-12"><Span gradient>Create Account</Span></Heading>
		<div class="create-form container mx-auto flex flex-col">
			<form on:submit|preventDefault={handleSubmit}>
				<Label for="callsign" class="text-2xl text-left mb-4">Callsign:</Label>
				<Input type="text" id="callsign" placeholder="MY_CALLSIGN" class="mb-8" required bind:value={callsign}/>
				<Label for="faction" class="text-2xl text-left mb-4">Faction:</Label>
				<Select id="faction" items={factionList} class="mb-8" bind:value={chosenFaction}/>
				<GradientButton type="submit" outline color="greenToBlue">Submit</GradientButton>
			</form>
		</div>
	</Card>
</div>
