<script>
	// import Counter from './Counter_old.svelte';
	import Counter from "$lib/components/Counter.svelte";
	export let data;
	let users = data.users
</script>

<svelte:head>
	<title>BierBoa</title>
	<meta name="description" content="BierBoa" />
</svelte:head>

<section>
	{#each users as {name, count}}
		<div class="name">
			<h1>{name}</h1>
		</div>
		<Counter name={name} start={count}/>

	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: auto auto auto auto;
		
	}
</style>
