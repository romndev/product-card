module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/product-card/dist/'
        : '/'
}
