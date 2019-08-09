import React from 'react';
import { Card } from 'semantic-ui-react'

export default class CarCard extends React.Component {

    render() {
        return(
            <Card>
                <div>
                    <div className="content">
                        <div className="header">Model Name: {this.props.car.Model_Name}</div>
                    </div>
                    <div className="extra content">
                        <span>
                        Model ID: {this.props.car.Model_ID}
                        </span>
                    </div>
                </div>
            </Card>
        )
    }
}