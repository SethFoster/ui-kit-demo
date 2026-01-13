<template>
  <nav class="demo-nav">
    <router-link to="/">Demo</router-link>
    <router-link to="/component-library">Component Library</router-link>
  </nav>
</template>

<style scoped>
.demo-nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f5f5f5;
}

.demo-nav a {
  text-decoration: none;
  color: #0077cc;
  font-weight: bold;
}

.demo-nav a.router-link-active {
  text-decoration: underline;
}
</style>
