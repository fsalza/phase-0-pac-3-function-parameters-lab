function introduction(name){
    return `Hi, my name is ${name}.`
    name = "Fulvio"
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
    name = "Aki";
    language = "Ember.js"
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
    name = "Aki";
    
}