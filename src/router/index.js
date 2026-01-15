import { createRouter, createWebHistory } from "vue-router";
import ComponentLibraryPage from "@/components/pages/ComponentLibraryPage.vue";
import DemoPage from "@/components/pages/DemoPage.vue";

const routes = [
  { path: "/", name: "Demo", component: DemoPage },
  {
    path: "/component-library",
    name: "ComponentLibrary",
    component: ComponentLibraryPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
