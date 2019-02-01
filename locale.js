/**
 * @type {{localization}}
 * @namespace localization
 */
let localization = function(){

    let locale_code = "en";

    /**
     * @public
     */
    function locale_cookie() {
        locale_code = cookies.get("locale");
        if (locale_code === undefined){
            locale_code = "en";
            console.info(`No previous language selected, defaulting to '${locale_code}'`);
        }else{
            console.info(`Loading language from cookie: '${locale_code}'`)
        }
    }

    /**
     * @public
     * @param {string} language_code
     */
    function update_language(language_code = locale_code) { //en, dk etc.
        if (language_code.length !== 2){
            return;
        }
        $.getJSON("locale\\"+language_code+".json", function (json_data, err) {
            console.log(err);
            try{
                locale[language_code] = json_data;
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
        locale_code: locale_code
        //locale: locale
    }
}();

let locale = {
    en:{
        _default_settings:{
            project_name: "Untitled Project"
        },
        toolbar:{
            file: {
                label: "File",
                download: "Download"
            },
            edit: {
                label: "Edit"
            },
            view: {
                label: "View",
                advanced: "Show advanced options"
            }
        }
    },
    da:{
        _default_settings:{
            project_name: "Unavngivet Projekt"
        },
        toolbar:{
            file:{
                label: "Filer",
                download: "Download"
            },
            edit:{
                label: "Redigér"
            },
            view: {
                label: "Vis",
                advanced: "Vis advancerede indstillinger"
            }
        }
    }
};

localization.locale_cookie();

//for now just default to english.
localization.update_language();

//localization.locale_code = "da";

const i18n = new VueI18n({ locale: localization.locale_code, messages: locale}); //localization.locale_code
new Vue({ i18n }).$mount('#application');

// Initialization, adds filename.
projectname_change(locale[localization.locale_code]._default_settings.project_name);
document.getElementById("projectname_input").value = projectname;