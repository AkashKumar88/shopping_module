import React, { useState, useEffect } from "react";
// import data from "../data";
import MovieList from "./MovieList";

function Movies() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('/api/products')
        .then(function (response) { return response.json(); })
        .then(data => { setProducts(data);});
        // console.log(data1)
    //------using Axios --------------
    //console.log(fetchData);
    // const fetchData = async () => {
    //   const {data} = await Axios.get("/api/products");
    //   setProducts(data);
    //   console.log(data);
    // }
    //fetchData();

      return ()=> {
        //
      };
    },[])

        // console.log(products);
        return (
            <div>
                <MovieList movies = {products}/>
                {/* <ul>
                    {data.products.map(movies => <li>
                        {movies.title}
                    </li>)}
                </ul> */}
            </div>
        );
   
}

export default Movies;