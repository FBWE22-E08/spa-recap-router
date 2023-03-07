import { useEffect, useState } from "react";

export default function SearchMovie() {
    //s= search in api
    const apilink = "https://www.omdbapi.com/?s=ironman&apikey=YourAPIKEY"
    const [movies, setMovies] = useState([])
    const [singleMovie, setSingleMovie] = useState('')
    useEffect(() => {
        // get all movies from api for ironman
        fetch(apilink)
            .then(resposne => resposne.json())
            .then(data => {
                console.log(data.Search)
                setMovies(data)
            })
            .catch(error => console.log(error))
    }, [])
    // get single movie
    const getMovie = (id) => {
        console.log(id)
        // i = imdbid in api
        fetch(`https://www.omdbapi.com/?i=${id}&apikey=YourAPIKEY`)
            .then(resposne => resposne.json())
            .then(data => {
                console.log(data)
                setSingleMovie(data)
            })
            .catch(error => console.log(error))
    }
    return (
        <>
            <h1>All movie list</h1>
            {
                movies.Search != null &&
                <ul>
                    {movies.Search.map((movie, index) => {
                        return (
                            <li key={index}>
                                Movie Title: {movie.Title}
                                , Year: {movie.Year},
                                <a href="#" onClick={() => getMovie(movie.imdbID)}>Id: {movie.imdbID}</a>
                            </li>
                        )
                    })}
                </ul>
            }

            {
                singleMovie !== '' &&
                <p>
                    <h2>You clicked this movie:</h2>
                    <img src={singleMovie.Poster} alt="no pic " />
                </p>


            }

        </>
    );
}
