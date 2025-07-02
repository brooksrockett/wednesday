export default defineEventHandler(async (event) => {
    const params = getRouterParams(event)
    const data = await $fetch(`https://search.openfoodfacts.org/search?q=${params.name}`)
    console.log(data)
    const results = []
    for (let hit of data.hits) {
        results.push({
            image: hit.image_small_url,
            code: hit.code,
            product_name: hit.product_name
        })
    }
    return results
})