<script>
	import RecipeTile from './components/RecipeTile.svelte';
	import recipes from "./recipes.js";
	export let name;
</script>

<main>
	<h1> Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{#each recipes as r}
		<RecipeTile title={r.title} ingredients={r.ingredients} />
	{/each}
</main>

<style type="text/scss">
@import "./styles.scss";

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: $blue;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>