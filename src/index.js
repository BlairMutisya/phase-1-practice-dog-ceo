console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    // Fetch images
    fetch("https://dog.ceo/api/breeds")
        .then(response => {
            // Parse response as JSON
            return response.json();
        })
        .then(data => {
            // Add images to the DOM
            const imageContainer = document.getElementById("image-container");
            data.message.forEach(imageUrl => {
                const img = document.createElement("img");
                img.src = imageUrl;
                img.alt = "Dog Image";
                imageContainer.appendChild(img);
            });
        })
});
document.addEventListener("DOMContentLoaded", () => {
    // Fetch dog breeds
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => {
            // Parse response as JSON
            return response.json();
        })
        .then(data => {
            // Add breeds to the DOM
            const breedList = document.getElementById("breed-list");
            for (const breed in data.message) {
                const listItem = document.createElement("li");
                listItem.textContent = breed;
                breedList.appendChild(listItem);
            }
        })
});
document.addEventListener("DOMContentLoaded", () => {
    // Fetch dog breeds
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => {
            // Parse response as JSON
            return response.json();
        })
        .then(data => {
            // Add breeds to the DOM
            const breedList = document.getElementById("breed-list");
            for (const breed in data.message) {
                const listItem = document.createElement("li");
                listItem.textContent = breed;
                breedList.appendChild(listItem);

                // Add event listener to change font color on click
                listItem.addEventListener("click", () => {
                });
            }
        })
});

