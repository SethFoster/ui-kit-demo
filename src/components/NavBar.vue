<template>
  <nav class="demo-nav">
    <router-link to="/">Demo</router-link>
    <router-link to="/component-library">Component Library</router-link>
  </nav>
</template>

<style scoped>
.demo-nav {
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  gap: 1rem;
  background: #f5f5f5;
  border-bottom: 1px solid #ddd;
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
