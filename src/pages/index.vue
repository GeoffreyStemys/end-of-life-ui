<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <p>Glad that you had try my template</p>

    <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="serverItems"
      :items-length="totalItems"
      :loading="loading"
      :search="search"
      item-value="name"
      @update:options="loadItems"
    ></v-data-table-server>

    <v-btn
      class="ma-2"
      variant="text"
      icon="mdi-thumb-up"
      color="blue-lighten-2"
    ></v-btn>

    <v-btn variant="outlined" color="primary" class="ma-2"> Vuetify Button </v-btn>
    <v-btn color="primary" class="ma-2"> Vuetify Button
      <v-chip variant="elevated">Chip</v-chip>
    </v-btn>

    <v-chip variant="elevated">Chip</v-chip>
    <v-badge :content="61">
      <v-icon icon="$vuetify" size="x-large"></v-icon>
    </v-badge>
    <v-chip variant="elevated">Chip</v-chip>
    <v-rating
      hover
      :length="5"
      :size="32"
      :model-value="3"
      active-color="primary"
    />
  </div>
</template>
<script setup lang="ts"></script>
