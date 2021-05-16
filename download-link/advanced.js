
// Namespace to avoid collisions
var OnTheFly = OnTheFly || {};
OnTheFly.DownloadLink = OnTheFly.DownloadLink  || {};


/**
 * Using the module pattern, the main focus here is privacy.
 * The logic is shielded from the global scope by a self invoking function wrapper.
 * This function wrapper returns the an object representing the modules public interface.
 * Any variable not in the return value will remain private, they are only visible to the 
 * functions that reference them.
 * 
 * We leverage javascripts Blob here, it is a file-like object of immutable, raw data.
 * It allows us to 
 * 
 * Blob : https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob
 * 
 */
OnTheFly.DownloadLink  = (function(){
    let configOptions = {
        fileName : null,
        fileExt  : ".csv",
        fileData : null, 
        sourceElement : document.body,
        downloadLabel : "Download",
        // application/json, text/plain
        mimeType : "text/csv",          
        charSet : "charset=UTF-8",
        classList : ['btn','btn-light']
    };

    /**
     * Returns a flag indicating whether we have all the required values
     * @returns bool 
     */
    function isValid(){
        const emptyValues = Object.values(configOptions).filter(value => !value);
        return emptyValues.length == 0;
    };

    /**
     * Concatenates filename and extension
     * @returns string filename
     */
    function generateFileName(){
        let { fileName, fileExt } = configOptions;
        return `${fileName}${fileExt}`;
    };

    /**
     * Build download anchor link based on properties in the configOptions
     * @returns Download link anchor element
     */
    function buildDownloadLink() {
        let { fileData, downloadLabel, charSet, mimeType } = configOptions;

        // Use blob to avoid issues with any illegal characters
        const blob = new Blob([fileData], {
          type: `${mimeType};${charSet}`
        });
      
        // Create our anchor and 
        let link = document.createElement("a");
        link.setAttribute("href", URL.createObjectURL(blob));
        link.innerHTML = downloadLabel ? downloadLabel : "Download";
        link.setAttribute("download", generateFileName());


        if(Array.isArray(configOptions.classList)){
            configOptions.classList.forEach(cssClass =>{
                link.classList.add(cssClass);
            });
        }
        else{
            console.info("ClassList must be an array of strings");
        }

        return link;
    };

    /**
     * Append download link to specified source elememt
     * @param {*} downloadLink 
     */
    function attachDownLink(downloadLink){
        configOptions.sourceElement.appendChild(downloadLink);
    };

    /**
     * Initialize and attach our download anchor link
     * @param {*} _configOptions 
     */
    function init(_configOptions){
        if(configOptions){
            configOptions = {...configOptions, ..._configOptions};
        }
        
        if(!isValid()){
            throw new Error("Missing required configOptons");
        }
        attachDownLink( buildDownloadLink() );
    };

    return{
        init
    }
})();

