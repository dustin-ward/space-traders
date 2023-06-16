<script>
	import { onMount } from 'svelte';
	import { TOKEN, NAV_ACTIVE } from '../../../store.js';
	import { GetContracts } from '$lib/wailsjs/go/app/App.js';
	import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
	
	let contracts = []

	onMount(async () => {
		GetContracts($TOKEN).then(res => {
			console.log(res);
			contracts = res;
		});
	});
</script>

<h1>CONTRACTS</h1>
<Table>
	<TableHead>
		<TableHeadCell>FACTION</TableHeadCell>
		<TableHeadCell>TYPE</TableHeadCell>
		<TableHeadCell>PAYMENT</TableHeadCell>
		<TableHeadCell>EXPIRATION</TableHeadCell>
		<TableHeadCell>ACCEPTED</TableHeadCell>
	</TableHead>
	<TableBody>
		{#each contracts as contract}
			<TableBodyRow>
				<TableBodyCell>{contract.faction}</TableBodyCell>
				<TableBodyCell>{contract.type}</TableBodyCell>
				<TableBodyCell>{contract.terms.payment.onAccepted+contract.terms.payment.onFulfilled}</TableBodyCell>
				<TableBodyCell>{contract.expiration}</TableBodyCell>
				<TableBodyCell>{contract.accepted}</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
