const categoryDropdown = document.getElementById("categoryDropdown");
const subcategoryDropdown = document.getElementById("subcategoryDropdown");
const infoBox = document.getElementById("infoBox");

const data = {
    laptops: {
        info: "Various high-performance laptops available.",
        items: ["MacBook", "Dell XPS", "HP Spectre"]
    },
    phones: {
        info: "Latest smartphones with cutting-edge technology.",
        items: ["iPhone 15", "Samsung Galaxy S23", "OnePlus 11"]
    }
};

categoryDropdown.addEventListener("change", function () {
    const selectedCategory = categoryDropdown.value;
    infoBox.textContent = data[selectedCategory].info;
    
    // Populate the second dropdown
    subcategoryDropdown.innerHTML = `<option value="" disabled selected>Choose an item</option>`;
    data[selectedCategory].items.forEach(item => {
        const option = document.createElement("option");
        option.textContent = item;
        option.value = item;
        subcategoryDropdown.appendChild(option);
    });

    subcategoryDropdown.disabled = false;
});
