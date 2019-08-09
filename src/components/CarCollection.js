import React from 'react'
import CarCard from './CarCard'
import { Card } from 'semantic-ui-react'

class CarCollection extends React.Component {

  render() {
    let carArray = this.props.cars.map(carObj => <CarCard key={carObj.id} car={carObj}/>)
    return (
        <Card.Group itemsPerRow={6}>
            {carArray}
        </Card.Group>
    )
  }
}

export default CarCollection