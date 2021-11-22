import React from 'react'
import {Image, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function PersonDetails(props) {
    return (
        <div style={{ backgroundColor: 'lightblue'}}>
            <div>
                <hr />
                <h3>
                    {props.person.name.title} {props.person.name.first} {props.person.name.last} -{' '}
                    {props.person.login.uuid}
                </h3>
                <hr />
                <div style={{float: 'left'}}>
                    <Image roundedCircle src={props.person.picture.large}></Image>
                    <Button style={{display: 'flex', marginLeft: '25px', marginTop: '25px'}}> Details </Button>
                </div>
                <div style={{display: 'grid'}}>
                    <h4 style={{marginLeft:'20px'}}>Username: {props.person.login.username}</h4>
                    <h4 style={{marginLeft:'20px'}}>Gender: {props.person.gender}</h4>
                    <h4 style={{marginLeft:'20px'}}>Time Zone Description: {props.person.location.timezone.description}</h4>
                    <h4 style={{marginLeft:'20px'}}>
                        Address: {props.person.location.street.number} {props.person.location.street.name}, {' '}
                        {props.person.location.city}, {props.person.location.state}, {props.person.location.country} -{' '}
                        {props.person.location.postcode}
                    </h4>
                    <h4 style={{marginLeft:'20px'}}>Email {props.person.email}</h4>
                    <h4 style={{marginLeft:'20px'}}>
                        Birth Date and Age: {props.person.dob.date} ({props.person.dob.age})
                    </h4>
                    <h4 style={{marginLeft:'20px'}}>Register Date: {props.person.registered.date}</h4>
                    <h4 style={{marginLeft:'20px'}}>Phone#: {props.person.cell}</h4>
                    <h4 style={{marginLeft:'20px'}}>Cell#: {props.person.cell}</h4>
                </div>
                <hr />
                <br/>
            </div>
        </div>
    )
}
