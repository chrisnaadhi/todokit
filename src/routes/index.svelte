<script>
    import ToDoItem from '$lib/ToDoItem.svelte';

    const title = "Todo";
</script>

<svelte:head>
    <title>{title} | New</title>
</svelte:head>

<h1>{title} List</h1>

<form action="" method="">
    <input type="text" name="todo" aria-label="Add a Todo Item" placeholder="+ tap to add a todo">
</form>

<ToDoItem />
<ToDoItem />
<ToDoItem />