import React from 'react';

function Counter() {
  return (
    <section className="middle" id="#contact">
      <div className="counting-sec">
        <div className="inner-width">
          <div className="col">
            <i className="fas fa-coffee"></i>
            <div className="number num">500</div>
            Cups Of Coffee
          </div>

          <div className="col">
            <i className="fas fa-briefcase"></i>
            <div className="number num">110</div>
            Completed Projects
          </div>

          <div className="col">
            <i className="fas fa-users"></i>
            <div className="number num">100</div>
            Happy Customers
          </div>

          <div className="col">
            <i className="fas fa-star"></i>
            <div className="number num">96</div>
            Full-Star Reviews
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Counter);
