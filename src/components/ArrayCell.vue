<template>
    <div class="cell">{{ item }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const component = defineComponent({
    props: {
        item: {
            required: true,
            type: Number,
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
}
</style>
