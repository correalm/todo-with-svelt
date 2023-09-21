<script>
  import { slide } from 'svelte/transition';

  export let todosStore

  function handleRemove (task) {
    todosStore.remove(task)
  }
</script>

<div class="p-5">
  {#if $todosStore?.length}
    <ul transition:slide >
      {#each $todosStore as task (task.id)}
        <li transition:slide class='card margin'>
          <div class='card-content is-flex is-justify-content-space-between is-align-items-center'>
            <div>
              <label class="is-flex is-justify-content-start is-align-items-center">
                <input
							    class="m-1"
                  type="checkbox"
                  checked={task.done}
                />
                <span class="m-1">{task.description || 'Task without description...'}</span>
              </label>
						</div>
						        
            <button class="button is-danger" on:click={() => handleRemove(task)} aria-label='Remove'>
              Delete
            </button>
          </div>
        </li>
      {/each}
    </ul>

  {:else}
    <h2 transition:slide >No Tasks for now...</h2>
  {/if}

</div>

<style>
  .margin {
    margin-bottom: 8px;
  }
</style>
