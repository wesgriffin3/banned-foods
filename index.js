const form = $("form");

form.submit(function () {
  const product = $("#searchbar").val();
  const productRequest = $.get(
    "https://api.spoonacular.com/food/products/search?apiKey=cc0e26e2d9c44f39b29ebedb231e827b&query=" +
      product +
      "&addProductInformation=true"
  );

  productRequest.done(function (data) {
    console.log(data);

    const title = document.getElementById("food-name");
    title.innerHTML = data.products[0].title;
    //
    const image = document.getElementById("food-image");
    image.src = data.products[0].image;

    // ingredients

    const ingredients = document.getElementById("ingredients");
    ingredients.innerHTML = data.products[0].ingredientList;

    const array1 = data.products[0].ingredientList.toUpperCase();

    if (array1.includes("BLUE 1")) {
      alert("this food is banned outside of the united states. bit weird, ay?");
    }

    if (array1.includes("BLUE 2")) {
      alert("this food is banned outside of the united states. bit weird, ay?");
    }

    if (array1.includes("YELLOW 5")) {
      alert("this food is banned outside of the united states. bit weird, ay?");
    }

    if (array1.includes("RED 40")) {
      alert("this food is banned outside of the united states. bit weird, ay?");
    }

    if (array1.includes("Brominated vegetable oil")) {
      alert("this food is banned outside of the united states. bit weird, ay?");
    }

    if (array1.includes("Bromated flour")) {
      alert("this food is banned outside of the united states. bit weird, ay?");
    }

    if (array1.includes("Olean")) {
      alert("this food is banned outside of the united states. bit weird, ay?");
    }

    if (array1.includes("BHA")) {
      alert("this food is banned outside of the united states. bit weird, ay?");
    }

    if (array1.includes("BHT")) {
      alert("this food is banned outside of the united states. bit weird, ay?");
    }

    if (array1.includes("rBGH")) {
      alert("this food is banned outside of the united states. bit weird, ay?");
    }

    if (array1.includes("rBST")) {
      alert("this food is banned outside of the united states. bit weird, ay?");
    }

    if (array1.includes("Arsenic")) {
      alert("this food is banned outside of the united states. bit weird, ay?");
    }
  });
});

// // scanner

// var html5QrcodeScanner = new Html5QrcodeScanner("reader", {
//   fps: 10,
//   qrbox: 250,
// });

// function onScanSuccess(decodedText, decodedResult) {
//   // Handle on success condition with the decoded text or result.
//   console.log(`Scan result: ${decodedText}`, decodedResult);
//   // ...
//   html5QrcodeScanner.clear();
//   // ^ this will stop the scanner (video feed) and clear the scan area.
// }

// html5QrcodeScanner.render(onScanSuccess);
