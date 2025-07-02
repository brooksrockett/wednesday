export default defineEventHandler(async (event) => {
    const code = getRouterParam(event, 'code')
    const data = await $fetch(`https://world.openfoodfacts.net/api/v2/product/${code}`)
    return data
})