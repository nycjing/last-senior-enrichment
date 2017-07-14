import React from 'react';

const Home = (props) => {

    return (
        <div className="section">

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <a href="/api/1">
                            <h3>Griffindor</h3>
                            <img src="/img/Griffindor.jpg" name="Griffindor" height="300" width="300"/>
                        </a>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <a href="/api/3">
                            <h3>Slytherin</h3>
                            <img src="/img/Slytherin.jpg" name="Slytherin" height="300" width="300"/>
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <a href="/api/2">
                            <h3>Ravenclaw</h3>
                            <img src="/img/Ravenclaw.jpg" name="Ravenclaw" height="300" width="300"/>
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <a href="/api/4">
                            <h3>Hufflepuff</h3>
                            <img src="/img/Hufflepuff.jpg" name="Hufflepuff" height="300" width="300"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;