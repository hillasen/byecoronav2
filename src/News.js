import react from 'react';
import PropTypes from 'prop-types';
import './News.css';
import {NavLink, Router} from "react-router-dom";

function News({title, description, url}){
    console.log("WEE")
    console.log(title);
    function mover(){
        console.log(url);
    }
    return (
        <div class="newser" >
            <div class="news"> <h1>{title}</h1>{description} </div>
        </div>

    );
}

News.propTypes = {
    title : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired
}

export default News;