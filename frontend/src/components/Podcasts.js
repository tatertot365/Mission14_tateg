import React from 'react';

// This is the podcasts page of the website.
const Podcasts = () => {
    return (
        <div className="container">
            <h1>My Podcasts</h1>
            <p>
                Check out Joel's podcast website at {'https://baconsale.com/'}
            </p>
            <a href="https://baconsale.com/" className="btn btn-primary">
                Go to BaconSale
            </a>
        </div>
    );
};

export default Podcasts;
