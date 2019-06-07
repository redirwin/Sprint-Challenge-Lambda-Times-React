import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  const getClassName = () => {
    if (props.tab === props.selectedTab) {
      return "tab active-tab";
    } else {
      return "tab";
    }
  };

  return (
    <div
      className={`${getClassName()}`}
      onClick={() => props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string
};

export default Tab;
