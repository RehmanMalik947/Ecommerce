import React, { useState, useEffect } from 'react'

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
            <h1>Loading...</h1>
        )
    }

    const ShowProducts = () => {
        return (
            <div className="buttons d-flex justify-content-center mb-5 pd-5">
                <button className="btn btn-outline-dark me-2 ">
                    All
                </button>
                <button className="btn btn-outline-dark me-2">
                    Men's Clothing
                </button>
                <button className="btn btn-outline-dark me-2">
                    Women's Clothing
                </button>
                <button className="btn btn-outline-dark me-2">
                    Jewlery
                </button>
                <button className="btn btn-outline-dark me-2">
                    Electronic
                </button>
            </div>
        )
        
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
