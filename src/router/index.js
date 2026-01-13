import { createRouter, createWebHistory } from "vue-router";
import ComponentLibraryPage from "../components/pages/ComponentLibrary.vue";
import DemoPage from "@/components/demo/DemoPage.vue";

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
