import React from "react";
import MovieCard from "./MovieCard";


class MovieList extends React.Component{

    
    render(){
        
        return (
            <div className="ui link cards">
            {this.props.movies.map(movie => <div className="card" key={movie.id} style={{'margin': '1rem'}}>
                <MovieCard movie={movie} />
            </div>)}
        </div>
        )
    }
}

export default MovieList;