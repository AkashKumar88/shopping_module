import React from 'react';

class MovieRating extends React.Component{
    render(){
        return (
            <div className="rating">
                {parseInt(this.props.rating) === 1 && 
                <>⭐☆☆☆☆</>
                }
                {parseInt(this.props.rating) === 2 && 
                <>⭐⭐☆☆☆</>
                }
                {parseInt(this.props.rating) === 3 && 
                <>⭐⭐⭐☆☆</>
                }
                {parseInt(this.props.rating) === 4 && 
                <>⭐⭐⭐⭐☆</>
                }
                {parseInt(this.props.rating) === 5 && 
                <>⭐⭐⭐⭐⭐</>
                }
                
            </div>
        );
    }
}

export default MovieRating;