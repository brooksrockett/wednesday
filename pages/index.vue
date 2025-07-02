<template>
    <div class="bg-black text-white min-h-screen">
        <div class="w-1/2 m-auto bg-green-800 text-center">
            Testing that the index.vue page works
        </div>
        Enter a food: <input type="text" class="border border-white bg-gray-300 rounded" v-model="query"
            @keydown.enter="onChange" />
        <br>

        <ul class="w-1/2 mx-auto text-center object-center m-8">
            <li v-for="food in foods" class="mb-4 bg-gray-800 rounded-md border-white border">
                <div v-if="food.product_name != undefined && food.image != undefined"
                    class="justify-center flex flex-col"><span class="text-2xl">{{ food.product_name }}</span><br><img :src="food.image"
                        class="max-w-20 mx-auto" /><br>
                <button class="bg-yellow-500 text-black font-semibold" @click="onClick(food.code)">{{food.code}}</button></div>
            </li>
        </ul>
    </div>
</template>

<script setup>
const query = ref()

const foods = ref()

const onChange = async () => {
    foods.value = await $fetch(`/api/food/${query.value}`)
}

const onClick = async (code) => {
await navigateTo({
  path: '/product-information',
  query: {
    code: code
  }
})
}
</script>