<template>
  <q-toggle
    v-model="value"
    v-bind="$attrs"
    :color="color"
    @update:model-value="toggle"
  />
</template>

<script>
export default {
  name: "Toggle",
  model: {
    prop: "value",
    event: "update:model-value",
  },
  props: {
    color: {
      type: String,
      default: "secondary",
      validator: (value) => ["primary", "secondary"].includes(value),
    },
  },
  methods: {
    toggle() {
      this.$emit("toggle", this.value);
    },
  },
};
</script>
