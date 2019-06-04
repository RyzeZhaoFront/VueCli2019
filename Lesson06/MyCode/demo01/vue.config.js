const path = require('path')

module.exports = {
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        //配置less
        types.forEach(type => addStyleResource(
            config.module.rule('less').oneOf(type),
            //配置此路径下所有less自动导入
            [path.resolve(__dirname, './src/less/*.less')]
        ))
        //配置scss
        types.forEach(type => addStyleResource(
            config.module.rule('scss').oneOf(type),
            //配置此路径下所有scss自动导入
            [path.resolve(__dirname, './src/scss/*.scss')]
        ))
    },
}

function addStyleResource (rule,patterns) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            //通过给入的参数进行配置
            patterns:patterns,
        })
}