<template>
  <div class="card">
    <div class="card-content">
      <span class="card-title"><b>{{ task.description }}</b></span>
      <div v-if="!editing">
        <button class="btn waves-effect waves-light red" @click="remove">
          Удалить
        </button>
        <button class="btn waves-effect waves-light" @click="editing = !editing">
          Редактировать
        </button>
      </div>
      <div v-else>
        <div class="input-field">
          <input id="edit_task_input" type="text" class="validate" v-model="localTask.description">
        </div>
        <button class="btn waves-effect waves-light" @click="update">
          Сохранить
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    task: Object,
  },
  data() {
    return {
      editing: false,
      localTask: { ...this.task }
    };
  },
  watch: {
    task: {
      handler(newTask) {
        this.localTask = { ...newTask };
      },
      deep: true
    }
  },
  methods: {
    remove() {
      this.$store.dispatch('deleteTask', this.task.id);
    },
    update() {
      this.$store.dispatch('updateTask', this.localTask);
      this.editing = false;
    }
  }
};
</script>

<style scoped>
.task {
  margin: 1rem 0;
}
</style>
