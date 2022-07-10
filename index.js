const form = $("form");

form.submit(function () {
  const product = $("#searchbar").val();
  const productRequest = $.get(
    "https://api.spoonacular.com/food/products/search?apiKey=cc0e26e2d9c44f39b29ebedb231e827b&query=" +
      product +
      "&addProductInformation=true"
  );

  productRequest.done(function (data) {
    console.log(data.products[0].title);
    console.log(data.products[0].image);
    console.log(data.products[0].ingredientList);
    //
    const title = document.getElementById("food-name");
    title.innerHTML = data.products[0].title;
    //
    const image = document.getElementById("food-image");
    image.src = data.products[0].image;
    //
    const ingredients = document.getElementById("ingredients");
    ingredients.innerHTML = data.products[0].ingredientList;
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
