module.exports = {
    devServer: {
        proxy: {
            '/gameapi': {
                target: 'https://www.24horasbet.cc', // 后端接口地址
                changeOrigin: true, // 是否允许跨越
            }
        }
    }
}