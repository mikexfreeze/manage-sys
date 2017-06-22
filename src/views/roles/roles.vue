<template>
    <div>

        <breadcrumb></breadcrumb>
        <div class="filter-container">
            <!--<el-button type="primary" icon="plus" @click="onAdd" v-authority="'ROLE_ADMIN'">新增</el-button>-->
            <!--<el-button type="primary" icon="edit" @click="onEdit" v-if="hasAuthority('ROLE_ADMIN')">编辑</el-button>-->
            <!--<el-button type="danger" icon="delete" @click="onDel" v-if="hasAuthority('ROLE_ADMIN')">删除</el-button>-->
        </div>

        <dataTable :tableData="formData" v-on:selectionChange="handleSelectionChange"/>

        <pagination :total="totalPage" v-on:pageChange="handleCurrentChange"></pagination>

    </div>
</template>

<script src="./roles.js">

</script>
<!--<style scoped src="./roles.scss"></style>-->
