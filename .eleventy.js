const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginDate = require("eleventy-plugin-date");

module.exports = function (eleventyConfig) {    
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(pluginDate, {
        formats: {
            readableMonth: {year: "numeric", month: "short"}
        }
    });
    
};