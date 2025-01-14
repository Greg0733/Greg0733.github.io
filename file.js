function insertFileAsChild(url, element, before = "", after = "") {
    var htmlToAdd = before;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de téléchargement du fichier : ' + response.status);
            }
            return response.text();
        })
        .then(fileContent => {
            htmlToAdd += fileContent;
        })
        .catch(error => {
            htmlToAdd += '<li><p class="error">' + error.message + ' (voir logs)</p></li>';
            /*const error_li = document.createElement("li");
            const error_text = document.createElement("p");
            error_text.class = "error";
            error_text.innerHTML = error.message + " (voir logs)";
            element.appendChild(error_text);*/
        })
        .then(() => {
            htmlToAdd += after;
            element.innerHTML += htmlToAdd;
        });
}