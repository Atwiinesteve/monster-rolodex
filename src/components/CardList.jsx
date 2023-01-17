// importing react component from react.
import React from 'react';
import { Component } from "react";

// card list component.
class CardList extends Component {

    render() {

        // props
        const { users } = this.props;

        return(

            <div>

                { 
                    users.map((user) => (
                        <h1 key={user.id} >{ user.name }</h1>
                    ))
                }

            </div>

        )

    }

};

// exporting component.
export default CardList;
