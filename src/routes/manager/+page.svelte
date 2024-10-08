<script>
    export let data;
    let users = data.users;
    let name = ""
</script>

<section>
    <form method="POST" action="?/add">
        <input type="text" name="name">
        <button>Add</button>
    </form>

    <form method="POST" action="?/remove">
        <select name="name" id="name">
            {#each users as {name, count} }
                <option value={name}>{name}</option>
            {/each}
        </select>
        <button>Remove</button>
    </form>
</section>