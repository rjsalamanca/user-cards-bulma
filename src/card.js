import React from 'react';

import { Card, CardImage, Image, Content } from 'bloomer';


const ProfileCard = props => {
    const { user } = props;
    return (
        <Card>
            <CardImage>
                <Image  src={user.picture.large} alt={user.name.first} />
            </CardImage>
            <Content>
                <h4>{user.name.first} {user.name.last}</h4>

            </Content>
        </Card>
    );
}

export default ProfileCard;