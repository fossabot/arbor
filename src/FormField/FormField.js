import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../Flex';
import Label from '../Label';
import Paragraph from '../Paragraph';
import StyledFormField from './StyledFormField';

const FormField = ({ caption, children, label, secondaryLabel, id }) => (
  <StyledFormField caption={caption}>
    <Flex>
      {label && (
        <Flex flex="1" alignItems="center">
          <Label htmlFor={id}>{label}</Label>
        </Flex>
      )}
      {secondaryLabel && <Flex flex="0">{secondaryLabel}</Flex>}
    </Flex>
    {children}
    {caption && (
      <Paragraph as="span" variant="tiny" color="red">
        {caption}
      </Paragraph>
    )}
  </StyledFormField>
);

FormField.propTypes = {
  /**
   * Optional text to be displayed underneath the input.
   */
  caption: PropTypes.string,

  /** Field to be rendered within the FormField component
   */
  children: PropTypes.node.isRequired,

  /**
   * HTML ID for the input to be used in conjunction with the label for
   * accessiblity.
   */
  id: PropTypes.string.isRequired,

  /**
   * Label text for the form field
   */
  label: PropTypes.string,

  /**
   * Component that goes to the right of the label. Does not have to only be text.
   */
  secondaryLabel: PropTypes.node
};

FormField.defaultProps = {
  caption: '',
  label: '',
  secondaryLabel: null
};

export default FormField;
