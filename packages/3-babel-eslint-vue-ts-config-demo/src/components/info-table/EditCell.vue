<template>
  <div class="editable-cell">
    <div v-if="editable" class="editable-cell-input-wrapper">
      <w-input v-model="value" @pressEnter="check" /><w-icon
        type="check"
        class="editable-cell-icon-check"
        @click="check"
      />
    </div>
    <div v-else class="editable-cell-text-wrapper">
      {{ value || ' ' }}
      <w-icon type="edit" class="editable-cell-icon" @click="editable = true" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditableCell',
  components: {},
  props: {
    text: [String, Number]
  },
  data() {
    return {
      value: this.text,
      editable: false
    };
  },
  watch: {
    text(val) {
      this.value = val;
    }
  },
  methods: {
    check() {
      this.editable = false;
      this.$emit('change', this.value);
    }
  }
};
</script>
