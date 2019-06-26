import React from 'react';
import { Section, Column, Columns } from 'bloomer';
import PropTypes from 'prop-types';

import ProfileCard from './card';

const CardList = props => {
    const { userData } = props;
    console.log(userData)
    return (
        <Section>
            <Columns>
                {userData.length > 0 ? 
                    userData.map(user => 
                        <Column key={user.login.uuid}>
                            <ProfileCard user={user} />
                        </Column>
                    )
                : 
                    <li>No User Data</li>
                }
            </Columns>
        </Section>
    );
}

export default CardList;

CardList.propTypes = {
    userData: PropTypes.array
}