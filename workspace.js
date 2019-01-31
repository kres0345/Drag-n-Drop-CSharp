/**
 * NOTE: Workspace namespace is not blockly workspace,
 * it only features window state and layout.
 *
 * @namespace workspace Workspace
 * @public
 */
let workspace = function () {

    /**
     * @returns {string} A string containing the workspace.
     * @param {boolean} minimize Weather the string that is returned is minimized.
     * @public
     */
    function get_workspace(minimize = false) {

    }

    /**
     * @private
     */
    function get_layout() {

    }

    return{
        get_workspace: get_workspace
    }
}();