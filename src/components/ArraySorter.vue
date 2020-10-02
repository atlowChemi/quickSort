<template>
    <ArrayCell v-for="(item, ind) of arr" :key="ind" :item="item" />
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