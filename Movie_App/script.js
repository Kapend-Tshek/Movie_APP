document.getElementById('movieForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const movieTitle = document.getElementById('movieTitle').value;
    const apiKey = '77af2f77'; // Remplacez par votre clé API OMDb

    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                document.getElementById('movieTitleDisplay').innerText = data.Title;
                document.getElementById('movieYear').innerText = `Year: ${data.Year}`;
                document.getElementById('moviePlot').innerText = data.Plot;
                document.getElementById('movieGenre').innerText = data.Genre;
                document.getElementById('movieActors').innerText = data.Actors;

                if (data.Poster && data.Poster !== "N/A") {
                    document.getElementById('moviePoster').src = data.Poster;
                    document.getElementById('moviePoster').style.display = 'block';
                } else {
                    document.getElementById('moviePoster').style.display = 'none';
                }

                document.getElementById('movieDetails').style.display = 'block';
            } else {
                alert('Movie not found!');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('An error occurred. Please try again.');
        });
});
