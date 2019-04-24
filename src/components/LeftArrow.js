import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './styles/LeftArrow.scss';

const LeftArrow = (props) => {
  return (
    <div className="LeftArrow">
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
}

export default LeftArrow;