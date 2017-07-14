import React from 'react';

const Root = ({children}) => (
    <div id="main" className="container-fluid">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">MHIAoJ</a>
                </div>

                <div id="nav-items" className="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="/api/add">Add Student or Instructor</a></li>
                        <li><a href="/api/">Student List</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <Navbar />
        { children }
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p>Copyright &copy; MHIAoJ 2017-----</p>
                </div>
            </div>
        </div>
    </div>
);

export default Root;