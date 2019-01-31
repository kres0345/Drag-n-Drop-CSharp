Vue.config.ignoredElements = ['xml', 'category', 'block'];

let BlocklyWorkspace = Blockly.inject('blockly_area',
      {toolbox: document.getElementById('toolbox')});

const windowTitle_trail = " - Drag n' Drop";
let projectname = "untitled project";
//init title
document.title = projectname + windowTitle_trail;


/**
 * @param {string} value Changes project name.
 */
function projectname_change(value){
    projectname = value;
    document.title = value + windowTitle_trail;
}

/*
new Vue({
    el: '#projectname_input',
    data: {
        filename
    }
});*/