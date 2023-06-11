<script>
	import { CALLSIGN, FACTION, TOKEN } from '../../store.js';
</script>

<main>
	<div>
		<nav>
			<h1>{$CALLSIGN}</h1>
			<h2>{$FACTION}</h2>
			<a href="/">Log Out</a>
		</nav>
	</div>
</main>

<style>
	nav {
		height: 100%;
		width: 250px;
	}
</style>
