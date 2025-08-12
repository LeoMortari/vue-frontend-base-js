<template>
  <div class="q-pa-sm">
    <div>
      <span>{{ label }} {{ required ? "*" : "" }}</span>
    </div>

    <q-input outlined v-model="text" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    label: {
      type: String,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
    },
  },
  setup() {
    return {
      text: ref(""),
    };
  },
};
</script>
