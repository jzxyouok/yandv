<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="4">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="title" style="line-height: 44px;">{{ name }}</span>
          </div>
          <draggable :list="list1" class="dragArea" :options="{group:'article'}">
            <div v-for="element in list1">
              <el-row class="item">
                <el-col :span="8"><img class="cell-img" src="http://dcloud.io/hellomui/images/muwu.jpg"></el-col>
                <el-col :span="16"><h3 class="list-title">{{element.author }}</h3>
                  <p class="list-content">{{element.title}}</p></el-col>
              </el-row>
            </div>
          </draggable>
          <a class="draginner">由蜻蜓推提供技术支持</a>
        </el-card>
      </el-col>

      <el-col :span="10" :offset="4">
        <el-card class="box-card">
          <div class="item">
            <span style="line-height: 44px;">名称：{{ name }}</span>
            <el-button type="text" @click="open">修改</el-button>
          </div>
          <div>
            <div class="item">
              <span style="line-height: 44px;">文章列表</span>
              <el-popover
                ref="popover5"
                placement="right"
                width=""
                v-model="visible2">
                <h3>添加文章</h3>
                <el-form ref="form" :model="form" label-width="80px">
                  <el-form-item label="文章题目">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                  <el-form-item label="文章简介">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                  <el-form-item label="文章链接">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                  <el-form-item label="文章图片">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" size="mini" @click="onSubmit">添加</el-button>
                    <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
                  </el-form-item>
                </el-form>
              </el-popover>

              <el-button v-popover:popover5>添加</el-button>
            </div>
            <draggable :list="filterList2" class="dragArea" :options="{group:'article'}">
              <div v-for="element in list2">
                <el-row class="item">
                  <el-col :span="8"><img class="cell-img" src="http://dcloud.io/hellomui/images/muwu.jpg"></el-col>
                  <el-col :span="16"><h3 class="list-title">{{element.author }}</h3>
                    <p class="list-content">{{element.title}}</p>
                  </el-col>
                </el-row>
              </div>
            </draggable>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import {getList} from '@/api/article'

  export default {
    data() {
      return {
        type: 1,
        name: '蜻蜓推页面模板',
        content: [],
        editable: true,
        isDragging: false,
        delayedDragging: false,
        visible2: false,
        list1: [],
        list2: [],
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
    components: {
      draggable
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      open() {
        this.$prompt('请输入名称', '名称修改', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputValue: this.name
        }).then(({value}) => {
          this.name = value;
          this.$message({
            type: 'success',
            message: '名称是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消修改'
          });
        });
      },
      addAct() {
        this.$prompt('请输入名称', '文章添加', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputValue: '',
          inputValue1: ''
        }).then(({value}) => {
          this.name = value;
          this.$message({
            type: 'success',
            message: '名称是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消修改'
          });
        });
      },
      isNotInList1(v) {
        return this.list1.every(k => v.id !== k.id)
      },
      isNotInList2(v) {
        return this.list2.every(k => v.id !== k.id)
      },
      deleteEle(ele) {
        for (const item of this.list1) {
          if (item.id === ele.id) {
            const index = this.list1.indexOf(item);
            this.list1.splice(index, 1)
            break
          }
        }
        if (this.isNotInList2(ele)) {
          this.list2.unshift(ele)
        }
      },
      pushEle(ele) {
        this.list1.push(ele)
      },
      fetchData() {
        this.listLoading = true
        getList(this.listQuery).then(response => {
          this.list1 = response.data.splice(0, 5)
          this.list2 = response.data
          console.log(this.list1, this.list2)
        })
      }
    },
    created() {
      this.fetchData()
    },
    computed: {
      filterList2() {
        return this.list2.filter(v => {
          if (this.isNotInList1(v)) {
            return v
          }
          return false;
        })
      }
    }
  }
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 9px 0;
    border-bottom: 1px solid #d1dbe5;
  }

  .cell-img {
    line-height: 3em;
    height: 3em;
  }

  .el-card__header {
    background: transparent url(../../assets/images/banner_control.png) no-repeat 0 0;
    text-align: center;
    padding: 18px 20px 0 20px;
  }

  .title {
    color: #fff;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 316px;
    height: 480px;
    overflow: scroll;
  }

  .list-title {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    font-size: 0.8em;
  }

  .list-content {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 0.6em;
    margin: 6px 0 0 0;
  }

</style>
