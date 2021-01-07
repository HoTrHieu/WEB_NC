import React, { Component } from 'react';

class Service extends Component {
  render() {
    return (
      <div>
        <section id="mu-service">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="mu-service-area">

                  <div className="mu-service-single">
                    <span className="fa fa-book"></span>
                    <h3>Learn Online</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima officiis, deleniti dolorem exercitationem praesentium, est!</p>
                  </div>

                  <div className="mu-service-single">
                    <span className="fa fa-users"></span>
                    <h3>Expert Teachers</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima officiis, deleniti dolorem exercitationem praesentium, est!</p>
                  </div>

                  <div className="mu-service-single">
                    <span className="fa fa-table"></span>
                    <h3>Best Classrooms</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima officiis, deleniti dolorem exercitationem praesentium, est!</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Service;