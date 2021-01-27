import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

import ImageLogo from '../../assets/catquiz.png';

function Logo({ className }) {
  return (

    <img
      className={className}
      src={ImageLogo}
      alt="Logo"
      width={264}
      height={238}
    />

  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
