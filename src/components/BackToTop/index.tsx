import React, { useEffect, useState } from 'react';
import cs from 'classnames';
import IconFont from '@/components/IconFont';
import getScroll from '@/utils/scroll';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import styles from './index.less';
import scroll from '@/utils/scrollTo';
const index = () => {
  const [visible, setVisible] = useState(true);
  const ref = React.createRef<HTMLDivElement>();
  const scrollEvent = React.useRef<any>();

  const getDefaultTarget = () =>
    ref.current && ref.current.ownerDocument ? ref.current.ownerDocument : window;

  const handleScroll = (e: React.UIEvent<HTMLElement> | { target: any }) => {
    const scrollTop = getScroll(e.target, true);
    setVisible(scrollTop > 400!);
  };

  const bindScrollEvent = () => {
    const getTarget = getDefaultTarget;
    const container = getTarget();
    scrollEvent.current = addEventListener(container, 'scroll', (e: React.UIEvent<HTMLElement>) => {
      handleScroll(e);
    });
    handleScroll({
      target: container,
    });
  };

  useEffect(() => {
    bindScrollEvent();
    return () => {
      if (scrollEvent.current) {
        scrollEvent.current.remove();
      }
      (handleScroll as any).cancel();
    };
  }, [window]);

  return (
    <div>
      <a
        className={cs(styles.backBtn, visible && styles.show)}
        onClick={() => {
          scroll(0);
        }}
      >
        <IconFont type="icon-fanhuidingbu" />
      </a>
    </div>
  );
};

export default index;
