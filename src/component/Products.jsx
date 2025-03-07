import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';

export default function Products() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(true);
    let componentMounted = true;
    useEffect(() => {
        const getProdcuts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products")
            if (componentMounted) {
                setData(await response.clone().json());
                console.log(data);
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }

            return () => {
                componentMounted = false;

            }
        }
        getProdcuts();
    }, []);


    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        )
    };

    const filterProduct = (cat) => {
        const updatelist = data.filter((x)=>x.category === cat);
        setFilter(updatelist);
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pd-5">
                    <button className="btn btn-outline-dark me-2 " onClick={() => setFilter(data)}>
                        All
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>
                        Men's Clothing
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>
                        Women's Clothing
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>
                        Jewlery
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>
                        Electronic
                    </button>
                </div>

                {filter.map((i) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4" key={i.id} >
                                <div className="card h-100  text-center p-4 " >
                                    <img src={i.image} className="card-img-top " height="250px" alt={i.title} />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{i.title.substring(0, 12)}...</h5>
                                        <p className="card-text lead fw-bold">${i.price}</p>
                                        <a href="#" className="btn btn-outline-dark">
                                            Buy Now
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </>
                    )
                })}
            </>
        );
    }
    return (
        <div>
            <div className="container my-5 py-5" >
                <div className="row">
                    <div className="col-12 fw-bolder text-center">
                        <h1>
                            Latest Products
                        </h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <ShowProducts />
                </div>
            </div>
        </div>
    )
}
