import React from 'react';

function Counter() {
  return (
    <section className="middle" id="#contact">
      <div className="counting-sec">
        <div className="inner-width">
          <div className="col">
            <i className="fas fa-coffee"></i>
            <div className="num">1005</div>
            Cups Of Coffee
          </div>

          <div className="col">
            <i className="fas fa-briefcase"></i>
            <div className="num">1120</div>
            Completed Projects
          </div>

          <div className="col">
            <i className="fas fa-users"></i>
            <div className="num">950</div>
            Happy Customers
          </div>

          <div className="col">
            <i className="fas fa-star"></i>
            <div className="num">940</div>
            Full-Star Reviews
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
