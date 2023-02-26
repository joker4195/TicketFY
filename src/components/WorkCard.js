import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const WorkCard = ({item}) => {
  return (
    <div className="container">
    <div className="row">
      <div className='col col-sm-12'>
      <h1>Card1</h1>
      </div>
      <div className='col col-sm-12'>
      <h1>Card1</h1>
      </div>
      <div className='col col-sm-12'>
      <h1>Card1</h1>
      </div>
      <div className='col col-sm-12'>
      <h1>Card1</h1>
      </div>
      <div className='col col-sm-12'>
      <h1>Card1</h1>
      </div>
      <div className='col col-sm-12'>
      <h1>Card1</h1>
      </div>
      {/* <div className="col-sm">
        One of three columns
      </div>
      <div className="col-sm">
        One of three columns
      </div>
      <div className="col-sm">
        One of three columns
      </div> */}
    </div>
  </div>
  )
}

export default WorkCard




// <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={item.imgsrc}/>
//       <Card.Body>
//         <Card.Title>{item.title}</Card.Title>
//         <Card.Text>
//         {item.text}
//         </Card.Text>
//       </Card.Body>
//     </Card>