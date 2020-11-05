<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: #FFFCF7;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
		min-height: 100vh;
	}
</style>

<!-- <Nav {segment}/> -->

<main>
	<slot></slot>
</main>