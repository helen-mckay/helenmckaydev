const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginDate = require("eleventy-plugin-date");

module.exports = function (eleventyConfig) {    
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('./assets/images');
    eleventyConfig.addPassthroughCopy('./assets/images/uploads');
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(pluginDate, {
        formats: {
            readableDate: { year: "numeric", month: "long"}
        }
    });
};