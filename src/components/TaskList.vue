<template>
  <div class="container">
    <h1 class="center-align">Задачи</h1>
    <form @submit.prevent="create">
      <div class="input-field">
        <input id="task_input" type="text" class="validate" v-model="description" placeholder="Новая задача">
      </div>
      <button class="btn waves-effect waves-light" type="submit">Добавить задачу</button>
    </form>
    <ul class="collection">
      <li v-for="task in tasks" :key="task.id" class="collection-item">
        <TaskItem :task="task" @update="updateTask" />
      </li>
    </ul>
  </div>
</template>


<script>
import TaskItem from './TaskItem.vue';

export default {
  components: {
    TaskItem
  },
  data() {
    return {
      description: ''
    };
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    }
  },
  methods: {
    create() {
      const task = {
        description: this.description,
        id: Date.now()
      };

      this.$store.dispatch('createTask', task);

      this.description = '';
    },
    updateTask(updatedTask) {
      this.$store.dispatch('updateTask', updatedTask);
    }
  }
};
</script>

<style scoped>
.tasks {
  margin: 1rem 0;
}
</style>
