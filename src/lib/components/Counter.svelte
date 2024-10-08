<script>
	import {fly} from 'svelte/transition'
	export let name = "";
	export let start = 0;

	let count = start


	let y = -5
	function updateDB(){
		const data = new URLSearchParams();
		data.append("name", name)
		data.append("count", count)
		fetch("/?/update", {
			method: "POST",
			body: data
		})
	}

	function decrement(n){
		count -= n
		y=5
		updateDB()
	}

	function increment(n){
		count += n
		y=-5
		updateDB()
	}
</script>

<section>

	<div class="counter">
		<button on:click={() => (decrement(1))} aria-label="Decrease the counter by one">
			-
		</button>

		<div class="number">
			{#key count}
			<strong in:fly={{y: y}}>{count}</strong>
			{/key}
		</div>
		<button on:click={() => (increment(1))} aria-label="Decrease the counter by one">
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
		border: 2px dotted black;
		background-color: transparent;
		touch-action: manipulation;
		font-size: 2rem;
	}

	.counter button:hover{
		background-color: lightgray;
	}
	.counter .number{
		font-size: 2em;
		padding-left: .5em;
		padding-right: .5em;
		width: 3ch;
		text-align: center;
	}
</style>