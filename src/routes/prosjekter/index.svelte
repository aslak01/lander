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
		const module = await import('../../components/Video.svelte');
		Video = module.default;
	});
</script>


<svelte:head>
	<title>prosjekter</title>
</svelte:head>

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
	