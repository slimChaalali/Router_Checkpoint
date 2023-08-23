import React, { useEffect, useState } from 'react'
import './FilmDetails.css'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';


const FilmDetails = ({ movies }) => {
    const { key } = useParams();
    const [movie, setMovie] = useState(movies[key]);

    useEffect(() => {
        setMovie(movies[key]);
    }, [key]);

    return (
        <div className='main'>
            <div className='film'>
                <div>
                    <Card className='movie-card' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`../../${movie.img}`} />
                        <Card.Body>
                            <Card.Link className='card-link' href="#">Add to favorite</Card.Link>
                            <Card.Link href="#">Download</Card.Link>
                        </Card.Body>
                    </Card>
                </div>


                <div className='movie-detail'>
                    <h1>{movie.title}</h1>
                    <p><span>Realising date:</span> {movie.date}</p>
                    <p><span>Categorie:</span>{movie.categorie} </p>
                    <p>
                        {movie.description}
                    </p>
                    <p><span>Starring: </span>{movie.starring}</p>
                    <p><span>Directed by:</span> {movie.directed}</p>
                </div>
            </div>
            <div className='trailer'>
                <h3>TRAILER</h3>
            </div>
            <div className='video-box'>
                <iframe width="100%" height="100%" src={movie.video} frameborder="0" allowfullscreen></iframe>
            </div>
        </div>

    )
    
}

export default FilmDetails