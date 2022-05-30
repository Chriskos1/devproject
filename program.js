function additem(){

    const item = document.getElementById("addescription").value;
    const para = document.createElement("figcaption");
    const textNode = document.createTextNode(item);
    para.appendChild(textNode);
    document.getElementById("pictures_section").appendChild(para);


    var elem = document.createElement("img");
    document.getElementById("placehere").appendChild(elem);
    

    const image_input = document.querySelector("addpicture");image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("pictures_section").style.backgroundImage = `url(${uploaded_image})`;
      });
  reader.readAsDataURL(this.files[0]);
});
}


function deleteitem(){

    var element = document.getElementById("delete").value;

    if(element == document.getElementById().value){

	element.parentNode.removeChild(element);
	}

}