import React from 'react'
import Header from '../../components/header'
import FootNav from '../../components/footNav'
import mistrainImg from '../../static/images/icons/mistrain.jpg'

const Shop = props => {
  return (
    <div>
      <Header title="Shop" />
      <FootNav />

      <div className="container">
        <div className="row col-sm-6" style={{ marginTop: '59px' }}>
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img src={mistrainImg} alt="img" />
              <div className="caption">
                <h3>Thumbnail label</h3>
                <p>...</p>
                <p><button className="btn btn-primary" role="button">Button</button>
                  <button className="btn btn-default" role="button">Button</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Shop