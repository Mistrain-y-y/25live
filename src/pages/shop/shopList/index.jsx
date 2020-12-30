import React from 'react'

const ShopList = props => {
  return (
    <div className="thumbnail" style={{display: 'inline-block',width: '50%'}}>
      <img src={props.item.img} alt="img" style={{width: '3rem', height: '3rem'}}/>
      <div className="caption">
        <h3>{props.item.name}</h3>
        <p style={{color: '#666'}}>{props.item.description}</p>
        <p style={{fontSize: '0.32rem', color: '#f97d93', fontWeight: 700, marginBottom: 0}}>{props.item.price}&nbsp;
         <span style={{color: '#666'}}>RMB</span>
         </p>
         <p style={{color: '#9a9a9a'}}>
         月售 <span>{props.item.count}</span> 件
         </p>
        <p><button
         className="btn btn-primary" 
        role="button"
        onClick={props.clickShowAlert}
        >收藏</button>
          <button className="btn btn-default" role="button">查看详情</button></p>
      </div>
    </div>
  )
}

export default ShopList