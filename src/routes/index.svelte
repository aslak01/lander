<script context="module">
	export function preload() {
		return this.fetch(`prosjekter.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
	import { onMount } from 'svelte';
	let Video;

	onMount(async () => {
		const module = await import('../components/Video.svelte');
		Video = module.default;
	});
</script>
	
<svelte:head>
	<title>élektrisité</title>
</svelte:head>

<article>
	<section>
<h1>Hei</h1>
<p>Jeg heter Aslak Bakkeland og er spesielt interessert i interaksjonsdesign og datavisualisering.</p>
<p>Jeg begynte å skrive HTML og CSS tidlig i Windows XP-æraen, for så å fikle med PHP like før Vista kom. Jeg tok en pause for å studere sosialvitenskap. Mot slutten av studiene våknet interessen for digital utvikling igjen, da vi gjennomførte sosialviternes alibi-kurs i statistikk. Det var et særdeles praktisk orientert kurs i R, og noe av det jeg likte best med hele studietiden.</p>
<p>Nedenfor finnes noen av mine nylige prosjekter.</p>
	</section>
</article>

{#each posts as post}
<article>
	<section>
	<h2>
		{#if post.url}
			<a href="{post.url}">
				{post.title}
			</a>
		{:else}
			{post.title}
		{/if}
	</h2>
	<h3>{post.yr}</h3>
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
	font-size: 2.5rem;
	}
	article {
		margin: 10vh 0;
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
}
article {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10vh 0;
}
</style>
