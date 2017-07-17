import React from 'react';

import { Link } from 'react-router-dom';

const Home = (props) => {

    const campuses = this.props.campuses
    return (
        <div className="section">

            <div className="container">
                <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
             {
               campuses && campuses.map(campus => (
                
                        <Link to = {`/campus/${campus.id}`} >
                        <h3>{campus.name}</h3>
                        <img src={`/img/${campus.name}.jpg`} name={campus.name} height="300" width="300"/>
                        </Link> 
                 ))
            }

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;