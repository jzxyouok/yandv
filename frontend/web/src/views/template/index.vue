<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../../assets/images/model1.png" class="image">
          <div style="padding: 14px;">
            <span style="line-height: 36px;">xxx名称</span>
            <el-button style="float: right;" type="primary">修改</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../../assets/images/model2.png" class="image">
          <div style="padding: 14px;">
            <span style="line-height: 36px;">xxx名称</span>
            <el-button style="float: right;" type="primary">修改</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../../assets/images/model3.png" class="image">
          <div style="padding: 14px;">
            <span style="line-height: 36px;">xxx名称</span>
            <el-button style="float: right;" type="primary">修改</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../../assets/images/model4.png" class="image">
          <div style="padding: 14px;">
            <span style="line-height: 36px;">xxxx名称</span>
            <el-button style="float: right;" type="primary">修改</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
