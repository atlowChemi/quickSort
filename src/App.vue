<template>
    <AppTitle title="Quick sort animator" />
    <InsertArray @new-array="recievedNewArray($event)" />
    <MyHr />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AppTitle, InsertArray, MyHr } from "./components";

const component = defineComponent({
    components: { AppTitle, InsertArray, MyHr },
    setup() {
        function recievedNewArray(e: number[]) {
            console.log(e);
        }
        return { recievedNewArray };
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
