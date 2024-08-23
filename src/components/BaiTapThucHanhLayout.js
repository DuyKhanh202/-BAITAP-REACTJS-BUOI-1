import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BaiTapThucHanhLayout = () => {
    return (
        <div>
            {/* Header */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container px-lg-5">
                    <a className="navbar-brand" href="#!">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Banner */}
            <header className="py-5">
                <div className="container px-lg-5">
                    <div className="p-4 p-lg-5 bg-light rounded-3 text-start">
                        <div className="m-4 m-lg-5">
                            <h1 className="display-5 fw-bold">A warm welcome!</h1>
                            <p className="fs-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                            <a className="btn btn-primary btn-lg" href="#!">Call to action</a>
                        </div>
                    </div>
                </div>
            </header>


            {/* Items */}
            <section className="pt-4">
                <div className="container px-lg-5">
                    <div className="row gx-lg-5">
                        <div className="col-md-3 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <img className="card-img-top" src="https://i.pinimg.com/originals/ce/7f/55/ce7f55d0ce9ec88c238f4f0f5731d809.jpg" alt="Card image cap" />
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <h5 class="card-title mt-1">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Find Out More!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <img className="card-img-top" src="https://i.pinimg.com/originals/ce/7f/55/ce7f55d0ce9ec88c238f4f0f5731d809.jpg" alt="Card image cap" />
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <h5 class="card-title mt-1">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Find Out More!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <img className="card-img-top" src="https://i.pinimg.com/originals/ce/7f/55/ce7f55d0ce9ec88c238f4f0f5731d809.jpg" alt="Card image cap" />
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <h5 class="card-title mt-1">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Find Out More!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <img className="card-img-top" src="https://i.pinimg.com/originals/ce/7f/55/ce7f55d0ce9ec88c238f4f0f5731d809.jpg" alt="Card image cap" />
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <h5 className="card-title mt-1">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Find Out More!</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>




            {/* Footer */}
            <footer className="py-5 bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p>
                </div>
            </footer>
        </div >
    );
}

export default BaiTapThucHanhLayout;
