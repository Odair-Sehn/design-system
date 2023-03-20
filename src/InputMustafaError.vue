<template>
     <q-input color="teal" outlined v-model="text" label="Label">
        <template v-slot:append>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
          </q-avatar>
        </template>
      </q-input>
</template>
<script>
export default {
  name: 'InputMustafaError'
}
</script>