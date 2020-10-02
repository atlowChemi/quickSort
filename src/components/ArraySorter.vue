<template>
    <div class="cellParent">
        <ArrayCell v-for="(item, ind) of arr" :key="ind" :item="item" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ArrayCell } from ".";

const component = defineComponent({
    props: {
        arr: {
            type: Array as () => number[],
            default: [],
            reqired: true,
        },
    },
    components: { ArrayCell },
});

export default component;
</script>

<style lang="scss" scoped>
.cellParent {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    .cell {
        &:first-of-type {
            border-radius: 0.6rem 0 0 0.6rem;
            border-left-width: 0.2rem;
        }
        &:last-of-type {
            border-radius: 0 0.6rem 0.6rem 0;
            border-right-width: 0.2rem;
        }
    }
}
</style>