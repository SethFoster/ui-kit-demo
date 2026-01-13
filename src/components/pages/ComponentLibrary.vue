<template>
  <div class="component-library-page">
    <!-- Side nav -->
    <nav class="component-menu">
      <a
        v-for="id in [
          'mission',
          'install',
          'standards',
          'buttons',
          'cards',
          'inputs',
          'alerts',
          'release-notes',
        ]"
        :href="'#' + id"
        :class="{ active: activeSection === id }"
      >
        {{ id.charAt(0).toUpperCase() + id.slice(1).replace("-", " ") }}
      </a>
    </nav>

    <div class="main-content">
      <!-- Mission Statement -->
      <section id="mission" class="component-section">
        <h1>Component Library</h1>
        <p>
          Reusable components to enforce design consistency and communication
          across apps. If you have questions, talk to the lead developer or
          design team.
        </p>
      </section>

      <!-- Install / Setup -->
      <section id="install" class="component-section">
        <h2>Install / Setup</h2>
        <p>To use this component library in your project:</p>
        <pre class="code-snippet">
npm install @your-org/component-library
# or if local/fake:
npm install ../path/to/component-library
        </pre>
        <p>Then import the components in your Vue app:</p>
        <pre class="code-snippet">
import { UIButton, UICard, UIInput } from '@your-org/component-library';
        </pre>
        <p>Current version: <strong>v1.3.1</strong></p>
      </section>

      <!-- Standards -->
      <section id="standards" class="component-section">
        <h2>Standards</h2>

        <!-- Color Palette -->
        <div class="color-palette">
          <h3>Color Palette</h3>
          <div class="colors">
            <div class="color" style="background: #6200ee">Primary #6200EE</div>
            <div class="color" style="background: #03dac6; color: #111">
              Secondary #03DAC6
            </div>
            <div class="color" style="background: #b00020">Danger #B00020</div>
            <div class="color" style="background: #4caf50">Success #4CAF50</div>
            <div class="color" style="background: #f5f5f5; color: #111">
              Background #F5F5F5
            </div>
            <div class="color" style="background: #111">Text #111</div>
          </div>
        </div>

        <!-- Typography -->
        <div class="typography">
          <h3>Typography</h3>
          <p style="font-family: 'Inter', system-ui, sans-serif">
            Primary font: <strong>Inter</strong>
          </p>
          <p style="font-family: 'Roboto', system-ui, sans-serif">
            Secondary font (headings): <strong>Roboto</strong>
          </p>
          <p style="font-family: 'Fira Code', monospace">
            Monospace font: <strong>Fira Code</strong>
          </p>
          <p>Standard weights: 400 (normal), 500 (medium), 700 (bold)</p>
        </div>

        <!-- Spacing -->
        <div class="spacing-standards">
          <h3>Spacing</h3>
          <div>Base margin/padding unit: 8px</div>
          <div>Small: 8px, Medium: 16px, Large: 24px</div>
          <div>Component gaps: multiples of base unit (8px, 16px, 24px…)</div>
        </div>
      </section>

      <!-- Buttons -->
      <section id="buttons" class="component-section">
        <h2>Buttons</h2>
        <p class="component-props-header">Props available:</p>
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
              <td>small / medium / large (default: medium)</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>true / false (default: false)</td>
            </tr>
            <tr>
              <td>bgColor</td>
              <td>string (optional inline color)</td>
            </tr>
          </tbody>
        </table>

        <!-- Interactive Demo Panel -->
        <div class="component-panel">
          <h3>Interactive Demo</h3>
          <label>Text: <input v-model="buttonText" /></label>
          <label>
            Color:
            <select v-model="buttonColor">
              <option v-for="c in buttonColors" :key="c.value" :value="c.value">
                {{ c.label }}
              </option>
            </select>
          </label>
          <label>
            Size:
            <select v-model="buttonSize">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>
          <label
            >Disabled: <input type="checkbox" v-model="isDisabled"
          /></label>

          <div class="preview">
            <UIButton
              :style="{
                backgroundColor: isDisabled ? '#ccc' : buttonColor,
                cursor: isDisabled ? 'not-allowed' : 'pointer',
                opacity: isDisabled ? 0.6 : 1,
              }"
              :size="buttonSize"
              :disabled="isDisabled"
            >
              {{ buttonText }}
            </UIButton>
          </div>

          <pre class="code-snippet">
&lt;UIButton
  :style="{ backgroundColor: '{{ buttonColor }}' }"
  :size="'{{ buttonSize }}'"
  :disabled="{{ isDisabled }}"&gt;
  {{ buttonText }}
&lt;/UIButton&gt;
          </pre>
        </div>

        <!-- Static Examples Panel -->
        <div class="component-panel">
          <h3>Static Examples</h3>
          <div class="component-variants">
            <div>
              <UIButton type="primary" size="small">Small Primary</UIButton>
              <pre class="code-snippet">
&lt;UIButton type="primary" size="small"&gt;Small Primary&lt;/UIButton&gt;</pre
              >
            </div>
            <div>
              <UIButton type="secondary">Secondary</UIButton>
              <pre class="code-snippet">
&lt;UIButton type="secondary"&gt;Secondary&lt;/UIButton&gt;</pre
              >
            </div>
            <div>
              <UIButton type="danger">Danger</UIButton>
              <pre class="code-snippet">
&lt;UIButton type="danger"&gt;Danger&lt;/UIButton&gt;</pre
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Cards -->
      <section id="cards" class="component-section">
        <h2>Cards</h2>
        <p class="component-props-header">Props available:</p>
        <table class="props-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Options / Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>title</td>
              <td>string (default: "Card Title")</td>
            </tr>
            <tr>
              <td>content</td>
              <td>string (default: "Card content goes here.")</td>
            </tr>
            <tr>
              <td>size</td>
              <td>small / medium / large (default: medium)</td>
            </tr>
            <tr>
              <td>variant</td>
              <td>elevated / outlined / flat (default: elevated)</td>
            </tr>
            <tr>
              <td>footer</td>
              <td>string (optional)</td>
            </tr>
            <tr>
              <td>image</td>
              <td>string URL (optional)</td>
            </tr>
          </tbody>
        </table>

        <div class="component-panel">
          <h3>Examples</h3>
          <div class="component-variants">
            <div>
              <UICard
                title="Card 1"
                content="Basic card content."
                size="medium"
                variant="elevated"
              />
              <pre class="code-snippet">
&lt;UICard title="Card 1" content="Basic card content." size="medium" variant="elevated" /&gt;</pre
              >
            </div>
            <div>
              <UICard
                title="Card 2"
                content="Another example card."
                size="small"
                variant="outlined"
                footer="Action Button"
              />
              <pre class="code-snippet">
&lt;UICard title="Card 2" content="Another example card." size="small" variant="outlined" footer="Action Button" /&gt;</pre
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Inputs -->
      <section id="inputs" class="component-section">
        <h2>Inputs</h2>
        <p class="component-props-header">Props available:</p>
        <table class="props-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Options / Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>modelValue</td>
              <td>string (default: "")</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>string (default: "")</td>
            </tr>
            <tr>
              <td>size</td>
              <td>small / medium / large (default: medium)</td>
            </tr>
            <tr>
              <td>type</td>
              <td>text / email / password (default: text)</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>true / false (default: false)</td>
            </tr>
            <tr>
              <td>error</td>
              <td>string (optional)</td>
            </tr>
          </tbody>
        </table>

        <div class="component-panel">
          <h3>Examples</h3>
          <div class="component-variants">
            <div>
              <UIInput
                v-model="textInput"
                placeholder="Enter text..."
                size="medium"
                type="text"
              />
              <p>Live: "{{ textInput }}"</p>
              <pre class="code-snippet">
&lt;UIInput v-model="textInput" placeholder="Enter text..." size="medium" type="text" /&gt;</pre
              >
            </div>
            <div>
              <UIInput
                v-model="anotherInput"
                placeholder="Another input..."
                size="small"
                type="text"
                disabled
              />
              <p>Live: "{{ anotherInput }}"</p>
              <pre class="code-snippet">
&lt;UIInput v-model="anotherInput" placeholder="Another input..." size="small" type="text" disabled /&gt;</pre
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Alerts -->
      <section id="alerts" class="component-section">
        <h2>Alerts</h2>

        <!-- Props Table -->
        <p class="component-props-header">Props available:</p>
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
              <td>slot content</td>
              <td>string (required content of the alert message)</td>
            </tr>
          </tbody>
        </table>

        <!-- Interactive Demo -->
        <div class="component-panel">
          <h3>Interactive Demo</h3>
          <label>
            Message:
            <input v-model="alertText" placeholder="Enter alert text..." />
          </label>

          <label>
            Severity:
            <select v-model="alertSeverity">
              <option
                v-for="opt in alertOptions"
                :key="opt.value"
                :value="opt.value"
              >
                {{ opt.label }}
              </option>
            </select>
          </label>

          <div class="preview">
            <UIAlert :severity="alertSeverity">{{ alertText }}</UIAlert>
          </div>

          <pre class="code-snippet">
&lt;UIAlert severity="{{ alertSeverity }}"&gt;{{
              alertText
            }}&lt;/UIAlert&gt;</pre
          >
        </div>

        <!-- Static Examples -->
        <div class="component-panel">
          <h3>Static Examples</h3>
          <div class="component-variants">
            <div>
              <UIAlert severity="success">This is a success Alert.</UIAlert>
              <pre class="code-snippet">
&lt;UIAlert severity="success"&gt;This is a success Alert.&lt;/UIAlert&gt;</pre
              >
            </div>
            <div>
              <UIAlert severity="info">This is an info Alert.</UIAlert>
              <pre class="code-snippet">
&lt;UIAlert severity="info"&gt;This is an info Alert.&lt;/UIAlert&gt;</pre
              >
            </div>
            <div>
              <UIAlert severity="warning">This is a warning Alert.</UIAlert>
              <pre class="code-snippet">
&lt;UIAlert severity="warning"&gt;This is a warning Alert.&lt;/UIAlert&gt;</pre
              >
            </div>
            <div>
              <UIAlert severity="error">This is an error Alert.</UIAlert>
              <pre class="code-snippet">
&lt;UIAlert severity="error"&gt;This is an error Alert.&lt;/UIAlert&gt;</pre
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Release Notes -->
      <section id="release-notes" class="component-section">
        <h2>Release Notes</h2>
        <ul>
          <li>
            <strong>v1.3.1</strong> — Added Alerts component with interactive
            demo and props table.
          </li>
          <li>
            <strong>v1.3.0</strong> — Added sizes and disabled styling for
            Buttons, extra props for Cards and Inputs.
          </li>
          <li>
            <strong>v1.2.0</strong> — Added interactive props table for Button.
          </li>
          <li>
            <strong>v1.1.0</strong> — Added hover animations to Card component.
          </li>
          <li><strong>v1.0.0</strong> — Initial component library demo.</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import UIButton from "../ui-kit/Button.vue";
import UICard from "../ui-kit/Card.vue";
import UIInput from "../ui-kit/Input.vue";
import UIAlert from "../ui-kit/Alert.vue";

export default {
  name: "ComponentLibraryPage",
  components: { UIButton, UICard, UIInput, UIAlert },
  setup() {
    const textInput = ref("");
    const anotherInput = ref("");
    const buttonText = ref("Click Me");
    const buttonColor = ref("#6200EE");
    const buttonSize = ref("medium");
    const isDisabled = ref(false);

    const buttonColors = [
      { label: "Primary", value: "#6200EE" },
      { label: "Secondary", value: "#03DAC6" },
      { label: "Danger", value: "#B00020" },
      { label: "Success", value: "#4CAF50" },
    ];

    const alertText = ref("This is an info Alert.");
    const alertSeverity = ref("info");

    const alertOptions = [
      { label: "Success", value: "success" },
      { label: "Info", value: "info" },
      { label: "Warning", value: "warning" },
      { label: "Error", value: "error" },
    ];

    const sections = ref([]);
    const activeSection = ref("mission");

    const updateActiveSection = () => {
      const scrollPos = window.scrollY + 100;
      for (const sec of sections.value) {
        if (
          sec.offsetTop <= scrollPos &&
          sec.offsetTop + sec.offsetHeight > scrollPos
        ) {
          activeSection.value = sec.id;
        }
      }
    };

    onMounted(() => {
      sections.value = Array.from(
        document.querySelectorAll(".component-section")
      );
      window.addEventListener("scroll", updateActiveSection);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", updateActiveSection);
    });

    return {
      textInput,
      anotherInput,
      buttonText,
      buttonColor,
      buttonSize,
      isDisabled,
      buttonColors,
      activeSection,
      alertText,
      alertSeverity,
      alertOptions,
    };
  },
};
</script>

<style scoped>
.component-library-page {
  display: flex;
  background-color: #f5f5f5;
  color: #111;
  min-height: 100vh;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
}

/* Side menu */
.component-menu {
  position: sticky;
  top: 2rem;
  flex-shrink: 0;
  width: 200px;
  padding: 2rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-right: 1px solid #ddd;
}
.component-menu a {
  color: #6200ee;
  text-decoration: none;
  font-weight: bold;
}
.component-menu a.active {
  color: #03dac6;
}
.component-menu a:hover {
  text-decoration: underline;
}

/* Main content */
.main-content {
  flex-grow: 1;
  padding: 2rem;
}
.component-section {
  margin-bottom: 4rem;
}
.component-section h2 {
  margin-bottom: 1rem;
}
.component-section pre.code-snippet {
  background: #eaeaea;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  margin-top: 1rem;
}
.component-props-header {
  margin-top: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.props-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}
.props-table th,
.props-table td {
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  text-align: left;
}
.component-panel {
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}
.component-variants > div {
  margin-bottom: 1rem;
}
.color-palette .colors {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.color {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  min-width: 100px;
  text-align: center;
}
</style>
