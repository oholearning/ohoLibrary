import React, { Component } from 'react';

export default class Card extends Component {
    constructor(props) {
        super(props)
    

    }

    render () {
        

        return (
        <div className="card card-lift--hover shadow border-0">
            <div className="card-body py-5">
              <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                <i className="ni ni-check-bold"></i>
              </div>
              <h6 className="text-primary text-uppercase">{this.props.title}</h6>
              <p className="description mt-3 text-capitalize">{this.props.description}</p>
              <div>
                <span className="badge badge-pill badge-primary">design</span>
                <span className="badge badge-pill badge-primary">system</span>
                <span className="badge badge-pill badge-primary">creative</span>
              </div>
              <a href="#" className="btn btn-primary mt-4">Browse</a>
            </div>
          </div>
        );
    }
}