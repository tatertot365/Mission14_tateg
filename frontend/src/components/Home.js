import React from 'react';
import JoelHilton from './JoelHiltonHeadshot.jpg';

{
    /* This is the home page of the website. */
}
const Home = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center">
                Welcome to Joel's Movie Collection website!
            </h1>
            <div className="row mt-5">
                <div className="col-md-4 offset-md-4">
                    <img
                        src={JoelHilton}
                        alt="Joel Hilton"
                        className="img-fluid rounded-circle"
                    />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-8 offset-md-2">
                    <p className="text-center">
                        This website is meant to pay homage to Joel Hilton and
                        his wonderful movie knowledge.
                    </p>
                    <p className="text-center">
                        Make sure to navigate around and look at Joel's podcast
                        website as well as his movie collection.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
