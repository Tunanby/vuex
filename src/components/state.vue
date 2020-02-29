<template>
    <div class="state">
        <h1> {{ msg }} </h1>
        <hr/>
        <h3> {{ $store.state.a.count }} -  {{ count }} </h3>
        <p>
            <button @click="$store.commit('add', 10)"> + </button>
            <button @click="reduce"> - </button>
        </p>
        <p>
            <button @click="addAction"> + </button>
            <button @click="reduceAction"> - </button>
        </p>
    </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
    name: "state",
    data() {
        return {
            msg: 'hello vuex'
        }
    },
    methods:{
        ...mapMutations(['reduce']),
        ...mapActions(['addAction', 'reduceAction'])
    },
    computed: {
        ...mapState(['count']),
        // count() {
        //     return this.$store.state.count
        // }
        // ...mapGetters(['count'])
        // count () {
        //     return this.$store.getters.count
        // }
    },
    store
}
</script>