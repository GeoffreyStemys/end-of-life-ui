<template>
  <h1>End of life UI</h1>

  <div>
    <p>Glad that you had try my template</p>
<!--    <UButton>Button</UButton>-->
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
  <div>
    <p>Some tests 23</p>
<!--      <UDivider label="OR" />-->
    <Button label="Submit" />
    <SplitButton label="Save" @click="save" :model="items" />  </div>
</template>
<script setup lang="ts">
import Button from 'primevue/button';
import SplitButton from 'primevue/splitbutton';



import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
  {
    label: 'Update',
    icon: 'pi pi-refresh',
    command: () => {
      toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
    }
  },
  {
    label: 'Delete',
    icon: 'pi pi-times',
    command: () => {
      toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
    }
  },
  {
    separator: true
  },
  {
    label: 'Quit',
    icon: 'pi pi-power-off',
    command: () => {
      window.location.href = 'https://vuejs.org/';
    }
  }
];

const save = () => {
  toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};

</script>
