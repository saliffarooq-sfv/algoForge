const sanitizeHtml = require("sanitize-html");
const marked = require ('marked');
const TurndownService = require("turndown");

function markdownSanitizer(markdownContent){

    const turnDownService = new TurndownService();
    const convertedHtml = marked.parse(markdownContent);
    const sanitizedHtml = sanitizeHtml(convertedHtml,{
        allowedTags: sanitizeHtml.defaults.allowedTags
    });

    console.log(sanitizedHtml)

    const finalMarkdown
     = turnDownService.turndown(sanitizedHtml);
    return finalMarkdown
    ;

}

module.exports = markdownSanitizer;

