/**
 * @type {{localization}}
 * @namespace localization
 */
let localization = function(){
    /** @private
     * @description Assign on load, or from cookies. */
    let locale_code = "en";
    /**
     * @public
     */
    let messages = {};

    /**
     * @public
     */
    function locale_cookie() {
        locale_code = cookies.get("locale");
        if (locale_code === undefined){
            locale_code = "en";
        }
    }

    /**
     * @public
     * @returns {string} 2 Characters long string of ISO.
     * @description Returns language classification code.
     */
    function get_lang_iso() {return locale_code}

    /**
     * @public
     * @param {string} language_code
     */
    function update_language(language_code = locale_code) { //en, dk etc.
        if (language_code.length !== 2){
            return;
        }
        $.getJSON("locale\\"+language_code+".json", function (json_data) {
            try{
                messages[language_code] = json_data;
            }catch (e) {
                console.error(e);
            }
            locale_code = language_code;
            cookies.set("locale", language_code);
        });
    }

    return{
        locale_cookie: locale_cookie,
        update_language: update_language,
        get_lang_iso: get_lang_iso,
        messages: messages
    }
}();

localization.locale_cookie();

//for now just default to english.
localization.update_language();


console.log(localization.messages);

let i18n = new VueI18n({
    locale: localization.get_lang_iso(),
    messages: localization.messages,
});

new Vue({ i18n }).$mount('#application');