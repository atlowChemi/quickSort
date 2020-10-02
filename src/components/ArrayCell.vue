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
    border: 2px solid $primary;
    border-radius: 0.4rem;
    align-items: center;
    justify-content: center;
}
</style>
