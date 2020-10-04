<template>
    <h1>{{ title }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const component = defineComponent({
    props: {
        title: { required: true, type: String },
    },
});
export default component;
</script>

<style lang="scss" scoped>
h1 {
    color: $primary;
    text-align: center;
}
</style>