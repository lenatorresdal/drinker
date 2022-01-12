<script>
  export let title = "";
  export let ingredients = [];
</script>

<div class="tile">
  <div class="recipeHeader">{title}</div>
  <ul>
    {#each ingredients as i}
      <li>{i}</li>
    {/each}
  </ul>
</div>

<style type="text/scss">
  @import "../styles.scss";

  ul {
    text-align: left;
    list-style: none;
    padding: 0;
  }

  .tile {
    max-width: 20rem;
    justify-content: center;
    align-items: center;
    background-color: $light-green;
    margin: 0.5rem;
    padding: 1.5rem;
  }

  .recipeHeader {
    font-size: 1.5rem;
    font-weight: 200;
  }
</style>
