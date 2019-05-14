//加入垫片
module.exports = {
    presets: [
        ['@vue/app', {
            polyfills: [
                'es6.promise',
                'es6.symbol'
            ]
        }]
    ]
}