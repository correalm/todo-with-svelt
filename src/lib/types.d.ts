import type { Invalidator, Subscriber, Unsubscriber } from "svelte/store"

export type Task = {
  id: number
  done: boolean
  description: string
}

export type Todos = Task[]

export type Modal = {
  showModal: boolean
  dialog: HTMLDialogElement
}

export type TodoStore = {
  subscribe: (
    this: void,
    run: Subscriber<Task[]>,
    invalidate?: Invalidator<Task[]> | undefined
  ) => Unsubscriber

  add: ({ description: string, done: boolean }) => void
  update: (todo: Task) => void
  remove: (todo: Task) => void
  mark: (todo: Task, done: boolean) => void
  set: (todos: Task[]) => void
}
