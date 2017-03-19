<template>
<div class="container">
    <div slot="header" class="toolbar">
        <q-toolbar-title :padding="1">
            <button v-go-back="'/'">
          <i>arrow_back</i>
        </button> Home
        </q-toolbar-title>
        <button><i>help</i></button>
    </div>
    <div class="layout-padding ">
        <div class="flex wrap gutter">
            <div class="auto">
                <cardTotal title="Total Posts" background-color="bg-teal-8" :total="totalPosts">
                </cardTotal>
            </div>
            <div class="auto">
                <cardTotal title="Total comments" background-color="bg-teal-8" :total="totalComments">
                </cardTotal>
            </div>
            <div class="auto">
                <cardTotal title="Static total" background-color="bg-teal-8" :total="50004">
                </cardTotal>
            </div>
        </div>
        <div class="flex wrap gutter">
            <div class="width-1of2">

            </div>
            <div class="auto">
            </div>
        </div>
        <div class="flex wrap gutter">
            <div class="width-4of5 sm-auto">
            </div>
        </div>
    </div>
</div>
</template>
<script type="text/javascript">
import cardTotal from './cardTotal.vue'
export default {
    name: 'Home',
    mounted() {

    },
    data() {
        return {
            totalPosts: 0,
            totalComments: 0,
            totalTodos: 0
        }
    },
    computed: {
        dataForGraph() {
            return {
                posts: this.totalPosts,
                todos: this.totalTodos,
                comments: this.totalComments
            }
        }
    },
    components: {
        cardTotal
    },
    methods: {

    }
}
</script>
<style>

</style>
