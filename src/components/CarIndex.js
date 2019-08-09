import React from 'react';
import CarCard from './CarCard'
import CarSearch from './CarSearch'
import CarCollection from './CarCollection'

export default class CarIndex extends React.Component {
    state = {
        cars: [],
        searchTerm: ''
    }
      
    componentDidMount = () => {
        fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json')
        .then(res => res.json())
        .then(cars => this.setState({cars: cars.Results}))
    }
    
    filterSearch = (event) => {
        event.preventDefault()
        // console.log(event.target.search.value)
        this.setState({searchTerm: event.target.search.value})
    }
    
    render() {
        // console.log(this.state.cars)
        let targetCars = this.state.cars.filter(car => car.Model_Name.includes(this.state.searchTerm))
        return (
            <div>
                <CarSearch onSearchChange={this.filterSearch}/>
                <h1>Car List</h1>
                <CarCollection cars={targetCars}/>
            </div>
        );
      }
}