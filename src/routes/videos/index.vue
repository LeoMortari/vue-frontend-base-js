<template>
  <div class="user-list q-pa-md">
    <q-card flat bordered class="q-pa-sm">
      <h2>Lista de Vídeos</h2>
    </q-card>

    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserList",
  data() {
    return {
      users: [
        { id: 1, name: "Usuário 1", email: "usuario1@exemplo.com" },
        { id: 2, name: "Usuário 2", email: "usuario2@exemplo.com" },
        { id: 3, name: "Usuário 3", email: "usuario3@exemplo.com" },
      ],
    };
  },
};
</script>

<style scoped>
.user-list {
  margin: 0 auto;
}

.user-list ul {
  list-style: none;
  padding: 0;
}

.user-list li {
  padding: 8px;
  border-bottom: 1px solid #eee;
}
</style>
