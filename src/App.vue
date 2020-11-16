<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {};
        },
        mounted() {
            this.resize();
        },
        methods: {
            resize() {
                document.documentElement.style.fontSize = document.documentElement.offsetWidth / (1920 / 20) + 'px';
            }
        }
    };
</script>
<style lang="scss">
    #app {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
