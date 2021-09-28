import React from 'react'
import food_0 from './../img/food_0.jpg';

const Hero = () => {
    return (
        <>
            <section className="pt-5">
                <div className="container">
                    <div className="row align-items-center align-content-center"
                    style={{height: "600px"}}>
                        <div className="col-md-6">
                            <h3>Welcome To Lorem</h3>
                            <h1 className="text-success fs-1 fw-bold">Vegetable Shop</h1>
                            <p className="fw-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                             Voluptatem exercitationem tempora, nostrum nam iusto temporibus. Dignissimos sit 
                             cumque repellat, totam atque illum voluptas praesentium fugiat, excepturi 
                             reprehenderit quos sed beatae?</p>
                        </div>
                        <div className="col-md-6 text-center">
                            <img src={food_0} width="700px" height="500px" alt="img-fluid img-food w-75" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
