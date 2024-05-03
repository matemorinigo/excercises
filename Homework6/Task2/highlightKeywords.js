function highlightKeywords(template, keywords){

    for(keyword in keywords){
        keywords[keyword] = `<span class='highlight'>${keywords[keyword]}</span>`;
        template = template.replace(`\${${keyword}}`, keywords[keyword]);
    }

    return template;
}

const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);
// Expected: "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation."

module.exports = {highlightKeywords};