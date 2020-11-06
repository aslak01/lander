<script>
	import Lyn from './Lyn.svelte';
	export let segment;
</script>

<style>
	nav {
		/* border-bottom: 1px solid rgba(255,62,0,0.1); */
		padding: 0 1rem;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	.selected {
		color: hsla(39, 100%, 50%, 1);
		font-weight: bold;
	}
	/* [aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	} */

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		font-size: 2rem;
		font-weight: bold;
	}
	a:hover {
		color: #1679B9;
	}
</style>

<nav>
	<ul>
		<li>
			<a aria-current="{segment === undefined ? 'page' : undefined}" class:selected="{ segment === undefined }" href=".">
			<Lyn/>
			</a>
		</li>
		<li>
			<a aria-current="{segment === 'kontakt' ? 'page' : undefined}" class:selected="{ segment === 'kontakt' }" href="kontakt">kontakt</a>
		</li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<!-- <li>
			<a rel=prefetch aria-current="{segment === 'prosjekter' ? 'page' : undefined}" class:selected="{ segment === 'prosjekter' }" href="prosjekter">prosjekter</a>
		</li> -->
	</ul>
</nav>
