<script>
	// import Counter from './Counter_old.svelte';
	import Counter from "./Counter.svelte";
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
		<Counter name="Koen"/>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	/* h1 {
		width: 100%;
	} */

	/* .container{
		display: flex;
		flex-direction: row;
	}

	.name{
		padding-right: 50%;
	} */
</style>
