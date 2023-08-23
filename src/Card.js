import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function CardComponent(props) {
  return (
    <Card style={{ width: '15rem'}}>
    <Card.Img variant="top" src={props.product.thumbnail} width="100px" height="180px"/>
    <Card.Body>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Text>
        {props.product.description}
        </Card.Text>
        <ul>
            <li>Price: {props.product.price}</li>
            <li>Stock: {props.product.stock}</li>
            <li>Rating: {Math.floor(props.product.rating)}</li>
        </ul>
    </Card.Body>
    <Button variant="primary" className='sm'>Buy</Button>
    </Card>
  );
}

export default CardComponent;