<script>
	import { page } from '$app/stores';
	import logo from "$lib/images/bierboa.png"
</script>

<header>
	<div class="corner">
	</div>

	<nav>

		<ul>
			<li><img src={logo} alt="BierBoa logo"></li>
			<li>
				<a href="/"><h1>BierBoa</h1></a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<a href="/manager">MANAGER</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		/* width: 3em; */
		height: 3em;
		margin: 2em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		text-decoration: none;
	}
	.corner h1 {
		/* display: flex; */
		align-items: center;
		justify-content: center;
		padding-left: 100%;
		width: 100%;
		height: 100%;
	}

	img {
		width: 10em;
		height: 10em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		/* --background: rgba(255, 255, 255, 0.7); */
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
		/* height: 3em; */
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
		flex-direction: column;
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
	h1 {
		margin: 0;
		padding: 0;
	}

	/* a:hover {
		color: var(--color-theme-1);
	} */
</style>
