<template>
    <div class='wel'>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'wel',
        data() {
            return {
            };
        },
        computed: {
            ...mapGetters(['userInfo']),
        },
        created() {
        },
        methods: {
        }
    };
</script>

<style lang='scss' scoped>
</style>

