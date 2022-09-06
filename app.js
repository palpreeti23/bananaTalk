var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");


var serverURL ="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}


function errorHandler(error){
    console.log("some error occured",error);
    alert("something is wrong with the server please try again later")
}

function clickHandler(){

   var inputText = txtInput.value;//input

   //processing
   fetch(getTranslationURL(inputText))
   .then(response => response.json())
    
   .then(json => {
    var translatedText = json.contents.translated;
    output.innerText = translatedText;//output
   })
   .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler)