<script>
    // import { signIn, signOut } from "@auth/sveltekit/client"
    import { page } from "$app/stores"
</script>

<div>
    <!-- {#if $page.data.session}
    <h2>{$page.data.session.user?.email}</h2>
    <h2 on:click={() => signOut()}>Sign out</h2>
    {:else}
    <h2 on:click={() => signIn()}>Sign in</h2>
    {/if} -->
    <h2>Sign in</h2>
</div>

<style>
    div {
        display: flex;
        padding-right: 1rem;
        gap: 1rem;
    }

    h2 {
        display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
        cursor: pointer;
    }

    h2:hover {
        color: var(--color-theme-1);
    }
</style>