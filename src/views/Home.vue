<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '../store/modules/todo'

const todo = ref('')

const todoStore = useTodoStore()
</script>

<template>
  <div>Home</div>
  <div>
    <input v-model="todo" type="text" />
    <button
      @click="
        () => {
          todoStore.addTodo(todo)
          todo = ''
        }
      "
    >
      add todo
    </button>
  </div>
  <div v-for="({ checked, thing }, index) in todoStore.todo" :key="index">
    <input
      type="checkbox"
      :checked="checked"
      @change="() => todoStore.toggleCheck(index)"
    />
    {{ thing }}
    <button @click="() => todoStore.removeTodo(index)">x</button>
  </div>
</template>

<style lang="scss" scoped></style>
