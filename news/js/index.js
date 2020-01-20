function insertNews(newsArray) {
  if (newsArray.length === 0) {
    $("#results").html(`
        <h4>Sorry!</h4>
        <p>No news about this topic yet</p>
      `);
    return;
  }
  const newsEelemts = newsArray.map(news =>
    $(`
        <div class="newsItem">
            <h3>${news.title}</h3>
            <p> By: ${news.author || "Unknown"} </p>
            <p class="imageContainer">
                <img src="${news.urlToImage}" class="newsImage"/>
            </p>
            <p>${news.description} </p>
        </div>
    `)
  );
  $("#results").html("");
  $("#results").append(...newsEelemts);
}

function watchForm() {
  $("#keywordForm").on("submit", event => {
    event.preventDefault();
    const text = $(event.currentTarget)
      .find("#keywordInput")
      .val();
    $.ajax({
      url: "https://newsapi.org/v2/top-headlines",
      data: {
        q: text,
        apiKey: "05999112ed464d9b9cccbaa799a9405f"
      },
      success: response => {
        insertNews(response.articles);
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
