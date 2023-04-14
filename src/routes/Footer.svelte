<script lang="ts">
    console.log("Hello! I am the Footer component!");

    let count: number = 0;

    function countUp(): void {
        console.log("Count Up!");
        count++;
    }
</script>

<footer>
	<p>This (and the Header) is part of the default layout <strong>~/src/routes/+layout.svelte</strong></p>
    <button on:click={countUp}>Click me!</button>
    <p>Count: {count}</p>
</footer>

<style>
    footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

    button {
        cursor: pointer;
    }
</style>