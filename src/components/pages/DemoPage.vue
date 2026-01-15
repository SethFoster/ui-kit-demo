<template>
  <div class="demo-page">
    <header class="demo-header">
      <h1>Legacy UI vs Component Library</h1>
      <p>
        Compare ad-hoc UI development (legacy) with reusable, intentional
        components.
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
            <li>Inline styles, inconsistent padding & font sizes</li>
          </ul>
        </div>

        <!-- Component Library -->
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

    <!-- INPUTS -->
    <section class="demo-row">
      <h2>Inputs</h2>
      <div class="demo-grid">
        <!-- Legacy -->
        <div class="demo-panel legacy">
          <h3>Legacy UI</h3>
          <input
            type="text"
            placeholder="Enter text..."
            style="padding: 4px 10px; margin-bottom: 8px; font-size: 0.9rem"
          />
          <input
            type="password"
            placeholder="Password"
            style="padding: 6px; font-size: 0.8rem; width: 150px"
          />
          <ul class="notes bad">
            <li>Inconsistent spacing and sizing</li>
            <li>No validation or feedback</li>
            <li>Different fonts and widths per input</li>
          </ul>
        </div>

        <!-- Component Library -->
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

    <!-- ALERTS -->
    <section class="demo-row">
      <h2>Alerts</h2>
      <div class="demo-grid">
        <!-- Legacy -->
        <div class="demo-panel legacy">
          <h3>Legacy UI</h3>
          <div
            style="
              padding: 4px;
              background: #fffae6;
              border: 1px solid #ccc;
              font-size: 0.85rem;
            "
          >
            Info: Something happened
          </div>
          <div
            style="
              padding: 8px;
              background: #ffe6e6;
              border: 2px dashed #ccc;
              font-size: 0.8rem;
            "
          >
            Error: Something failed
          </div>
          <ul class="notes bad">
            <li>No consistent severity or style</li>
            <li>Manual spacing, colors, and borders</li>
            <li>Hard to maintain across pages</li>
          </ul>
        </div>

        <!-- Component Library -->
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

/* Panels */
.demo-panel {
  flex: 1 1 420px;
  padding: 1.5rem;
  border-radius: 12px;
  min-height: 250px;
}

/* Legacy styles */
.legacy {
  background: #c0c0c0;
  border: 2px solid #808080;
  font-family: "Tahoma", Arial, sans-serif;
}

/* Buttons / Inputs / Alerts layouts */
.legacy-buttons,
.kit-panel {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

/* Legacy buttons */
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

/* Notes */
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
