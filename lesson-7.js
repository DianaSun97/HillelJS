let frameworks = ['AngularJS', 'jQuery']
//option 1
// frameworks = ['Backbone.js', ...frameworks]
//option 2
frameworks.unshift('Backbone.js');

//option 1
// frameworks = [...frameworks, ‘ReactJS’, ‘Vue.js’]
//option 2
frameworks.push('ReactJS', 'Vue.js');
frameworks.splice(1,0, 'CommonJS' );

const indexDelete = frameworks.indexOf('jQuery');
const jQ = frameworks[indexDelete]
frameworks.splice(indexDelete, 1)
console.log(frameworks, `${jQ} Это здесь лишнее`)


