export default defineEventHandler((event) => {
    const params = getRouterParams(event)
    console.log(params)
    return `Hello ${params.name}`
})