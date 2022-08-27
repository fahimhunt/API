function loadPhoto() {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data => displayphoto(data))
}
/*
1. Get the container element where you want to add the element.
2. Create Child Element.
3.Set innerteext or innerHtml.
4.appendChild
*/


function displayphoto(data) {
    const photobox = document.getElementById("photo-section");
    for (photo of data) {
        const photoGellary = document.createElement("div");

        //Add class using js
        photoGellary.classList.add("photo-container")

        photoGellary.innerHTML = ` <h4>User- ${photo.id}</h4>
       <h3>Title: ${photo.title}</h3>
       <h6> URl: ${photo.url}</h6>
       <img> ${photo.thumbnailUrl}</img>`
        photobox.appendChild(photoGellary);

    }
}
loadPhoto();