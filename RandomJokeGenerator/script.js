document.addEventListener("DOMContentLoaded", () => {
    const fetchJokeButton = document.getElementById("fetchJokeButton");
    const categorySelect = document.getElementById("category");
    const jokeDisplay = document.getElementById("jokeDisplay");
  
    fetchJokeButton.addEventListener("click", () => {
      const selectedCategory = categorySelect.value;
      fetchJoke(selectedCategory);
    });
  
    function fetchJoke(category) {
      const apiUrl = `https://v2.jokeapi.dev/joke/${category}`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          if (data.joke) {
            jokeDisplay.textContent = data.joke;
          } else if (data.setup && data.delivery) {
            jokeDisplay.textContent = `${data.setup} ${data.delivery}`;
          } else {
            jokeDisplay.textContent = "No joke found in the API response.Please select the correct category.!";
          }
        })
        .catch(error => {
          console.error("Error fetching joke:", error);
        });
    }
  });
  