<template>
    <AppTitle title="Quick sort animator" />
    <InsertArray @new-array="recievedNewArray($event)" />
    <MyHr />
    <ArraySorter v-if="arrToSort?.length" :arr="arrToSort" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { AppTitle, ArraySorter, InsertArray, MyHr } from "./components";

const component = defineComponent({
    components: { AppTitle, ArraySorter, InsertArray, MyHr },
    setup() {
        const arrToSort = ref<number[]>([]);
        function recievedNewArray(e: number[]) {
            arrToSort.value.length = 0;
            arrToSort.value = e;
        }
        return { arrToSort, recievedNewArray };
    }
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
