<template>
  <div class="ui-input-wrapper">
    <input
      class="ui-input"
      :class="size"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "UIInput",
  props: {
    modelValue: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    size: { type: String, default: "md" }, // sm / md / lg
    type: { type: String, default: "text" }, // text / email / password
    disabled: { type: Boolean, default: false },
    error: { type: String, default: "" },
  },
};
</script>

<style scoped>
.ui-input-wrapper {
  display: flex;
  flex-direction: column;
}

.ui-input {
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  width: 200px;
  transition: border-color 0.2s;
}

.ui-input.sm {
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  width: 150px;
}
.ui-input.md {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  width: 200px;
}
.ui-input.lg {
  font-size: 1.2rem;
  padding: 0.75rem 1.5rem;
  width: 250px;
}

.ui-input:disabled {
  background-color: #f0f0f0;
  cursor: not-allowed;
}

.ui-input:focus {
  border-color: #6200ee;
  outline: none;
}

.error-message {
  color: #b00020;
  font-size: 0.8rem;
  margin-top: 0.25rem;
}
</style>
