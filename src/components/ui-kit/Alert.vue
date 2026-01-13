<template>
  <div :class="['ui-alert', severity]" role="alert">
    <slot />
  </div>
</template>

<script>
export default {
  name: "UIAlert",
  props: {
    severity: {
      type: String,
      default: "info",
      validator: (val) => ["success", "info", "warning", "error"].includes(val),
    },
  },
};
</script>

<style scoped>
.ui-alert {
  padding: 1rem 1.25rem;
  border-radius: 6px;
  color: #fff;
  margin-bottom: 1rem;
  font-weight: 500;
  border-left: 5px solid transparent;
}

/* Severity colors */
.ui-alert.success {
  background-color: #4caf50;
  border-left-color: #388e3c;
}

.ui-alert.info {
  background-color: #03a9f4;
  border-left-color: #0288d1;
}

.ui-alert.warning {
  background-color: #ff9800;
  border-left-color: #f57c00;
}

.ui-alert.error {
  background-color: #f44336;
  border-left-color: #d32f2f;
}
</style>
