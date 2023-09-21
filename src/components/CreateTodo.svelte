<script>
  export let store

  let done = false
  let description = ''

  function storeTodo () {
    store.add({ description, done })

    done = false
    description = ''
  }
</script>

<div class="create-todo box">
  <h3 class="subtitle is-3">Create a todo</h3>
  
	<label>
    <span>Description: </span>
  
    <input class="input" type="text" bind:value={description} />
  </label>
  
	<label class="checkbox is-flex is-justify-content-center is-align-items-center">
    <span class="mr-1">Is done?</span>
    <input
      type="checkbox"
      bind:checked={done}
    />
  </label>

  <button class="button is-primary" on:click={storeTodo} aria-label='Remove'>
    Create
  </button>
</div>

<style>
  .create-todo {
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 8px;
    padding: 16px;
    margin-bottom: 16px;
		margin-left: 20px;
  }
</style>
