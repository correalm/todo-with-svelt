<script>
    import { fade } from 'svelte/transition';

  /**
   * @type {import('$lib/types').Task}
   */
  export let task
  export let store

  function handleRemove () {
    store.remove(task)
  }
</script>

<li class='card'>
  <div class='card-content'>
    <label>
      <input
        type='checkbox'
        checked={task.done}
      />
  
      <span>{task.description}</span>
  
      <button on:click={handleRemove} aria-label='Remove'>
        Delete
      </button>
    </label>
  </div>
</li>

<style>
  .card {
    background-color: aqua;
  }
</style>
