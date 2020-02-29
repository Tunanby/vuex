import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = { // 存放属性状态
    count: 1
}

const mutations = { // 对属性状态进行更改
    add(state, n) {
        state.count += n;
    },
    reduce(state) {
        state.count --;
    }
}

const getters = {
    count(state) {
        return state.count += 10;
    }
}

const actions = { // 对熟悉进行修改异步执行
    addAction(context) { // context 与 store 相同  方法属性对象
        context.commit('add', 5);
        setTimeout(()=>{context.commit('reduce');},3000);
        console.log('我先执行了')
    },
    reduceAction({commit}){
        commit('reduce');
    }
}

const moduleA = { // 模块化可多个。 项目较大时分割 store, 每个模块都有自己的 state, mutations,getters，actions
    state,
    mutations,
    getters,
    actions
}

export default new Vuex.Store({
  modules:{ a: moduleA }
})

