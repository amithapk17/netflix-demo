import React, { useEffect, useState } from 'react';
import './Rowpost.css';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants';
import YouTube from 'react-youtube';

function RowPost(props) {

    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState('');

    useEffect(() => {
        axios.get(props.url).then(response => {
            console.log(response.data);
            setMovies(response.data.results);
        });
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };

    const handleMoveClick = (id) => {
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0]);
            } else{
                console.log('Trailer Array Empty');
            }
        })
    };


    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj) =>
                    <img onClick={()=>handleMoveClick(obj.id)} className={props.isSmall ? 'smallPost' : 'poster'}
                        src={`${imageUrl + obj.backdrop_path}`} alt='poster' />
                )}
            </div>
            {urlId && <YouTube videoId={urlId.key} opts={opts}/>}
        </div>
    )
}

export default RowPost
