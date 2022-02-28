const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-syntaxhighlight"));
    

    let markdownLibrary = markdownIt({
        html: true,
        breaks: true,
        linkify: false
      });
      eleventyConfig.setLibrary("md", markdownLibrary);
};


