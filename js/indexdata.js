function initdata() {
    console.log("initdata");
    getthejason();
    }

getthejason = function(){
var dataurl = 'data/sheet.json';
var xhr = new XMLHttpRequest();
xhr.open('GET', dataurl, true);
xhr.responseType = 'text';
xhr.send();
console.log('getthejason!');

xhr.onload = function() {
    if (xhr.status === 200) {
        //alert('User\'s name is ' + xhr.responseText);
        //console.log('User\'s name is ' + xhr.responseText);
        console.log('User\'s name is xhr.status === 200 (json loaded) ' + dataurl);
        var respText = xhr.responseText;

        xhrText = JSON.parse(respText); // convert it to an object

        console.log("Data xhrText.length >>>>>>>> " + Object.keys(xhrText.mysheet).length);
   
        var i = -1;
        for (var mykey in xhrText.mysheet) {
        if (xhrText.mysheet.hasOwnProperty(mykey)) {
        i++;
        window['card'+i] = mykey + " -> " + xhrText[mykey];
        }
      }
    }
    else {
        alert('Request failed. '+dataurl+'  Returned status of ' + xhr.status);
    }
    createvars();
 };
};
var vs = {}; //vs is vs
createvars = function(){
        var mysheetlenght = Object.keys(xhrText.mysheet).length;
        for (var j = 0; j < mysheetlenght; j++) {
            //console.log( " xhrText.title >>>>>>>> "+ j + " " + xhrText.mysheet[j].title);
            //window['title'+j] = xhrText.mysheet[j].title;
                vs['title'+j] = xhrText.mysheet[j].title;
                vs['subtitle'+j] = xhrText.mysheet[j].subtitle;
                vs['copy'+j] = xhrText.mysheet[j].copy;
                vs['imagename'+j] = xhrText.mysheet[j].imagename;
            // console.log( " title0  >>>>>>>> " + 'title'+j);
            // console.log( " title0  no vs>>>>>>>> " + vs.title0);
            littlej = j.toString();
            //console.log( " littlej littlej littlej >>>>>>>> " + littlej);
            //alert(typeof littlej === 'number');
            little = ['vs.title'+littlej];
            //console.log( " little little little >>>>>>>> " + little);
            //console.log( "~~~~~~~~~~~~~~~~~~~~~ ");
        }

        testvars();
        /*addElement ('Title0', vs.title0);
       addElement ('Subitle0', vs.subtitle0);
        addElement ('Copy0', vs.copy0);
        addElement ('Imagename0', vs.imagename0);
        addElement ('~~~~~~~~~~~', '~~~~~~~~~~~');
        addElement ('Title1', vs.title1);
        addElement ('Subitle1', vs.subtitle1);
        addElement ('Copy0', vs.copy1);
        addElement ('Imagename0', vs.imagename2);
        addElement ('~~~~~~~~~~~', '~~~~~~~~~~~');
        addElement ('Title2', vs.title2);
        addElement ('Subitle2', vs.subtitle2);
        addElement ('Copy0', vs.copy2);
        addElement ('Imagename0', vs.imagename3);*/

    };
testvars = function(){
    console.log( "Testing vars title3 >>>>>>>> " + vs.title3);
};
function addElement (n, t) {
      // create a new div element 
      var newDiv = document.createElement("div");
      // and give it some content 
      var newContent = document.createTextNode("Name of key:  " + n + " value: "+ t);
      // add the text node to the newly created div
      newDiv.appendChild(newContent);
      // add the newly created element and its content into the DOM 
      var currentDiv = document.getElementById("div1");
      document.body.insertBefore(newDiv, currentDiv);
    }

r(function(){
    //console.log('DOM Ready!');
    initdata();
});

function r(f){
    /in/.test(document.readyState)?setTimeout('r('+f+')',9):f();
}
