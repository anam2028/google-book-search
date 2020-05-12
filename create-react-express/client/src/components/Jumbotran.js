import React from 'react';
import Container from './Container';
import Row from './Row';
import Column from './Column';
import {NavLink } from 'react-router-dom';

const Jumbotran = props => {
    return (
        <div
        className={`
            jumbotran
            ${props.fluid ? 'jumbotran-fluid' : ''}
            bg-${props.bg || 'default'}
            text-${props.text || 'dark'}
            text-center
        `} >
            <Container>
                <Row helper = {'justify-content-around'}>
                    <Column>
                <h1>{props.pageTitle}</h1>
                </Column>
                </Row>
                <Row helper = {'justify-content-around'}>
                    <Column md={6}>
                        <NavLink to='/search' className='btn btn-info btn-lg'>
                            Search
                        </NavLink>
                </Column>
                <Column md={6}>
                        <NavLink to='/saved' className='btn btn-info btn-lg'>
                            Saved
                        </NavLink>
                </Column>
                </Row>
            </Container>

        </div>
    )
}

export default Jumbotran;