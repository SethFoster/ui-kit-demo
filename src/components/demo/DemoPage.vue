<template>
  <div class="demo-page">
    <header class="demo-header">
      <h1>Legacy UI vs Design System</h1>
      <p>
        A visual comparison of ad-hoc UI development versus a reusable,
        intentional UI Kit.
      </p>
    </header>

    <!-- BUTTONS -->
    <section class="demo-row">
      <h2>Buttons</h2>

      <div class="demo-grid">
        <!-- Legacy -->
        <div class="demo-panel legacy">
          <h3>Legacy UI</h3>

          <div class="legacy-buttons">
            <button class="xp-btn">OK</button>
            <button class="red-btn">DELETE</button>
            <button class="tiny-btn">Go</button>
          </div>

          <ul class="notes bad">
            <li>Different styles per feature</li>
            <li>No shared hover or disabled rules</li>
            <li>Inline styles and copy-paste CSS</li>
          </ul>
        </div>

        <!-- UI KIT -->
        <div class="demo-panel uikit">
          <h3>UI Kit</h3>

          <div class="kit-buttons">
            <UiButton label="Confirm" />
            <UiButton label="Delete" type="danger" />
            <UiButton label="Small" size="small" />
          </div>

          <ul class="notes good">
            <li>Consistent sizing and spacing</li>
            <li>Shared hover & disabled states</li>
            <li>Single source of truth</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CARDS -->
    <section class="demo-row">
      <h2>Panels / Cards</h2>

      <div class="demo-grid">
        <!-- Legacy -->
        <div class="demo-panel legacy">
          <h3>Legacy UI</h3>

          <div class="legacy-cards">
            <div class="legacy-card a">
              <strong>Status</strong>
              <p>OK</p>
            </div>
            <div class="legacy-card b">
              <strong>Info</strong>
              <p>Different padding & font</p>
            </div>
          </div>

          <ul class="notes bad">
            <li>Inconsistent layout & spacing</li>
            <li>Random borders and shadows</li>
            <li>No shared component rules</li>
          </ul>
        </div>

        <!-- UI KIT -->
        <div class="demo-panel uikit">
          <h3>UI Kit</h3>

          <div class="kit-cards">
            <UiCard
              title="Status"
              content="Consistent spacing and typography."
            />
            <UiCard
              title="Info"
              content="Reusable, predictable layout."
            />
          </div>

          <ul class="notes good">
            <li>Unified padding & typography</li>
            <li>Predictable structure</li>
            <li>Easy to scale across apps</li>
          </ul>
        </div>
      </div>
    </section>

    <footer class="demo-footer">
      <p>
        This is the difference between shipping UI ad-hoc and building with a
        design system.
      </p>
    </footer>
  </div>
</template>

<script>
const UiButton = {
  props: {
    label: String,
    type: { type: String, default: "default" },
    size: { type: String, default: "normal" },
  },
  template: `
    <button :class="['ui-btn', type, size]">
      {{ label }}
    </button>
  `,
};

const UiCard = {
  props: { title: String, content: String },
  template: `
    <div class="ui-card">
      <h4>{{ title }}</h4>
      <p>{{ content }}</p>
    </div>
  `,
};

export default {
  name: "DemoPage",
  components: { UiButton, UiCard },
};
</script>

<style scoped>
/* ===== PAGE ===== */
.demo-page {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: system-ui, -apple-system, sans-serif;
}

.demo-header {
  margin-bottom: 3rem;
}

.demo-header h1 {
  margin-bottom: 0.5rem;
}

.demo-row {
  margin-bottom: 3rem;
}

/* ===== GRID ===== */
.demo-grid {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

/* ===== PANELS ===== */
.demo-panel {
  flex: 1 1 420px;
  padding: 1.25rem;
}

/* ===== LEGACY ===== */
.legacy {
  background: #c0c0c0;
  border: 2px solid #808080;
  font-family: "Tahoma", "MS Sans Serif", Arial, sans-serif;
}

.legacy h3 {
  margin-bottom: 1rem;
}

/* Legacy buttons */
.legacy-buttons {
  display: flex;
  gap: 0.75rem;
}

.xp-btn {
  padding: 4px 12px;
  border: 2px outset #fff;
  background: linear-gradient(#f0f0f0, #c0c0c0);
  font-size: 0.9rem;
}

.red-btn {
  background: red;
  color: white;
  border: 1px solid black;
  padding: 6px 10px;
  font-weight: bold;
}

.tiny-btn {
  font-size: 0.7rem;
  padding: 2px 6px;
}

/* Legacy cards */
.legacy-cards {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.legacy-card {
  border: 2px inset #fff;
  background: #e0e0e0;
}

.legacy-card.a {
  padding: 6px;
  font-size: 0.8rem;
}

.legacy-card.b {
  padding: 12px;
  font-size: 0.95rem;
}

/* ===== UI KIT ===== */
.uikit {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.kit-buttons,
.kit-cards {
  display: flex;
  gap: 1rem;
}

/* UI Buttons */
.ui-btn {
  padding: 0.6rem 1.25rem;
  border-radius: 6px;
  border: none;
  background: #3b82f6;
  color: white;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
}

.ui-btn.danger {
  background: #dc2626;
}

.ui-btn.small {
  font-size: 0.8rem;
  padding: 0.4rem 0.75rem;
}

.ui-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

/* UI Cards */
.ui-card {
  background: #f9fafb;
  border-radius: 8px;
  padding: 1rem;
  width: 180px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

/* ===== NOTES ===== */
.notes {
  margin-top: 1rem;
  font-size: 0.85rem;
  padding-left: 1rem;
}

.notes.bad {
  color: #7f1d1d;
}

.notes.good {
  color: #14532d;
}

.demo-footer {
  margin-top: 3rem;
  font-style: italic;
  color: #555;
}
</style>
