<template>
<div class="container">
    <div slot="header" class="toolbar">
        <q-toolbar-title :padding="1">
            <button v-go-back="'/'">
          <i>arrow_back</i>
        </button> Question Type
        </q-toolbar-title>
        <button><i>help</i></button>
    </div>
    <div class="layout-padding ">
        <q-data-table :data="questiontypes" :config="config" :columns="columns">
            <template slot="col-source" scope="cell">
                      <span v-if="cell.data === 'Audit'" class="label text-white bg-primary">
                        Audit
                        <q-tooltip>Some tooltip</q-tooltip>
                      </span>
                      <span v-else class="label text-white bg-negative">{{cell.data}}</span>
            </template>

        <template slot="selection" scope="props">
              <button class="primary clear" @click="changeMessage(props)">
                          <i>edit</i>
                        </button>
              <button class="primary clear" @click="deleteRow(props)">
                          <i>delete</i>
                        </button>
        </template>
      </q-data-table>
    </div>
</div>
</template>
<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
import {
    Platform,
    Utils,
    Toast
} from 'quasar-framework'
export default {
    name: "questiontype",
    data() {
        return {
            config: {
                title: 'Question Types',
                refresh: true,
                columnPicker: true,
                leftStickyColumns: 1,
                rightStickyColumns: 2,
                bodyStyle: {
                    maxHeight: Platform.is.mobile ? '50vh' : '500px'
                },
                rowHeight: '50px',
                responsive: true,
                pagination: {
                    rowsPerPage: 15,
                    options: [5, 10, 15, 30, 50, 500]
                },
                selection: 'single',
                messages: {
                    noData: '<i>warning</i> No data available to show.',
                    noDataAfterFiltering: '<i>warning</i> No results. Please refine your search terms.'
                }
            },
            columns: [{
                    label: 'Id',
                    field: 'QuestionTypeId',
                    width: '20%',
                    filter: true,
                    sort: true
                },
                {
                    label: 'Name',
                    field: 'QuestionTypeName',
                    width: '40%',
                    filter: true,
                    sort: true
                },
                {
                    label: 'Created Date',
                    field: 'CreatedDate',
                    width: '40%',
                    filter: true,
                    sort: 'date',
                    format(value) {
                        return new Date(value).toLocaleString()
                    }
                }
            ],

            pagination: true,
            rowHeight: 50,
            bodyHeightProp: 'maxHeight',
            bodyHeight: 500
        }
    },
    watch: {
        pagination(value) {
            if (!value) {
                this.oldPagination = Utils.clone(this.config.pagination)
                this.config.pagination = false
                return
            }

            this.config.pagination = this.oldPagination
        },
        rowHeight(value) {
            this.config.rowHeight = value + 'px'
        },
        bodyHeight(value) {
            let style = {}
            if (this.bodyHeightProp !== 'auto') {
                style[this.bodyHeightProp] = value + 'px'
            }
            this.config.bodyStyle = style
        },
        bodyHeightProp(value) {
            let style = {}
            if (value !== 'auto') {
                style[value] = this.bodyHeight + 'px'
            }
            this.config.bodyStyle = style
        }
    },
    mounted: function mounted() {
        this.getAllQuestionTypes();
    },
    computed: mapGetters([
        'questiontypes'
    ]),
    methods: mapActions([
        'getAllQuestionTypes'
    ])
}
</script>
<style>

</style>
