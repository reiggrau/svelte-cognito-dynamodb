<script lang="ts">

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <h1>This is the admin page</h1>
    <h2>This page is accessible only to admin users</h2>
	<h2>It is protected locally by <strong>./+page.server.ts</strong></h2>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
