<template>
  <div>
    <q-btn :style="`background-color: ${color}; color: ${textColor}`" :label="label"/>
  </div>
</template>

<script>
export default {
  name: 'dass-button',
  props: {
    color: String,
    textColor: String,
    label: String
  },
}
</script>