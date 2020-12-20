<template>
<div class="index-box">
    <bl-about />
    <bl-type />
    <bl-content/>
</div>
</template>

<script>
import blAbout from "../components/bl-about.vue";
import blType from "../components/bl-type.vue";
import blSearch from '../components/bl-search.vue'
import blContent from '../components/bl-content.vue'
export default {
    components: {
        blAbout,
        blType,
        blSearch,
        blContent
    },
    name: 'index'
}
</script>

<style lang="stylus" scoped>
.index-box {
    background #ffffff;
}
</style>
