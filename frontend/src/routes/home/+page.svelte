<script>
	import { CALLSIGN, FACTION, TOKEN } from '../../store.js';
</script>

<main>
	<nav>
		<h1>{$CALLSIGN}</h1>
		<h2>{$FACTION}</h2>
		<p>{$FACTION.description}</p>
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
