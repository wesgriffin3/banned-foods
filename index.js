const form = $("form");

form.submit(function () {
  const product = $("#searchbar").val();
  const productRequest = $.get(
    "https://api.spoonacular.com/food/products/search?apiKey=cc0e26e2d9c44f39b29ebedb231e827b&query=" +
      product +
      "&number=5"
  );

  productRequest.done(function (data) {
    console.log(data.products);
  });
});

const productResult = document.createElement("div");
