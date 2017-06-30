<template>
  <div>
    <!--赋予角色-->
    <el-dialog title="赋予角色" :visible.sync="RoledialogTableVisible">
      <el-table :data="RoletableData" border stripe @selection-change="handleSelectionChange"
                style="width: 100%" :dialogRow="RoledialogRow" ref="table">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="description" label="描述" width="180"></el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="RoledialogTableVisible = false">取消</el-button>
        <el-button type="primary">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default{
      data(){},
      created(){
        this.getUsers(this.RoledialogRow.id)
          .then((response) => {
            this.setCheckedKeys(response.data.authorities)
          })
      },
      methods: {
        handleSelectionChange(selection){
          this.selectionData = selection
        },
        setCheckedKeys(author) {
          this.$refs.table.setCheckedKeys(author);
        },
//          按用户名查询用户信息
        getUsers(login){
          return GetUsers(login)
        }
      }
  }
</script>
