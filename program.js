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
    var Amsterdam = document.getElementById("Amsterdam").value
    var Brussel = document.getElementById("Brussel").value
    var Paris = document.getElementById("Paris").value
    var Roma = document.getElementById("Roma").value
    var Vienna = document.getElementById("Vienna").value
    var Prague = document.getElementById("Prague").value
    var Madrid = document.getElementById("Madrid").value
    var Bucharest =document.getElementById("Bucharest").value
    if(element == Amsterdam || element == Brussel || element == Paris || element == Roma || element == Vienna || element == Prague || element == Madrid || element == Bucharest ){

	element.parentNode.removeChild(element);
	}



}