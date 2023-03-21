<template>
  <div>
    <q-input :label="label" :placeholder="placeholder"/>
  </div>
</template>

<script>
export default {
  name: 'dass-input',
  props: {
    label: String,
    placeholder: String
  }
}
</script>