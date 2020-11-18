<template>
    <div class="basic-container">
        <el-card>
            <slot></slot>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'basicContainer'
    };
</script>

<style lang="scss">
    .basic-container {
        border-radius: 10px;
        box-sizing: border-box;

        .el-card {
            width: 100%;
            height: 100%;

            /deep/ .el-card__body {
                height: 100%;
                box-sizing: border-box;
            }
        }

        &:first-child {
            padding-top: 0;
        }
    }
</style>
