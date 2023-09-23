<script>
  import { createTodoStore } from '$lib/api';
  import TodoForm from '../components/TodoForm.svelte';

  import TodoList from '../components/TodoList.svelte';

  let store = createTodoStore([])

  function create (task) {
    store.add(task)
  }
</script>

<div>
  <h1 class="is-size-1 has-text-white has-text-centered has-text-left-mobile">TODO's with svelt</h1>

  <TodoForm title='Create a Task' onPress={create}/>

  <TodoList todosStore={store} />
</div>

