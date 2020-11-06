<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	p, a, h1, h2, h3, h4 {
		color: hsla(220, 22%, 13%, 1);
	}
	section.background {
		background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='20' patternTransform='scale(3) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(220, 22%, 13%, 1)'/><g transform='translate(0,0)' stroke-width='1.5' stroke='hsla(39, 100%, 50%, 1)' fill='none'><path d='M-4.798 13.573C-3.149 12.533-1.446 11.306 0 10c2.812-2.758 6.18-4.974 10-5 4.183.336 7.193 2.456 10 5 2.86 2.687 6.216 4.952 10 5 4.185-.315 7.35-2.48 10-5 1.452-1.386 3.107-3.085 4.793-4.176' /></g></pattern></defs><rect width='100%' height='100%' fill='url(%23a)'/></svg>")
	}
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

<section class="background">
	<main>
		<Nav {segment}/>
		<slot></slot>
	</main>
</section>