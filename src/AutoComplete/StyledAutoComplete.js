import React from 'react';
import ReactSelect from 'react-select';
import ReactSelectAsync from 'react-select/async';
import ReactSelectAsyncCreatable from 'react-select/async-creatable';
import ReactSelectCreatable from 'react-select/creatable';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';

import StyledClearIndicator from './StyledClearIndicator';
import StyledMultiValue from './StyledMultiValue';
import buildReactSelectThemeOverrides from './buildReactSelectThemeOverrides';

const addStyles = styles => provided => ({ ...provided, ...styles });

const components = {
  MultiValue: StyledMultiValue,
  ClearIndicator: StyledClearIndicator
};

const getReactSelectComponent = variant => {
  switch (variant) {
    case 'async':
      return ReactSelectAsync;
    case 'asyncCreatable':
      return ReactSelectAsyncCreatable;
    case 'creatable':
      return ReactSelectCreatable;
    default:
      return ReactSelect;
  }
};

const getStyles = (
  { radii, shadows, brandFont, space },
  { hideDropdownIndicator }
) => ({
  container: addStyles({
    fontFamily: brandFont,
    marginBottom: space.smallest,
    marginTop: space.smallest
  }),
  control: addStyles({ boxShadow: 'none' }),
  dropdownIndicator: addStyles(
    hideDropdownIndicator ? { display: 'none' } : {}
  ),
  indicatorSeparator: addStyles({ display: 'none' }),
  input: addStyles({ marginTop: `-${space.smallest}` }),
  menu: addStyles({
    borderRadius: radii.large,
    boxShadow: shadows.elevation2
  }),
  valueContainer: addStyles({ padding: `${space.smallest} ${space.smaller} 0` })
});

const StyledAutoComplete = ({ theme, variant, ...props }) => {
  const SelectComponent = getReactSelectComponent(variant);
  const reactSelectProps = {
    components,
    styles: getStyles(theme, props),
    theme: reactSelectTheme => ({
      ...reactSelectTheme,
      ...buildReactSelectThemeOverrides(theme)
    }),
    ...props
  };

  return <SelectComponent {...{ ...reactSelectProps, ...props }} />;
};

StyledAutoComplete.propTypes = {
  theme: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  variant: PropTypes.oneOf(['async', 'asyncCreatable', 'creatable', 'default'])
};

StyledAutoComplete.defaultProps = {
  variant: 'default'
};

export default withTheme(StyledAutoComplete);