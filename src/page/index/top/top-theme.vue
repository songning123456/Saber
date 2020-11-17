<template>
    <div class='top-theme'>
        <el-dialog title="主题" :visible.sync="box" width="25%" top='30vh'>
            <el-radio-group v-model="text" class="list">
                <el-radio v-for='(item, index) in list' :key='index' :label="item.value">{{item.name}}</el-radio>
            </el-radio-group>
        </el-dialog>
        <span>
            <i class="icon-zhuti" @click="open"></i>
        </span>
    </div>
</template>

<script>
    import {setTheme} from '@/util/util';
    import {mapGetters} from 'vuex';

    export default {
        data() {
            return {
                box: false,
                text: '',
                list: [
                    {
                        name: '默认主题',
                        value: 'default'
                    },
                    {
                        name: '白色主题',
                        value: 'theme-white'
                    }
                ]
            };
        },
        watch: {
            text: function (val) {
                this.$store.commit('SET_THEME_NAME', val);
                setTheme(val);
            }
        },
        computed: {
            ...mapGetters(['themeName'])
        },
        mounted() {
            this.text = this.themeName;
            if (!this.text) {
                this.text = '';
            }
        },
        methods: {
            open() {
                this.box = true;
            }
        }
    };
</script>

<style lang="scss" scoped>

    .top-theme {

        .list {
            width: 100%;
        }
    }
</style>

