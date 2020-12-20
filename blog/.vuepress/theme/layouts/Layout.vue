<template>
<div class="all-box">
    <bl-nav/>
    <bl-content/>
</div>
</template>
<script>
import blContent from "../components/bl-content.vue";
import blNav from "../components/bl-nav.vue";
export default {
    components: {
        blNav,
        blContent,
    }
};
</script>