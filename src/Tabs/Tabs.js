import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../Flex';
import Tab from './Tab';
import { ENTER_KEY, SPACEBAR } from '../constants';

const getTabContentId = ({ props: { children, id } }) =>
  children.props.id || `${id}-tab-content`;

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    const { activeTabId, children } = this.props;

    this.state = {
      activeTabId: activeTabId || children[0].props.id
    };
  }

  get activeTab() {
    const { activeTabId } = this.state;
    const { children } = this.props;
    return children.find(({ props: { id } }) => id === activeTabId);
  }

  get activeTabContent() {
    const { activeTab } = this;

    return React.cloneElement(activeTab.props.children, {
      id: getTabContentId(activeTab)
    });
  }

  activateTab = tab => {
    const { id } = tab.props;

    this.setState({ activeTabId: id });
  };

  handleKeyPress = (key, tab) => {
    if (key === ENTER_KEY || key === SPACEBAR) {
      this.activateTab(tab);
    }
  };

  render() {
    const { activeTabId } = this.state;
    const { Component, children, ...props } = this.props;

    return (
      <>
        <Component {...props}>
          {children.map(tab => {
            const { id, title } = tab.props;
            const active = activeTabId === id;
            const tabContentId = getTabContentId(tab);

            return React.cloneElement(
              tab,
              {
                'aria-controls': tabContentId,
                'aria-selected': active ? 'true' : 'false',
                active,
                key: id,
                onClick: () => this.activateTab(tab),
                onKeyPress: ({ key }) => this.handleKeyPress(key, tab)
              },
              title
            );
          })}
        </Component>
        {this.activeTabContent}
      </>
    );
  }
}

Tabs.propTypes = {
  Component: PropTypes.elementType,
  activeTabId: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(Tab),
    PropTypes.objectOf(Tab)
  ]).isRequired
};

Tabs.defaultProps = {
  Component: Flex,
  activeTabId: undefined
};

export default Tabs;