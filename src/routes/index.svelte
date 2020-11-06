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
		<p>Jeg heter Aslak Bakkeland og er spesielt interessert i interaksjonsdesign og datavisualisering.</p>
		<p>Jeg begynte å fikle med HTML og CSS tidlig i Windows XP-æraen, og noe senere også PHP. Jeg tok en pause fra denslags noen år og studerte sosialvitenskap. Mot slutten av studiene våknet interessen for digital utvikling igjen, da vi gjennomførte sosialviternes alibikurs i statistikk. Det var et praktisk orientert kurs i R, og et fagene av jeg likte best gjennom hele studietiden. Siden den gang har jeg oppdatert meg på JavaScript-fronten, og gjort meg kjent med Vue- og Svelte-rammeverkene.</p>
		<p>Nedenfor finnes noen av mine nylige prosjekter.</p>
		<p>Jeg kan nås på aslakrb@gmail.com.</p>
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
