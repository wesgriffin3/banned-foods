// fetch(
//   "https://api.nutritionix.com/v1_1/search?appId=2b117551&appKey=060081dd5a36769c4ed8f2f30a178a47&query=" +
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

const input = $("input");
const product = $("input").val();

form.submit(function () {
    console.log(product);
}

// fetch(
//   "https://api.spoonacular.com/food/products/search?apiKey=cc0e26e2d9c44f39b29ebedb231e827b&query=" +
//     product,
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
