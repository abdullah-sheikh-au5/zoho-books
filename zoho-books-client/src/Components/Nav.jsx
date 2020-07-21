import React from 'react';

const Nav = () => {
    return (
        <div className='mt-2 d-flex justify-content-between'>
            <div className="dropdown">
                <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    All Contacts
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div className='d-flex'>
                <button className='btn btn-danger' ><i className="fa fa-plus fa-lg" aria-hidden="true"></i>  New</button>
                <button className='btn border ml-1'><i className="fa fa-cog" aria-hidden="true"></i></button>
                <button className='btn border ml-1'><i className="fa fa-bars" aria-hidden="true"></i></button>
                <a className='mt-2 ml-1' href="*"><i className="fa fa-lightbulb-o" aria-hidden="true"></i> Page Tips</a>
            </div>
        </div>
    );
};

export default Nav;