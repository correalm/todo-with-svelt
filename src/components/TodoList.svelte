<script>
  import { slide } from 'svelte/transition';

  import TodoForm from './TodoForm.svelte';
  import Modal from './Modal.svelte';

  /** @type{ import('$lib/types').TodoStore } */
  export let todosStore

  let showModal = false

  /** @type{ undefined | HTMLDialogElement } */
  let dialog
  
  $: task = { description: '', done: false, id: 0 }
  
  /**
    * @param t { import('$lib/types').Task }
  */
  function handleRemove (t) {
    todosStore.remove(t)
  }

  function toggleModal () {
    showModal = !showModal
  }
  
  /**
    * @param t { import('$lib/types').Task }
  */
  function toggleModalAndSetTask (t) {
    task = t
    toggleModal()
  }
  
  /**
    * @param t { import('$lib/types').Task }
  */
  function update (t) {
    dialog?.close()
    todosStore.update(t)
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
	         
            <div>
              <button class="button is-info" on:click={() => toggleModalAndSetTask(task)} aria-label='Remove'>
                Update
              </button>
             
              <button class="button is-danger" on:click={() => handleRemove(task)} aria-label='Remove'>
                Delete
              </button>
            </div>  
          </div>
        </li>
      {/each}
    </ul>

  {:else}
    <h2 class="has-text-white has-text-weight-bold" transition:slide >No Tasks for now...</h2>
  {/if}
</div>

<Modal bind:dialog bind:showModal>
  <h2 slot="header">Update Task</h2>
  
  <TodoForm
    title='Update Task'
    buttonTitle='Update'
    onPress={update}
    id={task?.id}
    description={task?.description}
    done={task?.done}
  />
</Modal>

<style>
  .margin {
    margin-bottom: 8px;
  }
</style>
