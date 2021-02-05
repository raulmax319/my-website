import React from 'react';
import PropTypes from 'prop-types';

function Navlist({ link }) {
  return (
    <div>
      <li>
        <a href="#">{link}</a>
      </li>
    </div>
  );
}

Navlist.propTypes = {
  link: PropTypes.string,
};

export default Navlist;
