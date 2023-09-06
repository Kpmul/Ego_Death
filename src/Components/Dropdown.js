import React, { Component } from 'react';
export class Dropdown extends Component {

    render() {
        return(
            <div className="btn-group">
  <button type="button colour" className="btn btn-danger ">Buy</button>
  <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Profile</a></li>
    <li><a className="dropdown-item" href="#">Settings</a></li>
    <li><hr className="dropdown-divider"></hr></li>
    <li><a className="dropdown-item" href="#">Log Out</a></li>
  </ul>
</div>
        )
    }
}

export default Dropdown;

