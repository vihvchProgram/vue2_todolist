<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">刪除</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'MyItem',
  components: {},
  // 聲明接收todo對象
  props: {
    todo: Object
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    // 勾選or取消勾選
    handleCheck (id) {
      // 通知App組件 將對應的todo對象的done值取反
      this.$bus.$emit('checkTodo', id)
    },
    // 刪除
    handleDelete (id) {
      if (confirm('確定要刪除嗎? ')) {
        // this.$bus.$emit('deleteTodo', id)
        pubsub.publish('deleteTodo', id)
      }
    }
  }
}
</script>

<style scoped lang="less">
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
  button {
    display: block;
  }
}
</style>
