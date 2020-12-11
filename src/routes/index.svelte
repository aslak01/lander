<script context="module">
	export function preload() {
		return this.fetch(`prosjekter.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import { onMount } from 'svelte';
	import GitHubIcon from '../components/GitHub.svelte'
	export let posts;
	let Video;

	onMount(async () => {
		const module = await import('../components/Video.svelte');
		Video = module.default;
	});
</script>
	
<svelte:head>
	<title>élektrisité</title>
</svelte:head>

<article class="intro">
	<section>
		<h1>Hei</h1>
		<p>Jeg heter Aslak og er interessert i interaksjonsdesign og datavisualisering.</p>
	</section>
</article>

{#each posts as post}
<article>
	<section>
	<h2>
		{#if post.url}
			<a href="{post.url}">
				{@html post.title}
			</a>
		{:else}
			{post.title}
		{/if}
	</h2>
	<h3>
		{post.yr}
		{#if post.github}
			<a href="{post.github}"><GitHubIcon/></a>
		{/if}
	</h3>
	{@html post.html}
	{#if post.png}
		<svelte:component this={Video} png={post.png} mp4={post.mp4} />
	{/if}
	</section>
</article>
{/each}


<style>
	h1 {
	font-weight: bold;
	font-size: 2rem;
	}
	.intro {
		margin-top: 5rem;
	}
	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 2.5rem;
		}
	}
	
a {
	text-decoration: none;
}
a:hover {
	color: hsla(39, 100%, 50%, 1);
}
h2 {
	font-weight: bold;
	font-size: 2.5rem;
}
section {
	position: relative;
	width: 90%;
}
article {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	
}
article:not(:first-of-type) {
	margin: 10vh 0;
}
</style>
