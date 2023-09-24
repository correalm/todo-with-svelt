<script>
  export let title = 'Create a Task'
  export let buttonTitle = 'Save'
  export let description = ''

  /** @type { boolean } */
  export let done = false

  /** @type { number | undefined } */
  export let id

  /** @type { function | undefined } */
  export let onPress

  $: task = { description, id, done }

  function reset () {
    id = undefined
    done = false
    description = ''
  }

  function handleClick () {
    onPress?.(task)
    reset()
  }
</script>

<div class="container box">
  <h3 class="subtitle is-3">{title}</h3>
  
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

  <button class="button is-primary" disabled={!onPress} on:click={handleClick} aria-label='Remove'>
    {buttonTitle}
  </button>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 8px;
    padding: 16px;
    margin-bottom: 16px;
		margin-left: 20px;
  }
</style>
