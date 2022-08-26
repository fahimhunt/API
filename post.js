function postDetails() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => displaypost(data))
}
/*
1. Get the container element where you want to add the element.
2. Create Child Element.
3.Set innerteext or innerHtml.
4.appendChild
*/


function displaypost(data) {
    const postbox = document.getElementById("post-container");
    for (post of data) {
        const headerpost = document.createElement("div");

        //Add class using js
        headerpost.classList.add("post")

        headerpost.innerHTML = ` <h4>User- ${post.id}</h4>
       <h3>Title: ${post.title}</h3>
       <h6> Body: ${post.body}</h6>`
        postbox.appendChild(headerpost);

    }
}
postDetails();