import React from 'react';
import cs from 'classnames';
import styles from './index.less'; //已启用 CSS Modules

interface IconFontProps {
  type: string;
  classNames?: string;
  onClick?: () => void;
}
const IconFont: React.FC<IconFontProps> = (props) => {
  const { type, classNames, onClick } = props;

  return (
    <svg fill="currentColor" onClick={onClick} className={cs(styles.svgClass, classNames)}>
      <use xlinkHref={type} />
    </svg>
  );
};

export default IconFont;
