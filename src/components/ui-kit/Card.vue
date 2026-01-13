<template>
  <div :class="['ui-card', size, variant]">
    <img v-if="image" :src="image" class="card-image" />
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
    <div v-if="footer" class="card-footer">{{ footer }}</div>
  </div>
</template>

<script>
export default {
  name: "UICard",
  props: {
    title: { type: String, default: "Card Title" },
    content: { type: String, default: "Card content goes here." },
    size: { type: String, default: "medium" }, // small / medium / large
    variant: { type: String, default: "elevated" }, // elevated / outlined / flat
    footer: { type: String, default: "" },
    image: { type: String, default: "" }, // optional image URL
  },
};
</script>

<style scoped>
.ui-card {
  border-radius: 6px;
  padding: 1rem;
  text-align: left;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

/* Sizes */
.ui-card.small { width: 150px; padding: 0.5rem; }
.ui-card.medium { width: 200px; padding: 1rem; }
.ui-card.large { width: 300px; padding: 1.5rem; }

/* Variants */
.ui-card.elevated { box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); }
.ui-card.outlined { border: 1px solid #ccc; box-shadow: none; }
.ui-card.flat { border: none; box-shadow: none; }

/* Image */
.card-image { width: 100%; border-radius: 4px; margin-bottom: 0.5rem; }

/* Footer */
.card-footer { margin-top: 0.5rem; font-weight: bold; color: #333; }

.ui-card:hover { transform: translateY(-4px); box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08); }

.ui-card h3 { margin: 0 0 0.5rem; font-size: 1.2rem; }
.ui-card p { margin: 0; font-size: 0.95rem; color: #333; }
</style>
