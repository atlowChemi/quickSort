<template>
    <div class="pointers">
        <div
            class="pointers__cell"
            v-for="(_, ind) of sortData.length"
            :key="ind"
        >
            <Icons
                :type="type"
                :class="{
                    arrow: type === 'Location',
                    show:
                        type === 'Pivot'
                            ? sortData.refs.pivotRef === ind
                            : sortData.refs.rightRef === ind ||
                              sortData.refs.leftRef === ind,
                }"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { sortData } from "../utils/shared";

const component = defineComponent({
    props: {
        type: { required: true, type: String as () => "Pivot" | "Location" },
    },
    setup() {
        return { sortData };
    },
});

export default component;
</script>

<style lang="scss" scoped>
.pointers {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    &__cell {
        position: relative;
        width: 3.5rem;
        height: 3.5rem;
        svg {
            position: absolute;
            opacity: 0;
            transition: opacity 450ms linear;
            &.arrow {
                transform: rotate(180deg) translateY(-10px);
            }
            &.show {
                opacity: 1;
            }
        }
    }
}
</style>