import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ErrorStyles = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid red;
  p {
    margin: 0;
  }
  strong {
    margin-right: 1rem;
  }
`;

const Error = ({ error }) => {
  if (!error) return null;
  return (
    <>
      <ErrorStyles>
        <p>
          <strong>Shoot!:</strong>
          {error}
          {console.log(error)}
        </p>
      </ErrorStyles>
    </>
  );
};

Error.defaultProps = {
  error: '',
};

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
