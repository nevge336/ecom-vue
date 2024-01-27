<template>
    <button :class="`btn ${color}`" @click="onClick">
        {{ text }}
    </button>
</template>

<script>
export default {
  name: 'ButtonClic',
  props: {
    color: {
      type: String,
      default: 'bg-blue-500 hover:bg-blue-800'
    },
    text: String,
    onClick: Function
  }
}
</script>
