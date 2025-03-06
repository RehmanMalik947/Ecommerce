import React from 'react'
import Products from './Products'

export default function Home() {
    return (
        <div class="Hero">
            <div class="card text-white bg-dark border-0">
                <img src="\src\assets\bg.jpg" class="card-img" alt="background" height="550px" />
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 class="card-title display-3 text-black fw-bold">New Season Arrival</h5>
                        <p class="card-text text-black lead fs-2" >Check out all the trend</p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    )
}
