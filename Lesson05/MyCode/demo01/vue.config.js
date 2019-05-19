module.exports = {
    chainWebpack: config => {
        // 输出删除前的config插件数据
        console.log(config.plugins);
        //不生成html
        config.plugins.delete('html');
        //删除prefetch和preload插件
        config.plugins.delete('prefetch');
        config.plugins.delete('preload');
        //用于分隔
        console.log("===================");
        //再次输出config插件数据
        console.log(config.plugins);
    }
}