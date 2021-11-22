import axios from 'axios'
import React, { Component } from 'react'
import PersonDetails from './PersonDetails'

export default class PersonList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            persons: []
        }
    }

    getUserData = () => {
        axios.get('https://randomuser.me/api/?results=10').then((res) => {
            console.log(res.data.results)
            this.setState({ persons: res.data.results })
        })
    }

    componentDidMount = () => {
        this.getUserData()
    }

    render() {
        return (
            <div>
                {this.state.persons.map((u) => <PersonDetails person={u}/>)}
            </div>
        )
    }
}
