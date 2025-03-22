// Create container
let container = document.createElement("div");
container.id = "container";
container.className = "container";
document.body.appendChild(container);
let loader=document.getElementById("loader")

// Fetch Dog Image
async function getData() {
    try {
        let response = await fetch("https://dog.ceo/api/breeds/image/random");

        if (!response.ok) {
            throw new Error("Something went wrong");
        }

        let data = await response.json();
        showData(data);
    } catch (err) {
        console.error(err);
    }
}

// Show Image (Replace Previous Image)
function showData(user) {
    let imageUrl = user.message;
     loader.remove();
    container.innerHTML = `
        <h1>Dog Images</h1>
        <div>
            <img src="${imageUrl}" id="img" alt="Random Dog Image">
        </div>
    `;
}

// Load Image Initially and Update Every Second
window.addEventListener("DOMContentLoaded", function () {

    getData(); // Load first image immediately
    setInterval(getData, 1000); // Fetch a new image every second
});