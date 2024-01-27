<template>
        <header class="flex justify-between items-center mb-2 mt-12 p-12">
                <h1 class="text-sm sm:text-md md:text-2xl lg:text-3xl xl:text-4xl font-bold">{{ title }}</h1>
                <Button :text="showAdd ? 'Fermer' : 'Ajouter'" :color="showAdd ? 'btn-orange' : 'btn-teal'" @click="toggleForm" />
        </header>
</template>

<script>
import Button from './ButtonClic.vue'

export default {
  name: 'MainHeader',
  components: {
    Button
  },
  data () {
    return {
      showAdd: false
    }
  },
  props: {
    title: {
      type: String,
      default: 'Liste des produits',
      required: true
    }
  },
  methods: {
    toggleForm () {
      this.showAdd = !this.showAdd
      this.$emit('toggleAddProduct', this.showAdd)
    }
  }
}
</script>
