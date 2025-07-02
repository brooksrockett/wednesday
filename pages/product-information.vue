<template>
<div>
Testing to make sure our product page works.
<div v-if="product != undefined">
<h1> {{product.product_name}} </h1>
<p>This item: {{product.product_name}} is great for consuming!</p>
<img :src="product.image" class="max-w-20" />
<span v-if="product.allergens == null">Allergens: No allergens listed!</span>
<span v-else> Allergens: {{allergens}} </span>
<p>Calories per 100g: {{product.nutriments["energy-kcal_100g"]}} kcal</p>

</div>
</div>
</template>

<script setup>
const route = useRoute()
const code = route.query.code
const data = ref()
data.value = await $fetch(`/api/code/${code}`)
const product = ref()
product.value = data.value.product

console.log(product.value.allergens)

const allergens = product.value.allergens.split(',').map(e => e.replace('en:','')).join(',')

</script>