<template>
    <h3>Click on array to sort it.</h3>
    <MyHr />
    <ArrayPointer type="Location" />
    <div class="cellParent" @click="quickSort">
        <ArrayCell
            v-for="(item, ind) of sortData.arr"
            :key="ind"
            :item="item"
            :is-selected="
                sortData.workArea.start != null &&
                sortData.workArea.end != null &&
                ind >= sortData.workArea.start &&
                ind <= sortData.workArea.end
            "
            :is-pivot="sortData.refs.pivotRef === ind"
            :is-index="
                sortData.refs.rightRef === ind || sortData.refs.leftRef === ind
            "
        />
    </div>
    <ArrayPointer type="Pivot" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ArrayCell, ArrayPointer } from ".";
import { quickSort } from "../utils/quickSort";
import { sortData } from "../utils/shared";

const component = defineComponent({
    components: { ArrayCell, ArrayPointer },
    setup() {
        return { sortData, quickSort };
    },
});

export default component;
</script>

<style lang="scss" scoped>
h3 {
    text-align: center;
    font-size: 1.4rem;
}
.cellParent {
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    .cell {
        &:first-of-type {
            border-bottom-left-radius: 0.6rem;
            border-top-left-radius: 0.6rem;
            border-left-width: 0.2rem;
        }
        &:last-of-type {
            border-top-right-radius: 0.6rem;
            border-bottom-right-radius: 0.6rem;
            border-right-width: 0.2rem;
        }
    }
}
</style>