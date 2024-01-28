<template>
    <MainHeader @toggleAddProduct="showAddProduct = $event" />
    <AddProduct v-if="showAddProduct" />
    <section class="py-5">
        <table class="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
                <tr class="border-b-2 border-gray-900">
                    <th class="px-4 py-2">Id</th>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Description</th>
                    <th class="px-4 py-2">Price</th>
                    <th class="px-4 py-2">Type</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, i) in inventory" :key="i"
                        class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-1000 even:dark:bg-gray-800 border-b dark:border-gray-70">
                    <td class="px-4 py-2">{{ product.id }}</td>
                    <td class="px-4 py-2">{{ product.name }}</td>
                    <td class="px-4 py-2">{{ product.description }}</td>
                    <td class="px-4 py-2">{{ product.price }}</td>
                    <td class="px-4 py-2">{{ product.type }}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import AddProduct from '@/components/AddProduct.vue'
import ProductDataService from '@/services/ProductDataService'

export default {
  components: {
    MainHeader,
    AddProduct
  },
  mounted () {
    ProductDataService.getAll()
      .then(response => {
        this.inventory = response.data
      })
  },
  data () {
    return {
      showAddProduct: false,
      inventory: []
    }
  },
  methods: {
    toggleAddProduct () {
      this.showAddProduct = !this.showAddProduct
    }
  }
}
</script>
