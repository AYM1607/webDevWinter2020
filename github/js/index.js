function insertRepos(repos) {
  console.log(repos);
  if (repos.length === 0) {
    $("#results").html(`
        <h4>Sorry!</h4>
        <p>No repos for this user, is it valid?</p>
      `);
    return;
  }
  const reposElements = repos.map(repo =>
    $(`
        <div class="repo">
            <h3>${repo.name}</h3>
            <a href="${repo.html_url}">${repo.html_url}</a>
        </div>
    `)
  );
  $("#results").html("");
  $("#results").append(...reposElements);
}

function watchForm() {
  $("#userFrom").on("submit", event => {
    event.preventDefault();
    const text = $(event.currentTarget)
      .find("#userInput")
      .val();
    $.ajax({
      url: `https://api.github.com/users/${text}/repos`,
      success: response => {
        insertRepos(response);
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
