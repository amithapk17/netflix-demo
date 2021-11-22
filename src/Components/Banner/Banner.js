import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants';
import YouTube from 'react-youtube';

function Banner() {

const [movie, setMovie] = useState();
const [urlId, setUrlId] = useState('');

    useEffect(() => {
        axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            setMovie(response.data.results[0]);
        });
    }, []);

    const opts = {
        height: '300',
        width: '100%',
        playerVars: {
            autoplay: 0,
        }
    };

    const handleBannerClick = (id) => {
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0]);
            } else{
                console.log('Trailer Array Empty');
            }
        })
    };


    return (
        <div>
        <div className='banner' 
        style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path : ""})`}}>
            <div className='content'>
                <h1 className='title'>{movie? movie.title: ""}</h1>
                <div className='banner_buttons'>
                    <button className='button' onClick ={()=>handleBannerClick(movie.id)}> Play </button>
                    <button className='button'> My List</button>
                </div>
                <h1 className='description'>{movie? movie.overview: ""}</h1>
            </div>
            <div className="fade_bottom" ></div>
            <div className='banner_video'>
         
            </div>
        </div>
           {urlId && <YouTube videoId={urlId.key} opts={opts}/>} 
           </div>
    )
}

export default Banner;
