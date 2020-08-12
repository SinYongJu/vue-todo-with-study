// todo utils
function findTodoIndexByid(todoList, id) {
  return todoList.findIndex(todo => todo.id === id);
}
function createTodoItem(todoList, desc) {
  const todo = {};
  const prev = todoList[todoList.length - 1];
  const prevId = prev ? prev.id : 0;
  const id = prevId + 1;
  todo.id = id;
  todo.desc = desc;
  todo.isModify = false;
  return todo;
}

const state = {
  todoList: [
    // init;
    //{
    //   id: 0,
    //   desc: "Todo todo todo ...",
    //   isModify: false
    //},
  ]
};
const getters = {
  todoList: state => state.todoList
};
const mutations = {
  create(state, todo) {
    state.todoList = state.todoList.concat(todo);
  },
  update(state, { index, isModify }) {
    state.todoList[index].isModify = isModify;
  },
  modify(state, { index, desc }) {
    state.todoList[index].desc = desc;
  },
  clear(state) {
    state.todoList = [];
  },
  delete(state, index) {
    const { todoList } = state;
    const prev = todoList.slice(0, index);
    const next = todoList.slice(index + 1, todoList.length);
    state.todoList = [...prev, ...next];
  }
};
const actions = {
  /**
   * create Todo
   * @param {String} desc
   */
  create({ state, commit }, desc) {
    const todo = createTodoItem(state.todoList, desc);
    commit("create", todo);
  },
  /**
   * update Todo
   * @param { Number } id
   */

  update({ state, commit }, id) {
    let index = findTodoIndexByid(state.todoList, id);
    commit("update", { index, isModify: true });
  },
  /**
   * delete Todo
   * @param { Number } id
   */
  deleteTodo({ commit }, id) {
    let index = findTodoIndexByid(state.todoList, id);
    commit("delete", index);
  },
  /**
   * clear Todo List
   *
   */
  clearTodo({ commit }) {
    commit("clear");
  },
  /**
   * Modify Todo List
   *
   * id : todo id
   * desc : todo desc
   *  @param {Object} todoItem
   *
   */
  modify({ state, commit }, { id, desc }) {
    let index = findTodoIndexByid(state.todoList, id);
    commit("update", { index, isModify: false });
    commit("modify", { index, desc });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
