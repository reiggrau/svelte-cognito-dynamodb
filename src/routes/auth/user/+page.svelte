<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <h1>This is the user page</h1>
    <h2>This page is accessible only to users</h2>
	{#if $page.data.session}
	<pre><span>User:</span> {JSON.stringify($page.data.session.user)}</pre>
	{/if}
</section>

<style lang="postcss">
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

	pre {
    	@apply bg-gray-900 text-white p-3 my-3 rounded shadow overflow-x-auto;
	}
	pre span {
    	@apply text-orange-400;
	}
</style>
