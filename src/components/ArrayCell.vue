<template>
    <div class="cell" :class="{ selected: isSelected }">{{ item }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const component = defineComponent({
    props: {
        item: {
            required: true,
            type: Number,
        },
        isPivot: {
            type: Boolean,
            default: false,
        },
        isIndex: {
            type: Boolean,
            default: false,
        },
        isSelected: {
            type: Boolean,
            default: false,
        },
    },
});

export default component;
</script>

<style lang="scss" scoped>
.cell {
    display: flex;
    width: 3.5rem;
    height: 3.5rem;
    background: $mainDark;
    color: $mainLight;
    border: 1px solid $secondary;
    border-top-width: 0.2rem;
    border-bottom-width: 0.2rem;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 450ms linear;
    &.selected {
        top: -1rem;
        background-color: $primary;
    }
}
</style>
