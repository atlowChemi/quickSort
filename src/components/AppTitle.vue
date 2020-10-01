<template>
    <div class="hello">
        <h1>{{ title }}</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const component = defineComponent({
    props: {
        title: { required: true, type: String },
    },
    // setup(props) {}
});
export default component;
</script>

<style lang="scss" scoped>
h1 {
    color: $primary;
}
</style>