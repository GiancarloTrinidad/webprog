import React from 'react';
import PropTypes from 'prop-types'

function Greeting(props) {
    return <h2> {props.greeting}, {props.name}! </h2>
}

Greeting.propTypes = {
    name: PropTypes.number.isRequired,
    greeting: PropTypes.string.isRequired
}

export default Greeting;