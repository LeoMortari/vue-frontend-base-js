<template>
  <q-card class="q-pa-md" flat bordered>
    <q-table
      :title="title"
      :rows="rows"
      :columns="columns"
      :row-key="rowKey"
      :loading="loading"
      row-key="name"
      flat
      bordered
      virtual-scroll
      hide-pagination
    >
      <template v-slot:loading>
        <q-inner-loading color="primary" />
      </template>

      <template v-slot:no-data>
        <slot name="no-data" />
      </template>
    </q-table>

    <div class="row q-mt-md">
      <div class="col-8 flex justify-end">
        <q-pagination
          v-model="pagination.currentPage"
          color="primary"
          :max="pagination.totalPages"
          size="md"
        />
      </div>

      <div class="col-4 flex justify-end items-center">
        <span class="text-grey-5"
          >Mostrando {{ pagination.currentPage }} de
          {{ pagination.totalItems }}</span
        >
      </div>
    </div>
  </q-card>
</template>

<script>
import has from "lodash/has";

export default {
  props: {
    columns: {
      type: Array,
      required: true,
      validator: (value) => value.some((item) => has(item, ["name", "label"])),
    },
    rows: {
      type: Array,
      required: true,
      validator: (value) => value.some((item) => has(item, ["name", "label"])),
    },
    rowName: {
      type: String,
      required: false,
      default: "name",
    },
    title: {
      type: String,
      required: false,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    pagination: {
      type: Object,
      required: false,
      default: {
        sortBy: "desc",
        descending: false,
        currentPage: 1,
        totalPages: 1,
        totalItems: 10,
      },
    },
  },
  setup(props) {
    return {
      columns: props.columns,
      rows: props.rows,
    };
  },
};
</script>
