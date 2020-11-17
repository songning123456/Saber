<template>
    <div class='wel-view'>
        <div class='wv-frame-ud-1'>
            <div class='user-info'>
                <div class='img-content'>
                    <img :src='userInfo.avatar' alt='' width='40'/>
                </div>
                <div class='user-content'>
                    <div class='uc-info-one'>
                        {{$t('wel.info')}}{{userInfo.account}}
                    </div>
                    <div class='uc-info-two'>
                        {{$t('wel.intro')}}
                    </div>
                </div>
            </div>
            <div class='line'></div>
            <div class='role-info'>
                <div class='ri-info-one'>
                    {{ $t('wel.role.title')}}
                </div>
                <div class='ri-info-two'>
                    {{userInfo.userName}}
                </div>
            </div>
            <div class='line'></div>
        </div>
        <div class='wv-frame-ud-2'>
            <div class='wfu-title'>
                常用功能
            </div>
            <div class='wfu-content'>
                <avue-card :option="platforms.option" :data="platforms.data" @row-click="tipBtn">
                    <template slot="menu" slot-scope="scope">
                        <span @click.stop="tipBtn(scope.row)">进入</span>
                    </template>
                </avue-card>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {get} from '@/service/ajaxRequest';

    export default {
        name: 'wel',
        data() {
            return {
                platforms: {
                    option: {
                        addBtn: false,
                        props: {
                            img: 'img',
                            title: 'title',
                            info: 'text',
                        }
                    },
                    data: []
                }
            };
        },
        computed: {
            ...mapGetters(['userInfo']),
        },
        created() {
            this.getCommonRouteFunc();
        },
        methods: {
            tipBtn(row) {
                this.$router.push({path: row.path});
            },
            getCommonRouteFunc() {
                let params = {
                    current: 1,
                    size: 6,
                };
                get('/api/common-demo/route/list', params).then(res => {
                    if (res.status === 200) {
                        this.platforms.data = res.data.data.records;
                    }
                });
            }
        }
    };
</script>

<style lang='scss' scoped>
    .wel-view {
        width: 100%;
        height: 100%;
        font-size: 1rem;

        .wv-frame-ud-1 {
            width: 100%;
            height: 5rem;

            .user-info {
                width: 20rem;
                height: 100%;
                float: left;

                .img-content {
                    width: 30%;
                    height: 100%;
                    float: left;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .user-content {
                    width: 70%;
                    height: 100%;
                    float: left;

                    .uc-info-one {
                        width: 100%;
                        height: 50%;
                        padding: 1rem 1rem 0.5rem 1rem;
                        box-sizing: border-box;
                        text-align: center;
                    }

                    .uc-info-two {
                        width: 100%;
                        height: 50%;
                        padding: 0.5rem 1rem 1rem 1rem;
                        box-sizing: border-box;
                        text-align: center;
                        font-size: .8rem;
                        color: #656565;
                    }
                }
            }

            .line {
                width: 1px;
                height: 50%;
                margin-top: 1.4rem;
                background-color: #CCCCCC;
                float: left;
            }

            .role-info {
                width: 14rem;
                height: 100%;
                float: left;

                .ri-info-one {
                    width: 100%;
                    height: 50%;
                    color: #656565;
                    padding: 1rem 1rem 0.5rem 1rem;
                    box-sizing: border-box;
                    text-align: center;
                    font-size: .8rem;
                }

                .ri-info-two {
                    width: 100%;
                    height: 50%;
                    padding: 0.5rem 1rem 0 1rem;
                    box-sizing: border-box;
                    text-align: center;
                }
            }
        }

        .wv-frame-ud-2 {
            width: 100%;
            height: calc(100% - 5rem);

            .wfu-title {
                height: 3rem;
                line-height: 3rem;
                padding-left: 1rem;
                width: 100%;
                box-sizing: border-box;
                font-weight: bold;
            }

            .wfu-content {
                width: 100%;
                height: calc(100% - 3rem);
            }
        }

        .avue-card {
            /deep/ .el-row {
                margin-left: unset !important;
                margin-right: unset !important;
            }

            /deep/ .el-col {
                margin-bottom: 6px;
            }
        }
    }
</style>

