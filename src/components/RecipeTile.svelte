<script>
    export let title = "";
    export let ingredients = [];
</script>

<div class="tile">
    <h1>{title}</h1>
    <ul>
        {#each ingredients as i}
            <li>{i}</li>
        {/each}
    </ul>
</div>

<style>
    ul {
        text-align: left;
        list-style: none;
    }

    .tile {
        width: 500px;
        justify-content: center;
        align-items: center;
        background-color: bisque;
    }
</style>