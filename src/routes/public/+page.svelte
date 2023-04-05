<svelte:head>
	<title>Public</title>
	<meta name="description" content="Restricted page" />
</svelte:head>

<div class="text-column">
	<h1>Public Page</h1>

	<p>
		This page should be available to everyone.
	</p>

	<div>
		<p>
			This part should be different, though:
		</p>
		<h1>
			You are <strong>NOT</strong> logged in.
		</h1>
	</div>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
