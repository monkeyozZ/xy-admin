<template>
    <div class="app-container">
        <div class="page-header">
            <h2 class="page_title">推广页面管理</h2>
            <el-button type="primary" @click="dialogFormVisible = true" class="insert">添加推广页面</el-button>
        </div>
        <div class="content">
            <el-table
                :data="tableData"
                :border="true"
                style="width: 100%">
                <el-table-column
                label="序号"
                width="180">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
                </el-table-column>

                <el-table-column
                label="链接地址"
                show-overflow-tooltip
                >
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
                </el-table-column>

                <el-table-column
                label="页面描述"
                show-overflow-tooltip
                >
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
                </el-table-column>

                <el-table-column label="操作" align="center" width="180">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="primary"
                    circle
                    icon="el-icon-edit"
                    @click="handleEdit(scope.$index, scope.row)"></el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    circle
                    icon="el-icon-delete"
                    @click="handleDelete(scope.$index, scope.row)"></el-button>
                </template>
                </el-table-column>
            </el-table>
            <el-pagination
            class="pagination"
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
            </el-pagination>
        </div> 

        <el-dialog title="添加推广页" :visible.sync="dialogFormVisible">
            <div class="dialog_content">
                <el-form :model="form">
                <el-form-item label="链接地址" :label-width="formLabelWidth">
                    <el-input v-model="form.url" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="页面描述" :label-width="formLabelWidth">
                    <el-input type="textarea" v-model="form.des"></el-input>
                </el-form-item>
                
            </el-form>
            </div>
            
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
            </div>
        </el-dialog>

        <el-dialog title="编辑推广页" :visible.sync="editDialogFormVisible">
            <div class="dialog_content">
                <el-form :model="form">
                    <el-form-item label="链接地址" :label-width="formLabelWidth">
                        <el-input v-model="form.url" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="页面描述" :label-width="formLabelWidth">
                        <el-input type="textarea" v-model="form.des"></el-input>
                    </el-form-item>
                    
                </el-form>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                url: '',
                des: ''
            },
            dialogFormVisible: false,
            editDialogFormVisible: false,
            formLabelWidth: '120px',
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
                }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
                }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
                }],
                currentPage: 1
        }
    },
    methods: {
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleEdit(index, row) {
          this.editDialogFormVisible = true
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    }
}
</script>

<style lang="scss" scoped>
    .page_title{
        line-height: 40px;
    }
    .insert{
        float: right;
    }
    .content{
        padding: 15px;
        border: 1px solid #ebebeb;
        border-radius: 3px;
        transition: .2s;
    }
    .dialog_content{
        width: 70%;
    }
    .pagination{
        margin-top: 15px;
        text-align: center
    }
</style>
