import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './styles/RightArrow.scss';

const RightArrow = (props) => {
  return (
    <div className="RightArrow">
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
}

export default RightArrow;