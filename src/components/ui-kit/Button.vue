<template>
  <button
    :class="['ui-button', type, size]"
    :disabled="disabled"
    :style="{
      backgroundColor: bgColor,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
    }"
    @click="$emit('click')"
  >
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "UIButton",
  props: {
    type: { type: String, default: "primary" }, // primary / secondary / danger
    size: { type: String, default: "medium" }, // small / medium / large
    disabled: { type: Boolean, default: false },
    bgColor: { type: String, default: "" }, // allows inline override
  },
};
</script>

<style scoped>
.ui-button {
  border: none;
  border-radius: 5px;
  font-weight: bold;
  padding: 0.5rem 1rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

/* Sizes */
.ui-button.small {
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
}
.ui-button.medium {
  font-size: 1rem;
  padding: 0.5rem 1rem;
}
.ui-button.large {
  font-size: 1.2rem;
  padding: 0.75rem 1.5rem;
}

/* Types */
.ui-button.primary {
  background-color: #6200ee;
  color: white;
}
.ui-button.secondary {
  background-color: #03dac6;
  color: #111;
}
.ui-button.danger {
  background-color: #b00020;
  color: white;
}

/* Hover */
.ui-button:not(:disabled):hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
</style>
