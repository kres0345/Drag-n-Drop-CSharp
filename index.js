var theWorkspace = Blockly.inject('blocklyDiv',
      {toolbox: document.getElementById('toolbox')});

//Assign on load, or from cookies.
let locale = {};

let filename = "untitled";
new Vue({
    el: '#FilenameInput',
    data: {
        filename
    }
});