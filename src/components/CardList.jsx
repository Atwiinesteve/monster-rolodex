// importing react component from react.
import React from 'react';
import { Component } from "react";
import Card from './Card';

// card list component.
class CardList extends Component {

    render() {

        // props
        const { users } = this.props;

        return (
            <>
                <Card users={users} />
            </>
        )
        
        

    }

};

// exporting component.
export default CardList;
