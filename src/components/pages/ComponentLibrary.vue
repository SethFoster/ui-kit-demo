<template>
  <div class="component-library-page">
    <!-- Side nav -->
    <nav class="component-menu">
      <a
        v-for="id in sectionIds"
        :key="id"
        :href="'#' + id"
        :class="{ active: activeSection === id }"
      >
        {{ formatNavLabel(id) }}
      </a>
    </nav>

    <div class="main-content">
      <!-- Mission -->
      <section id="mission" class="component-section">
        <h1>Component Library</h1>
        <p>
          Reusable components that make building consistent, beautiful, and
          accessible UIs easier across all your apps. Need help? Reach out to
          the design or development team.
        </p>
      </section>

      <!-- Install -->
      <section id="install" class="component-section">
        <div class="component-panel">
          <h2>Install / Setup</h2>
          <p>
            Repo:
            <a href="https://github.com/SethFoster/ui-kit-demo" target="_blank">
              ui-kit-demo
            </a>
          </p>

          <pre class="code-snippet">
npm install @your-org/component-library
          </pre>

          <pre class="code-snippet">
import { UIButton, UICard, UIInput } from '@your-org/component-library';
          </pre>

          <p>Current version: <strong>v1.3.1</strong></p>
        </div>
      </section>

      <!-- Standards -->
      <section id="standards" class="component-section">
        <div class="component-panel">
          <h2>Standards</h2>
          <p class="section-intro">
            These standards define the visual and typographic foundation used
            across all UI components to ensure consistency and accessibility.
          </p>

          <h3>Color Palette</h3>

          <div class="colors">
            <div class="color primary">Primary</div>
            <div class="color secondary">Secondary</div>
            <div class="color danger">Danger</div>
            <div class="color success">Success</div>
          </div>

          <hr class="panel-divider" />

          <h3>Typography</h3>

          <ul class="typography-list">
            <li>
              <strong>Inter</strong>
              <span>— Primary UI text</span>
            </li>
            <li>
              <strong>Roboto</strong>
              <span>— Headings and emphasis</span>
            </li>
            <li>
              <strong>Fira Code</strong>
              <span>— Code snippets and examples</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Buttons Section -->
      <section id="buttons" class="component-section">
        <div class="component-panel">
          <h2>Buttons</h2>
          <p class="section-intro">
            Buttons trigger actions and come in multiple sizes, colors, and
            states.
          </p>

          <!-- Props -->
          <h3>Props</h3>
          <table class="props-table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Options / Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>type</td>
                <td>primary / secondary / danger (default: primary)</td>
              </tr>
              <tr>
                <td>size</td>
                <td>sm / md / lg (default: md)</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>boolean (default: false)</td>
              </tr>
            </tbody>
          </table>

          <hr class="panel-divider" />

          <!-- Interactive Demo -->
          <h3>Interactive Demo</h3>
          <div class="controls">
            <label>
              Text
              <input v-model="buttonText" />
            </label>

            <label>
              Type
              <select v-model="buttonType">
                <option v-for="t in buttonTypes" :key="t" :value="t">
                  {{ t }}
                </option>
              </select>
            </label>

            <label>
              Size
              <select v-model="buttonSize">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </label>

            <label class="inline">
              <input type="checkbox" v-model="isDisabled" />
              Disabled
            </label>
          </div>

          <div class="interactive-demo">
            <div class="preview">
              <UIButton
                :type="buttonType"
                :size="buttonPropSize"
                :disabled="isDisabled"
              >
                {{ buttonText }}
              </UIButton>
            </div>

            <pre class="code-snippet">
    <code class="language-html">{{ buttonSnippet }}</code>
  </pre>
          </div>

          <hr class="panel-divider" />

          <!-- Variants -->
          <h3>Variants</h3>
          <div class="component-variants">
            <UIButton type="primary">Primary</UIButton>
            <UIButton type="secondary">Secondary</UIButton>
            <UIButton type="danger">Danger</UIButton>
          </div>
        </div>
      </section>

      <section id="inputs" class="component-section">
        <div class="component-panel">
          <h2>Inputs</h2>
          <p class="section-intro">
            Inputs allow users to enter and edit text with optional validation
            and sizing.
          </p>

          <!-- Props -->
          <h3>Props</h3>
          <table class="props-table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Options / Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>size</td>
                <td>sm / md / lg (default: md)</td>
              </tr>
              <tr>
                <td>type</td>
                <td>text / email / password (default: text)</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>boolean (default: false)</td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>string (optional)</td>
              </tr>
              <tr>
                <td>error</td>
                <td>string (optional)</td>
              </tr>
            </tbody>
          </table>

          <hr class="panel-divider" />

          <!-- Interactive Demo -->
          <h3>Interactive Demo</h3>
          <div class="controls">
            <label>
              Text
              <input v-model="textInput" placeholder="Enter text..." />
            </label>

            <label>
              Type
              <select v-model="inputType">
                <option value="text">Text</option>
                <option value="email">Email</option>
                <option value="password">Password</option>
              </select>
            </label>

            <label>
              Size
              <select v-model="inputSize">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </label>

            <label class="inline">
              <input type="checkbox" v-model="isInputDisabled" />
              Disabled
            </label>

            <label>
              Error Message
              <input
                v-model="inputError"
                placeholder="Optional error message"
              />
            </label>
          </div>

          <div class="interactive-demo">
            <div class="preview">
              <UIInput
                v-model="textInput"
                :size="inputPropSize"
                :type="inputType"
                :disabled="isInputDisabled"
                :placeholder="'Enter text...'"
                :error="inputError"
              />
            </div>

            <pre class="code-snippet">
              <code class="language-html" v-html="escapedInputSnippet"></code>
            </pre>
          </div>

          <hr class="panel-divider" />

          <h3>Variants</h3>
          <div class="component-variants">
            <UIInput
              v-model="staticInput1"
              size="md"
              placeholder="Medium input"
            />
            <UIInput
              v-model="staticInput2"
              size="sm"
              placeholder="Small disabled"
              disabled
            />
            <UIInput
              v-model="staticInput3"
              size="md"
              placeholder="With error"
              error="Required"
            />
          </div>
        </div>
      </section>

      <section id="alerts" class="component-section">
        <div class="component-panel">
          <h2>Alerts</h2>
          <p class="section-intro">
            Alerts communicate important status messages to the user with clear
            visual emphasis.
          </p>
          <!-- Props -->
          <h3>Props</h3>
          <table class="props-table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Options / Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>severity</td>
                <td>success / info / warning / error (default: info)</td>
              </tr>
              <tr>
                <td>slot</td>
                <td>Alert message content</td>
              </tr>
            </tbody>
          </table>

          <hr class="panel-divider" />

          <!-- Interactive Demo -->
          <h3>Interactive Demo</h3>
          <div class="controls">
            <label>
              Message
              <input v-model="alertText" />
            </label>

            <label>
              Severity
              <select v-model="alertSeverity">
                <option
                  v-for="o in alertOptions"
                  :key="o.value"
                  :value="o.value"
                >
                  {{ o.label }}
                </option>
              </select>
            </label>
          </div>

          <div class="interactive-demo">
            <div class="preview">
              <UIAlert :severity="alertSeverity">
                {{ alertText }}
              </UIAlert>
            </div>

            <pre class="code-snippet">
              <code class="language-html" v-html="escapedAlertSnippet"></code>
            </pre>
          </div>

          <hr class="panel-divider" />

          <h3>Variants</h3>
          <div class="component-variants">
            <UIAlert severity="success">Success</UIAlert>
            <UIAlert severity="info">Info</UIAlert>
            <UIAlert severity="warning">Warning</UIAlert>
            <UIAlert severity="error">Error</UIAlert>
          </div>
        </div>
      </section>

      <!-- Release Notes -->
      <section id="release-notes" class="component-section">
        <div class="component-panel">
          <h2>Release Notes</h2>
          <ul class="release-notes-list">
            <li>
              <span class="version">v1.3.1</span>
              <span class="description">
                Added <strong>Alerts</strong> component with interactive demo
                and documented props.
              </span>
            </li>

            <li>
              <span class="version">v1.3.0</span>
              <span class="description">
                Added size variants and disabled styling to
                <strong>Buttons</strong>. Expanded props for
                <strong>Cards</strong> and <strong>Inputs</strong>.
              </span>
            </li>

            <li>
              <span class="version">v1.2.0</span>
              <span class="description">
                Introduced interactive props table for
                <strong>Buttons</strong>.
              </span>
            </li>

            <li>
              <span class="version">v1.1.0</span>
              <span class="description">
                Added hover animations to <strong>Card</strong> component.
              </span>
            </li>

            <li>
              <span class="version">v1.0.0</span>
              <span class="description">
                Initial component library release.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import {
  ref,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick,
} from "vue";
import UIButton from "../ui-kit/Button.vue";
import UIAlert from "../ui-kit/Alert.vue";
import UIInput from "../ui-kit/Input.vue";
import Prism from "prismjs";

export default {
  name: "ComponentLibraryPage",
  components: { UIButton, UIAlert, UIInput },
  setup() {
    const sectionIds = [
      "install",
      "standards",
      "buttons",
      "inputs",
      "alerts",
      "release-notes",
    ];

    const activeSection = ref("install");

    // ===== Buttons =====
    const buttonText = ref("Click Me");
    const buttonSize = ref("medium"); // human-friendly
    const buttonType = ref("primary");
    const isDisabled = ref(false);
    const buttonTypes = ["primary", "secondary", "danger"];

    const buttonPropSize = computed(() => {
      return buttonSize.value === "small"
        ? "sm"
        : buttonSize.value === "large"
        ? "lg"
        : "md";
    });

    const buttonSnippet = computed(() => {
      return `<UIButton type="${buttonType.value}" size="${buttonPropSize.value}" :disabled="${isDisabled.value}">${buttonText.value}</UIButton>`;
    });

    onMounted(() => Prism.highlightAll());
    watch(buttonSnippet, async () => {
      await nextTick();
      Prism.highlightAll();
    });

    // ===== Inputs =====
    const textInput = ref("");
    const isInputDisabled = ref(false);
    const inputSize = ref("medium");
    const inputType = ref("text");
    const inputError = ref("");

    const staticInput1 = ref("");
    const staticInput2 = ref("");
    const staticInput3 = ref("");

    const inputPropSize = computed(() => {
      return inputSize.value === "small"
        ? "sm"
        : inputSize.value === "large"
        ? "lg"
        : "md";
    });

    const inputSnippet = computed(() => {
      return `<UIInput size="${inputPropSize.value}" type="${inputType.value}" :disabled="${isInputDisabled.value}" placeholder="Enter text..." :error="${inputError.value}" v-model="${textInput.value}" />`;
    });

    // Alerts demo
    const alertText = ref("This is an alert.");
    const alertSeverity = ref("info");

    const alertOptions = [
      { label: "Success", value: "success" },
      { label: "Info", value: "info" },
      { label: "Warning", value: "warning" },
      { label: "Error", value: "error" },
    ];

    // Prism snippet for alerts
    const alertSnippet = computed(() => {
      return `<UIAlert severity="${alertSeverity.value}">${alertText.value}</UIAlert>`;
    });

    // Watch snippet for Prism highlighting
    watch(alertSnippet, async () => {
      await nextTick();
      Prism.highlightAll();
    });

    // Escaped snippet for Prism + v-html
    const escapeHtml = (str) =>
      str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const escapedInputSnippet = computed(() => escapeHtml(inputSnippet.value));

    // Watch for changes and highlight
    watch(escapedInputSnippet, async () => {
      await nextTick();
      Prism.highlightAll();
    });

    const escapedAlertSnippet = computed(() => escapeHtml(alertSnippet.value));

    watch(escapedAlertSnippet, async () => {
      await nextTick();
      Prism.highlightAll();
    });

    // ===== Utils =====
    const formatNavLabel = (id) =>
      id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

    // ===== Scroll-tracking =====
    const updateActiveSection = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      let found = sectionIds[0];

      sectionIds.forEach((id, index) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (scrollY >= el.offsetTop) found = id;

        if (
          index === sectionIds.length - 1 &&
          window.scrollY + window.innerHeight >= document.body.scrollHeight
        ) {
          found = id;
        }
      });

      activeSection.value = found;
    };

    onMounted(() => {
      window.addEventListener("scroll", updateActiveSection);
      updateActiveSection();
    });

    onBeforeUnmount(() =>
      window.removeEventListener("scroll", updateActiveSection)
    );

    return {
      sectionIds,
      activeSection,
      // Buttons
      buttonText,
      buttonSize,
      buttonType,
      isDisabled,
      buttonTypes,
      buttonPropSize,
      buttonSnippet,
      // Inputs
      textInput,
      isInputDisabled,
      inputSize,
      inputType,
      inputError,
      staticInput1,
      staticInput2,
      staticInput3,
      inputPropSize,
      inputSnippet,
      escapedInputSnippet,
      // Alerts
      alertText,
      alertSeverity,
      alertOptions,
      escapedAlertSnippet,
      // Utils
      formatNavLabel,
    };
  },
};
</script>

<style scoped>
/* ComponentLibrary.vue scoped CSS */

.component-library-page {
  display: flex;
  background: #f5f5f5;
  min-height: 100vh;
  align-items: flex-start; /* makes sticky work inside flex */
}

.component-menu {
  width: 220px;
  padding: 2rem;
  background: #fff;
  border-right: 1px solid #ddd;

  position: sticky;
  top: 2rem;
  align-self: flex-start; /* ensures sticky works */
  height: fit-content; /* prevents stretching */
}

.component-menu a {
  display: block;
  margin-bottom: 0.75rem;
  color: #6200ee;
  font-weight: 600;
  text-decoration: none;
}

.component-menu a.active {
  color: #03dac6;
}

.main-content {
  flex: 1;
  padding: 2rem;
  padding-bottom: 10rem;
}

.component-section {
  margin-bottom: 4.5rem;
}

.component-section > h2 {
  margin-bottom: 0.75rem;
}

/* Component panel (single container per component) */

.component-panel {
  background: #fff;
  border-radius: 10px;
  padding: 1.75rem;
  margin-top: 1.25rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
}

/* Intro text */

.section-intro {
  color: #555;
  margin-bottom: 1.75rem;
  max-width: 640px;
  font-size: 0.95rem;
  line-height: 1.6;
}

#standards .section-intro {
  max-width: 1000px;
}

/* typography stuff */

.typography-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.typography-list li {
  margin-bottom: 0.5rem;
  color: #333;
}

.typography-list span {
  color: #666;
  font-size: 0.9rem;
}

/* Subsection headings inside panels */

.component-panel h3 {
  margin: 0 0 0.75rem;
  font-size: 1.05rem;
}

/* Divider for panel subsections */

.panel-divider {
  border: none;
  border-top: 1px solid #eee;
  margin: 1.5rem 0;
}

/* Controls */

.controls {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}

.controls label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.85rem;
  color: #444;
}

.controls label.inline {
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

/* Preview area */

.preview {
  margin-top: 1rem;
}

/* Variants */

.component-variants {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Code snippets */

.code-snippet {
  background: #f0f0f0;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-family: monospace;
  font-size: 0.85rem;
  margin-top: 0.75rem;
  display: flex;
  align-items: center; /* vertical centering */
  min-height: 40px; /* adjust for visual balance */
}

.code-snippet code {
  display: block;
  white-space: pre; /* preserve spaces exactly */
  margin: 0; /* remove default spacing */
  padding: 0; /* optional, keep consistent with snippet */
}

/* Color blocks */

.colors {
  display: flex;
  gap: 1rem;
}

.color {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
}

.color.primary {
  background: #6200ee;
}

.color.secondary {
  background: #03dac6;
  color: #111;
}

.color.danger {
  background: #b00020;
}

.color.success {
  background: #4caf50;
}

/* Props table */

.props-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 0.5rem;
}

.props-table th,
.props-table td {
  border: 1px solid #ddd;
  padding: 0.6rem 1rem;
  text-align: left;
  font-size: 0.9rem;
}

.props-table th {
  background: #fafafa;
  font-weight: 600;
}

/* Release Notes */

.release-notes-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.release-notes-list li {
  display: flex;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;
}

.release-notes-list li:last-child {
  border-bottom: none;
}

.release-notes-list .version {
  font-weight: 700;
  color: #6200ee;
  min-width: 80px;
  white-space: nowrap;
}

.release-notes-list .description {
  color: #333;
  line-height: 1.4;
}
</style>
