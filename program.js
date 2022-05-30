function additem(){

    const item = document.getElementById("addescription").value;
    const para = document.createElement("figcaption");
    const textNode = document.createTextNode(item);
    para.appendChild(textNode);
    document.getElementById("pictures_section").appendChild(para);


}
    const image_input = document.querySelector("#addpicture");image_input.addEventListener("change", function() {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#pictures_section").style.backgroundImage = `url(${uploaded_image})`;
      });
      reader.readAsDataURL(this.files[0]);
    });

function deleteitem(){

    var element = document.getElementById("delete").value;

    if(element == Amsterdam || element == Brussel || element == Paris || element == Roma || element == Vienna || element == Prague || element == Madrid || element == Bucharest ){

	element.parentNode.removeChild(element);
	}



}