<template>
    <AppTitle title="Quick sort animator" />
    <InsertArray />
    <MyHr />
    <ArraySorter v-if="sortData.length" />
</template>

<script lang="ts">
import { defineComponent, } from "vue";
import { AppTitle, ArraySorter, InsertArray, MyHr } from "./components";
import { sortData } from "./utils/shared";

const component = defineComponent({
    components: { AppTitle, ArraySorter, InsertArray, MyHr },
    setup() {
        return { sortData };
    },
});

export default component;
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: $mainDark;
    margin-top: 2.4rem;
}
</style>
