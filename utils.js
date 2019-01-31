let cookies = function () {

    /**
     * @returns {Object.<string, string>} Returns JSON object of cookies
     * @private
     *
     * Can't have ";" as key nor value.
     */
    function get_cookie(){
        let cookie = document.cookie.split(";");
        let cookie_json = {};

        for(let i=0;i<cookie.length;i++){
            let cookie_key = cookie[i].split("=")[0];
            let cookie_value = cookie[i].slice(cookie_key.length + 1, cookie[i].length);

            cookie_json[cookie_key] = cookie_value;
        }
        return cookie_json;
    }

    /**
     * @param {Object.<string, string|number|undefined|boolean>} cookie_json A JSON object like so: {"cookie1": "John Doe"} etc.
     * @private
     *
     * Can't have ";" as key nor value.
     */
    function set_cookie(cookie_json) {
        let cookie_string = "";

        for(let cookie_key in cookie_json){
            if (cookie_json.hasOwnProperty(cookie_key)){
                cookie_string += cookie_key + "=" + cookie_json[cookie_key] + ";";
            }
        }
        document.cookie = cookie_string;
    }

    /**
     * @param {string} key Existent or non-existent key.
     * @param {string|number|boolean|undefined} value Value to set for key.
     */
    function set(key, value) {
        let cookie_json = get_cookie();
        cookie_json[key] = value;
        set_cookie(cookie_json);
    }

    /**
     * @param {string} key Key to the cookie.
     * @returns {string|undefined} Value of cookie, undefined if key invalid.
     */
    function get(key) {
        return get_cookie()[key];
    }

    return{
        set: set,
        get: get
    }
}();