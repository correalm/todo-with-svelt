<script>
  import { createTodoStore } from '$lib/api';
  import CreateTodo from '../components/CreateTodo.svelte';

  import TodoList from '../components/TodoList.svelte';

  let todos = createTodoStore([])
</script>

<div>
  <h1 class="is-size-1 has-text-centered has-text-left-mobile">TODO's with svelt</h1>

  <CreateTodo store={todos} />

  <TodoList todosStore={todos} />
</div>

