<template>
  <q-btn :icon="icon" :label="label" />
</template>

<script>
export default {
  name: "Button",
  props: {
    color: {
      type: String,
      default: "primary",
      validator: (value) => ["primary", "secondary"].includes(value),
    },
    icon: {
      type: String,
    },
    label: {
      type: String,
    },
  },
};
</script>
