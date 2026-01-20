<template>
  <div class="demo-page">
    <header class="demo-header">
      <h1>Legacy UI vs Component Library</h1>
    </header>

    <section class="demo-row">
      <h2>Buttons</h2>
      <div class="demo-grid">
        <div class="demo-panel legacy">
          <h3>Legacy UI</h3>
          <div class="legacy-buttons">
            <button class="legacy-btn v1">Save</button>
            <button class="legacy-btn v2">Save</button>
            <button class="legacy-btn v3">SAVE</button>
          </div>

          <ul class="notes bad">
            <li>Different styles per feature</li>
            <li>No shared hover or disabled rules</li>
            <li>Inline styles, inconsistent padding & font sizes</li>
          </ul>
        </div>

        <div class="demo-panel uikit">
          <h3>Component Library</h3>
          <div class="kit-panel">
            <UIButton label="Confirm" />
            <UIButton label="Delete" type="danger" />
            <UIButton label="Small" size="small" />
          </div>
          <ul class="notes good">
            <li>Consistent sizing, spacing, and typography</li>
            <li>Hover & disabled states standardized</li>
            <li>Predictable UX for end-users</li>
            <li>Single source of truth for styles</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="demo-row">
      <h2>Inputs</h2>
      <div class="demo-grid">
        <div class="demo-panel legacy">
          <h3>Legacy UI</h3>
          <input class="legacy-input v1" placeholder="Email address" />
          <input class="legacy-input v2" placeholder="email address" />
          <input class="legacy-input v3" placeholder="Enter email" />
        </div>

        <div class="demo-panel uikit">
          <h3>Component Library</h3>
          <div class="kit-panel">
            <UIInput placeholder="Enter text..." />
            <UIInput placeholder="Password" type="password" />
            <UIInput placeholder="Disabled input" disabled />
            <UIInput placeholder="With error" error="Required" />
          </div>
          <ul class="notes good">
            <li>Consistent sizing and spacing</li>
            <li>Supports validation and disabled states</li>
            <li>Predictable layout for users</li>
            <li>Single source of truth for styles</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="demo-row">
      <h2>Alerts</h2>
      <div class="demo-grid">
        <div class="demo-panel legacy">
          <h3>Legacy UI</h3>
          <div class="legacy-alert v1">Something went wrong</div>
          <div class="legacy-alert v2">Error: Something went wrong</div>
          <ul class="notes bad">
            <li>No consistent severity or style</li>
            <li>Manual spacing, colors, and borders</li>
            <li>Hard to maintain across pages</li>
          </ul>
        </div>

        <div class="demo-panel uikit">
          <h3>Component Library</h3>
          <div class="kit-panel">
            <UIAlert severity="info">Info: Something happened</UIAlert>
            <UIAlert severity="error">Error: Something failed</UIAlert>
            <UIAlert severity="success">Success: Operation completed</UIAlert>
          </div>
          <ul class="notes good">
            <li>Predefined severity styles</li>
            <li>Consistent spacing and typography</li>
            <li>Predictable UX and reusable</li>
            <li>Single source of truth for styles</li>
          </ul>
        </div>
      </div>
    </section>

    <footer class="demo-footer">
      <p>
        Building UI with a component library ensures consistency,
        maintainability, and scalability, unlike legacy ad-hoc UI.
      </p>
    </footer>
  </div>
</template>

<script>
import UIButton from "../ui-kit/Button.vue";
import UIInput from "../ui-kit/Input.vue";
import UIAlert from "../ui-kit/Alert.vue";

export default {
  name: "DemoPage",
  components: { UIButton, UIInput, UIAlert },
};
</script>

<style scoped>
.demo-page {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: system-ui, -apple-system, sans-serif;
}

.demo-header {
  margin-bottom: 3rem;
  text-align: center;
}

.demo-header h1 {
  margin-bottom: 0.5rem;
}

.demo-row {
  margin-bottom: 3rem;
}

.demo-grid {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.demo-panel {
  flex: 1 1 420px;
  padding: 1.5rem;
  border-radius: 12px;
  min-height: 250px;
}

.legacy {
  background: #c0c0c0;
  border: 2px solid #808080;
  font-family: "Tahoma", Arial, sans-serif;
}

.legacy-buttons,
.kit-panel {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

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

.legacy-btn {
  background: #e5e5e5;
  border: 1px solid #999;
  color: #000;
}

.legacy-btn.v1 {
  padding: 6px 12px;
  font-size: 0.9rem;
  border-radius: 2px;
}

.legacy-btn.v2 {
  padding: 8px 14px;
  font-size: 0.95rem;
  border-radius: 8px;
}

.legacy-btn.v3 {
  padding: 5px 10px;
  font-size: 0.85rem;
  font-weight: bold;
  text-transform: uppercase;
}

.legacy-btn.v1:hover {
  background: #dcdcdc;
}

.legacy-btn.v2:hover {
  background: #e0e0e0;
  box-shadow: inset 0 0 0 1px #777;
}

.legacy-btn.v3:hover {
  background: #cfcfcf;
}

.legacy-input {
  border: 1px solid #999;
  background: white;
  color: #000;
}

.legacy-input.v1 {
  padding: 6px 8px;
  font-size: 0.9rem;
  width: 220px;
}

.legacy-input.v2 {
  padding: 8px 10px;
  font-size: 0.95rem;
  width: 220px;
}

.legacy-input.v3 {
  padding: 6px 8px;
  font-size: 0.85rem;
  width: 200px;
}

.legacy-input.v1::placeholder {
  color: #555;
}

.legacy-input.v2::placeholder {
  color: #888;
}

.legacy-input.v3::placeholder {
  color: #aaa;
}

.legacy-alert {
  margin-bottom: 0.5rem;
  color: #333;
}

.legacy-alert.v1 {
  padding: 6px 8px;
  background: #fff7cc;
  border: 1px solid #e0c97f;
  font-size: 0.85rem;
}

.legacy-alert.v2 {
  padding: 10px;
  background: #fde8e8;
  border: 1px solid #f5a5a5;
  font-size: 0.9rem;
}
</style>
