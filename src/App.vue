<template>
    <AppTitle title="Quick sort animator" />
    <InsertArray />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppTitle from "./components/AppTitle.vue";
import InsertArray from "./components/InsertArray.vue";

const component = defineComponent({
    components: { AppTitle, InsertArray },
});

export default component;
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 2.4rem;
}
</style>
