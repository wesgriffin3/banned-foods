fetch(
  "https://api.nutritionix.com/v1_1/search?appId=2b117551&appKey=060081dd5a36769c4ed8f2f30a178a47&query=cinnamon toast crunch"
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
