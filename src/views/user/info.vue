<template>
    <div class='info-view'>
        <el-tabs v-model="activeName" @tab-click="handleClickBtn">
            <el-tab-pane label="个人信息" name="first"></el-tab-pane>
            <el-tab-pane label="修改密码" name="second"></el-tab-pane>
        </el-tabs>
        <div class='iv-content'>
            <personal v-if='activeName === "first"'></personal>
            <password v-if='activeName === "second"'></password>
        </div>
    </div>
</template>

<script>
    import Personal from '@/components/info/Personal';
    import Password from '@/components/info/Password';

    export default {
        name: 'info',
        components: {Password, Personal},
        data() {
            return {
                activeName: 'first'
            };
        },
        methods: {
            handleClickBtn() {
            },
        }
    };
</script>

<style lang='scss' scoped>
    .info-view {

        .el-tabs {
            /deep/ .el-tabs__header {
                padding: 0 1rem;
                margin-bottom: unset;
            }
        }

        .iv-content {
            height: calc(100% - 40px);
        }
    }
</style>


<!--<template>
    <div>
        <basic-container>
            <avue-tabs :option="option"
                       v-model="form"
                       @change="handleChange"
                       @submit="handleSubmit"></avue-tabs>
        </basic-container>
    </div>
</template>

<script>
    import option from '@/const/user/info';
    import {getUserInfo, update, updatePassword} from '@/api/system/user';


    export default {
        data() {
            return {
                type: 'info',
                option: option,
                form: {}
            };
        },
        created() {
            this.handleWitch();
        },
        methods: {
            handleSubmit() {
                if (this.type === 'info') {
                    update(this.form).then(res => {
                        if (res.data.success) {
                            this.$message({
                                type: 'success',
                                message: '修改信息成功!'
                            });
                        } else {
                            this.$message({
                                type: 'error',
                                message: res.data.msg
                            });
                        }
                    });
                } else {
                    updatePassword(this.form.oldPassword, this.form.newPassword, this.form.newPassword1).then(res => {
                        if (res.data.success) {
                            this.$message({
                                type: 'success',
                                message: '修改密码成功!'
                            });
                        } else {
                            this.$message({
                                type: 'error',
                                message: res.data.msg
                            });
                        }
                    });
                }
            },
            handleWitch() {
                if (this.type === 'info') {
                    getUserInfo().then(res => {
                        const user = res.data.data;
                        this.form = {
                            id: user.id,
                            avatar: user.avatar,
                            name: user.name,
                            realName: user.realName,
                            phone: user.phone,
                            email: user.email,
                        };
                    });
                }
            },
            handleChange(item) {
                this.type = item.prop;
                this.handleWitch();
            }
        }
    };
</script>

<style>
</style>-->
