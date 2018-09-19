export const clear_cache = function() {
    delete require.cache[require.resolve('./src/api/ens')]
}
