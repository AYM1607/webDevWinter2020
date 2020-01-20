function insertCocktails(drinks) {
  if (!drinks || drinks.length === 0) {
    $("#results").html(`
        <h4>Sorry!</h4>
        <p>No drinks with this name</p>
      `);
    return;
  }
  console.log(drinks);
  const drinksElements = drinks.map(drink => {
    const drinkElement = $(`
        <div class="cocktail">
            <h3>${drink.strDrink}</h3>
            <p class="imageContainer">
                <img src="${drink.strDrinkThumb}" class="cocktailImage"/>
            </p>
            <ul class="ingredients"></div>
        </div>
    `);
    for (let i = 1; i <= 15; i++) {
      const ingredientKey = `strIngredient${i}`;
      const quantityKey = `strMeasure${i}`;
      if (!drink[ingredientKey]) {
        break;
      }
      $(drinkElement)
        .find(".ingredients")
        .append(
          $(`
        <li>${drink[ingredientKey]}: ${drink[quantityKey] ||
            "As much as you want"}</li>
      `)
        );
    }
    return drinkElement;
  });
  $("#results").html("");
  $("#results").append(...drinksElements);
}

function watchForm() {
  $("#nameForm").on("submit", event => {
    event.preventDefault();
    const text = $(event.currentTarget)
      .find("#nameInput")
      .val();
    $.ajax({
      url: "https://www.thecocktaildb.com/api/json/v1/1/search.php",
      data: {
        s: text
      },
      success: response => {
        insertCocktails(response.drinks);
      },
      error: error => {
        console.log(error);
      }
    });
  });
}

function init() {
  watchForm();
}

init();
