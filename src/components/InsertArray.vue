<template>
    <label :class="{ error: err }">
        Add space seperated numbers to sort:
        <input type="text" name="arrayInsert" v-model.trim="text" />
        <span class="err" v-if="err">{{ err }}</span>
    </label>
    <button @click="submitData">Animate sort</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
    validateFormat,
    validateNo52,
    validateLessThanMaxCells,
} from "../utils/validators";
import { setArrVal } from "../utils/shared";

const component = defineComponent({
    setup() {
        const text = ref("");
        const err = ref("");
        function submitData() {
            let validatorFn: boolean | string | number[];
            err.value = "";
            if (
                typeof (validatorFn = validateFormat(text.value)) === "string"
            ) {
                err.value = validatorFn;
                return;
            }
            if (typeof (validatorFn = validateNo52(text.value)) === "string") {
                err.value = validatorFn;
                return;
            }
            if (
                typeof (validatorFn = validateLessThanMaxCells(text.value)) ===
                "string"
            ) {
                err.value = validatorFn;
                return;
            }
            if (validatorFn instanceof Array) setArrVal(validatorFn);
        }
        return {
            text,
            err,
            submitData,
        };
    },
});

export default component;
</script>

<style lang="scss" scoped>
label {
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    input {
        outline: none;
        border: 2px solid $primary;
        border-radius: 0.4rem;
        padding: 0.2rem 0.3rem;
        margin-left: 0.5rem;
        font-size: 1.1rem;
        line-height: 1.3rem;
        transition: border-color 400ms linear;
        &:focus {
            border-color: $secondary;
        }
    }
    span.err {
        width: 100%;
    }
    &.error {
        color: $errPrimary;
        input {
            border-color: $errPrimary;
            &:focus {
                border-color: $errSecondary;
            }
        }
    }
}
button {
    display: block;
    outline: none;
    border: 2px solid $secondary;
    border-radius: 0.3rem;
    background: $primary;
    color: $mainLight;
    font-size: 1rem;
    padding: 0.7rem 1rem;
    margin: 0.3rem auto;
    text-shadow: 0 0 3px $mainDark;
    transition: all 400ms linear;
    &:active,
    &:hover,
    &:focus {
        border-color: $primary;
        background: $secondary;
    }
}
</style>