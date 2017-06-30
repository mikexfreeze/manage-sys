<template>
    <div>
        <breadcrumb></breadcrumb>
        <div class="filter-container">
          <el-button type="primary" icon="plus" @click="onAdd" v-authority="'ROLE_ADMIN'">新增</el-button>
        </div>

        <div>
            <!--数据表格-->
            <el-table :data="tableData" border stripe style="width: 100%">
                <!--<el-table-column align="center" label="ID" width="65">-->
                <!--<template scope="scope">-->
                <!--<span>{{scope.row.id}}</span>-->
                <!--</template>-->
                <!--</el-table-column>-->
                <el-table-column prop="login" label="用户名">
                    <template scope="scope">
                        <span class="link-type">{{scope.row.login}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="email" label="邮箱">
                </el-table-column>
                <!--<el-table-column prop="createdBy" label="创建人"></el-table-column>-->
                <!--<el-table-column prop="createdDate" label="创建时间">-->
                    <!--<template scope="scope">-->
                        <!--<span class="link-type">{{scope.row.createdDate | parseTime('{y}-{m}-{d} {h}:{i}')}}</span>-->
                    <!--</template>-->
                <!--</el-table-column>-->
                <!--<el-table-column prop="lastModifiedBy" label="上次修改人"></el-table-column>-->
                <el-table-column prop="type" label="操作" align="center" width="200">
                    <template scope="scope">
                      <!--<el-button type="primary" size="small" @click="assignRole(scope)"-->
                                 <!--v-if="hasAuthority('ROLE_ADMIN')">-->
                        <!--赋予角色-->
                      <!--</el-button>-->
                      <el-button type="danger" size="small" @click="delUsers(scope)"
                                 v-if="hasAuthority('ROLE_ADMIN')">
                        删除
                      </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!--翻页-->
            <pagination :total="totalPage" v-on:pageChange="handleCurrentChange1"></pagination>
            <!--dialog编辑区-->
            <!--新增用户-->
             <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
            <el-form class="small-space" :model="temp" label-position="left" label-width="70px"
                     :rules="userRules" style='width: 400px; margin-left:50px;'>
              <el-form-item label="用户名" prop="login">
                <el-input v-model="temp.login" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="temp.password" placeholder="请输入密码（不少于6位）"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="temp.email" placeholder="请输入邮箱"></el-input>
              </el-form-item>
              <el-form-item label="创建人" prop="createdBy">
              <el-input v-model="temp.createdBy" placeholder="请输入"></el-input>
              </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button v-if="dialogStatus=='create'" type="primary" @click="create">确 定</el-button>
              <!--<el-button v-else type="primary" @click="update">确 定</el-button>-->
            </div>
          </el-dialog>

        </div>
    </div>
</template>
<script>
    import {GetUserList,GetUsers} from 'api/getUserList'
    import moment from 'moment'
    import {DeleteUsers,CreateUser} from 'api/getUserList'
    import permission from 'store/permission'
    import {parseTime} from 'utils'
    import {isWscnEmail} from 'utils/validate';
    import {GetRolesList} from 'api/roles'

    //每页显示的记录数
    let pageParam = {
        page: 1,
        size: 10
    }
    let selectionData = []

    export default{
        created(){
            this.showInfo(pageParam);
            this.getList(pageParam);
            this.getUsers(this.RoledialogRow.id)
              .then((response) => {
                this.setCheckedKeys(response.data.authorities)
              })
        },
        data(){
            const validateEmail = (rule, value, callback) => {
            if (!isWscnEmail(value)) {
              callback(new Error('请输入正确的合法邮箱'));
            } else {
              callback();
            }
          };
            const validatePass = (rule, value, callback) => {
            if (value.length < 6) {
              callback(new Error('密码不能少于6位'));
            } else {
              callback();
            }
          };
            return {
                //初始化
                tableData: [],
                RoletableData: [],
                RoledialogRow:{},
                totalPage: 10,
                textMap: {
                    create: '新增'
                },
                dialogFormVisible: false,
                RoledialogTableVisible:false,
                dialogStatus: 'create',
                temp: {
                    login:'',
                    password: '',
                    email: '',
                    createdBy: ''
                },
                userRules: {
                  login: [
                    {required: true, message: '请输入用户名',trigger: 'blur'}
                  ],
                  email: [
                    {required: true, message: '请输入邮箱',trigger: 'blur'},
                    {validator: validateEmail, trigger: 'blur'}
                  ],
                  password: [
                    {required: true, message: '请输入密码',trigger: 'blur'},
                    {validator: validatePass, trigger: 'blur'}
                  ]
                }
            }
        },
        components: {
            //tableData
        },
        methods: {
            hasAuthority: permission.hasAuthority,
            create(){
              console.log(this.temp);
              CreateUser(this.temp)
                .then(() => {
                  this.dialogFormVisible = false;
                  this.dialogStatus = 'create';
                  this.showInfo(pageParam);
                });
            },
//            显示用户信息
            showInfo(pageParam){
                GetUserList(pageParam)
                        .then((response) => {
                            //console.log(response)
                            this.totalPage = Math.ceil(response.headers['x-total-count'] / pageParam.size * 10)
                            this.tableData = response.data
                        })
            },
            // 删除用户提示及删除功能
            delUsers(scope){
                this.ConfirmBox().then(()=>{
                    DeleteUsers(scope.row.login)
                        .then(() => {
                            this.tableData.splice(scope.$index, 1)
                            this.$message({
                                type: 'success',
                                message: '删除成功'
                            });
                        });
                },()=>{
                    this.$message({
                        type:'info',
                        message: '已取消删除'
                    });
                })

            },
            //翻页功能
            handleCurrentChange1(page){
                pageParam.page = page;
                this.showInfo(pageParam)
            },
            handleSelectionChange(selection){
              this.selectionData = selection
            },
            onAdd(){
              this.dialogFormVisible = true;
              this.dialogStatus = 'create';
            },
            assignRole(){
               this.RoledialogTableVisible = true;
            },
//          点击赋予角色按钮显示角色
            getList(pageParam) {
              GetRolesList(pageParam).then((response)=>{
//                this.totalPage = Math.ceil(response.headers['x-total-count']/pageParam.size * 10)
                this.RoletableData = response.data
              })
            },

        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
