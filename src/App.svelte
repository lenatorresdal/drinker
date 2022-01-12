<script>
  import RecipeTile from "./components/RecipeTile.svelte";
  import recipes from "./recipes.js";
  import FlexContainer from "./FlexContainer.svelte";
</script>

<main>
  <h1>Drinkoppskrifter</h1>
  <FlexContainer />
  {#each recipes as r}
    <RecipeTile title={r.title} ingredients={r.ingredients} />
  {/each}
</main>

<style type="text/scss">
  @import "./styles.scss";
</style>
