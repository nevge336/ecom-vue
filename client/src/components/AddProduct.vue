<template>
    <form class="add-form p-20" @submit.prevent="handleSubmit">
        <div class="form-control">
            <label>Nom</label>
            <input type="text" v-model="name" placeholder="Nom" />
        </div>
        <div class='form-control'>
            <label>Description</label>
            <input type="text" v-model="description" placeholder="Description" />
        </div>
        <div class='form-control'>
            <label>Prix</label>
            <input type="number" v-model.number="price" placeholder="Prix" />
        </div>
        <div class='form-control'>
            <label>Categorie</label>
            <input type="text" v-model="category" placeholder="Categorie" />
        </div>
        <input type="submit" class="btn btn-teal btn-block mt-4" value="Enregistrer le produit" />
    </form>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      photo: '',
      price: '',
      description: '',
      type: ''
    }
  },
  methods: {
    handleSubmit () {
      if (!this.name || !this.description || !this.price || !this.category) {
        alert('Svp remplir tous les champs')
        return
      }
      this.$emit('add', { name: this.name, description: this.description, price: this.price, category: this.category })
      this.name = ''
      this.description = ''
      this.price = ''
      this.category = ''
    }
  }
}
</script>
