<template>
    <div class="app-container">
        <div class="page-header">
            <h2 class="page_title">贷超产品</h2>
            <el-button type="primary" @click="dialogFormVisible = true" class="insert">添加产品</el-button>
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
                label="广告图"
                show-overflow-tooltip
                >
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
                </el-table-column>

                <el-table-column
                label="广告名称"
                show-overflow-tooltip
                >
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
                label="累积点击"
                show-overflow-tooltip
                >
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
                </el-table-column>

                <el-table-column
                label="状态"
                show-overflow-tooltip
                >
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
                </el-table-column>

                <el-table-column
                label="广告描述"
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
                <div class="left">
                    <el-form :model="form">
                        <el-form-item label="标题" :label-width="formLabelWidth">
                            <el-input v-model="form.url" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="描述" :label-width="formLabelWidth">
                            <el-input type="textarea" v-model="form.des"></el-input>
                        </el-form-item>
                        <el-form-item label="链接" :label-width="formLabelWidth">
                            <el-input v-model="form.url" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="排序" :label-width="formLabelWidth">
                            <el-input v-model="form.url" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="right">
                     <p class="right_title">图片：</p>
                    <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :limit="1"
                    :auto-upload="false"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :on-change="hide"
                    v-if="ishide">
                    <i class="el-icon-plus"></i>
                    </el-upload>
                </div>
            </div>
            
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
            </div>
        </el-dialog>

        <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>

        <el-dialog title="编辑推广页" :visible.sync="editDialogFormVisible">
            <div class="dialog_content">
                <div class="left">
                    <el-form :model="form">
                        <el-form-item label="标题" :label-width="formLabelWidth">
                            <el-input v-model="form.url" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="描述" :label-width="formLabelWidth">
                            <el-input type="textarea" v-model="form.des"></el-input>
                        </el-form-item>
                        <el-form-item label="链接" :label-width="formLabelWidth">
                            <el-input v-model="form.url" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="排序" :label-width="formLabelWidth">
                            <el-input v-model="form.url" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="right">
                     <p class="right_title">图片：</p>
                    <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :limit="1"
                    :auto-upload="false"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :on-change="hide"
                    v-if="ishide">
                    <i class="el-icon-plus"></i>
                    </el-upload>
                </div>
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
            dialogImageUrl: '',
            dialogVisible: false,
            dialogFormVisible: false,
            ishide: true,
            editDialogFormVisible: false,
            formLabelWidth: '60px',
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
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
       handleRemove(file, fileList) {
        console.log(file, fileList);
        setTimeout(() => {
            document.querySelector('.el-upload').style.display = 'inline-block'
        }, 500);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      hide() {
          document.querySelector('.el-upload').style.display = 'none'
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
    .left{
        width: 50%;
        float: left;
    }
    .dialog_content{
        overflow: hidden;
    }
    .right{
        float: left;
        width: 45%;
        text-align: center;
    }
    .right_title{
        margin-top: 0;
        padding-left: 30px;
        font-size: 14px;
        color: #606266;
        font-weight: 700;
        text-align:left;
    }
    .pagination{
        margin-top: 15px;
        text-align: center
    }
</style>
