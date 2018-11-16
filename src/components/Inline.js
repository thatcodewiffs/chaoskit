import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Inline = (props) => {
  const { align, children, className, size, wrap, ...opts } = props;
  const classes = cx('inline', className, {
    'inline--small': size === 'small',
    'inline--medium': size === 'medium',
    'inline--large': size === 'large',
    'inline--xlarge': size === 'xlarge',
    'inline--center': align === 'center',
    'inline--right': align === 'right',
    'inline--between': align === 'between',
    'inline--noWrap': !wrap,
  });

  return (
    <div className={classes} {...opts}>
      {children}
    </div>
  );
};

Inline.propTypes = {
  align: PropTypes.oneOf(['center', 'right', 'between']),
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  wrap: PropTypes.bool,
};

Inline.defaultProps = {
  wrap: true,
};

export default Inline;