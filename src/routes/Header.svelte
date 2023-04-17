<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import LoginButton from './LoginButton.svelte';
</script>

<header>
	<div class="cornerLeft">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
		<a href="https://github.com/reiggrau/svelte-cognito-dynamodb" target="_blank">
			<img src={github} alt="GitHub" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/auth/user') ? 'page' : undefined}>
				<a href="/auth/user">User</a>
			</li>
			{#if $page.data.session && $page.data.session.user?.email === "guillem.reig@on-promise.cloud"}
			<li aria-current={$page.url.pathname.startsWith('/auth/admin') ? 'page' : undefined}>
				<a href="/auth/admin">Admin</a>
			</li>
			{/if}
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="cornerRight">
		<LoginButton />
	</div>
</header>

<style>
	header {
		display: inline-grid;
		grid-template-columns: 1fr min-content 1fr;
	}

	.cornerLeft {
		width: 3em;
		height: 3em;
		display: flex;
		justify-self: start;
	}

	.cornerLeft a {
		width: 100%;
		height: 100%;
	}

	.cornerLeft img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	.cornerRight {
		justify-self: end;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		gap: 3em;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
