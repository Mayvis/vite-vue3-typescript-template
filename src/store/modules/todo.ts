import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({ todo: [{ checked: false, thing: 'Clean house' }] }),
  actions: {
    toggleCheck(index: number) {
      this.todo[index].checked = !this.todo[index].checked
    },
    addTodo(thing: string) {
      this.todo.push({ checked: false, thing })
    },
    removeTodo(index: number) {
      this.todo.splice(index, 1)
    }
  }
})
