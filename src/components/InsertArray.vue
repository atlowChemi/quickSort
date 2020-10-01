<template>
    <label :class="{error: validity === false}">
        Add space seperated numbers to sort:
        <input type="text" name="arrayInsert" v-model.trim="text" />
    </label>
    <button @click="submitData">Animate sort</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

const component = defineComponent({
    emits:{ 'new-array': null },
    setup(_, { emit }) {
        const text = ref('');
        const validity = ref<boolean>();
        function validateText() {
            return /^(\d+\s{0,1})+$/.test(text.value);
        }
        function submitData() {
            const isValid = validateText();
            validity.value = isValid;
            if(isValid) emit("new-array", text.value.split(" "));
        }
        return {
            text,
            validity,
            submitData,
        }
    }
});

export default component;
</script>

<style lang="scss" scoped>
label {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
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
    color: white;
    font-size: 1rem;
    padding: 0.7rem 1rem;
    margin: 0.3rem auto;
    text-shadow: 0 0 3px black;
    transition: all 400ms linear;
    &:active, &:hover, &:focus {
        border-color: $primary;
        background: $secondary;
    }
}
</style>