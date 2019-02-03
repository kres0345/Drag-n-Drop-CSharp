Vue.config.ignoredElements = ['xml', 'category', 'block'];

window.onload = function(){
    let BlocklyWorkspace = Blockly.inject('blockly_area',
        {toolbox: document.getElementById('toolbox')});
    console.log("Loaded blockly workspace")
};


const windowTitle_trail = " - Drag n' Drop";
let projectname;

//init title
document.title = projectname + windowTitle_trail;


/**
 * @param {string} value Changes project name.
 */
function projectname_change(value){
    console.log("New name: "+value);
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