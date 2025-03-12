import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ name, age, hobby }) => {
    return (
        <div>
            <h1>{name}</h1>

            {/* Умовне відображення віку */}
            {age && <p>Age: {age}</p>}

            {/* Умовне відображення хобі */}
            {hobby && <p>Hobby: {hobby}</p>}
        </div>
    );
};

// Типізація пропсів за допомогою PropTypes
UserProfile.propTypes = {
    name: PropTypes.string.isRequired, // name обов'язковий
    age: PropTypes.number, // age необов'язковий
    hobby: PropTypes.string, // hobby необов'язковий
};
UserProfile.defaultProps = {
    age: 18,
    hobby: "none",
}

export default UserProfile;
