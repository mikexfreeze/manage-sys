<template>
	<div class="c-input">
		<el-input v-model="input" placeholder="请输入内容"></el-input>	
	</div>		
</template>

<style>
	.c-input{
		width:20%;
	}
</style>
<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>