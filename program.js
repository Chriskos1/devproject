function additem(){

    const item = document.getElementById("addescription").value;
    const para = document.createElement("figcaption");
    const textNode = document.createTextNode(item);
    para.appendChild(textNode);
    document.getElementById("pictures_section").appendChild(para);

    //const image_input = document.querySelector("#addpicture");image_input.addEventListener("change", function() {
      //const reader = new FileReader();
      //reader.addEventListener("load", () => {
        //const uploaded_image = reader.result;
        //document.querySelector("#pictures_section").style.backgroundImage = `url(${uploaded_image})`;
     // });

}


    		// Get the form and file field
    let file = document.querySelector('#addpicture');
    let app = document.querySelector('#pictures_section');

    function logFile (event) {
        let str = event.target.result;
        let img = document.createElement('img');
       	img.src = str;
       	app.append(img);
            			console.log(str);
            		}


            		function handleSubmit (event) {

            			// Stop the form from reloading the page
            			event.preventDefault();

            			// If there's no file, do nothing
            			if (!file.value.length) return;

            			// Create a new FileReader() object
            			let reader = new FileReader();

            			// Setup the callback event to run when the file is read
            			reader.onload = logFile;

            			// Read the file
            			reader.readAsDataURL(file.files[0]);

            		}

            		// Listen for submit events
            		form.addEventListener('submit', handleSubmit);

function deleteitem(){

    var element = document.getElementById("delete").value;
    var Amsterdam = document.getElementById("Amsterdam").value;
    var Brussel = document.getElementById("Brussel").value;
    var Paris = document.getElementById("Paris").value;
    var Roma = document.getElementById("Roma").value;
    var Vienna = document.getElementById("Vienna").value;
    var Prague = document.getElementById("Prague").value;
    var Madrid = document.getElementById("Madrid").value;
    var Bucharest =document.getElementById("Bucharest").value;
    if(element == Amsterdam || element == Brussel || element == Paris || element == Roma || element == Vienna || element == Prague || element == Madrid || element == Bucharest ){

	element.parentNode.removeChild(element);
	}



}