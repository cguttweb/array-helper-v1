<template>
  <li class="list-group-item text-left" @click="getExample(method)">
    <strong>{{ methodName }}</strong>
    {{ method }}
  </li>
</template>

<script>
export default {
  props: {
    methodName: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
    example: {
      type: String,
    },
  },
  methods: {
    getExample(method) {
      this.example = method.methodExample;
    },
  },
};
</script>

<style scoped></style>
