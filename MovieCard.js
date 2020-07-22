import React from 'react';
import MovieRating from './MovieRating';

class MovieCard extends React.Component{
    render(){
        return (
        <>
            
            <div className="image">
                <img src={this.props.movie.image} alt={this.props.movie.title}/>
            </div>
            <div className="middle aligned content">
                <a  href="/" className="header" style={{background: 'none'}}>{this.props.movie.title}</a>
                <div className="meta">
                    <span>Subtitle</span>
                </div>
                <div className="description">
                    <p>{this.props.movie.subtitle}</p>
                    
                </div>
            
                     <div className="ui right floated large primary button">
                        Buy tickets
                        <i className="right chevron icon"></i>
                </div>
                <MovieRating rating={this.props.movie.rating} />
               
                
            
    </div>
    </>

        )
    }
}

export default MovieCard;