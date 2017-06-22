/**
 * Created by Micheal Xiao on 2017/6/19.
 */
import {GetRolesList} from 'api/roles'
import dataTable from './components/rolesTable.vue'

export default {
    data(){
        return{
            formData:[],
            selectionData:[],
            totalPage:10,
            pageParam:{
                page:1,
                size:15
            }
        }
    },
    methods:{
        handleSelectionChange(selection){
            this.selectionData = selection
        },
        getList(pageParam) {
            GetRolesList(pageParam).then((response)=>{
                this.totalPage = Math.ceil(response.headers['x-total-count']/pageParam.size * 10)
                this.formData = response.data
            })
        },
        handleCurrentChange(page){
            this.pageParam.page = page;
            this.getList(this.pageParam)
        },

    },
    created(){
        this.getList(this.pageParam)
    },
    components: {
        dataTable,
    },
}
