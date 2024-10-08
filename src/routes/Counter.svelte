<script>
	import { spring } from 'svelte/motion';
	export let name = "";
	let count = 0;

	const displayed_count = spring();
	$: displayed_count.set(count);
</script>

<section>
	<div class="name">
		<h1>{name}</h1>
	</div>

	<div class="counter">
		<button on:click={() => (count -= 1)} aria-label="Decrease the counter by one">
			-
		</button>
		<div class="number">
			<strong>{count}</strong>
		</div>
		<button on:click={() => (count += 1)} aria-label="Decrease the counter by one">
			+
		</button>
	</div>
</section>


<style>

	section {
		display: flex;
		flex-direction: row;
		gap: 3em;
		align-items: center;
		font-size: 1.5em;
	}

	section .name{
	}

	.counter{
		display: flex;
		flex-direction: row;
		gap: 4%;
	}
	.counter button {
		width: 2em;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		background-color: transparent;
		touch-action: manipulation;
		font-size: 2rem;
	}

	.counter button:hover{
		background-color: lightgray;
	}
	.counter .number{
		font-size: 2em;
	}
</style>