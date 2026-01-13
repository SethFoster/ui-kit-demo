<template>
  <div class="collapsible-panel">
    <button class="panel-header" @click="isOpen = !isOpen">
      <span>{{ title }}</span>
      <span class="arrow">{{ isOpen ? "▲" : "▼" }}</span>
    </button>
    <div v-show="isOpen" class="panel-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "CollapsiblePanel",
  props: {
    title: {
      type: String,
      required: true,
    },
    defaultOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const isOpen = ref(props.defaultOpen);
    return { isOpen };
  },
};
</script>

<style scoped>
.collapsible-panel {
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-bottom: 1rem;
  background: #fafafa;
}

.panel-header {
  width: 100%;
  background: #eee;
  border: none;
  padding: 0.75rem 1rem;
  font-weight: 600;
  text-align: left;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 6px 6px 0 0;
  transition: background 0.2s;
}
.panel-header:hover {
  background: #e0e0e0;
}

.arrow {
  font-size: 0.8rem;
}

.panel-content {
  padding: 1rem;
  border-top: 1px solid #ddd;
}
</style>
