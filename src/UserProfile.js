import React from 'react';
import PropTypes from 'prop-types'

function UserProfile(props) {
    return <div class="grid-item">
    <h1>{props.name}</h1>
    <p>Age: {props.age}</p>
    <p>Location: {props.location}</p>
    </div>
}

UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
}

export default UserProfile;