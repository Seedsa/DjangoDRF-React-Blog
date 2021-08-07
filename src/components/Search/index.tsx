import React from 'react';
import styles from './index.less';
import cs from 'classnames';
import IconFont from '@/components/IconFont';

interface SearchProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const Search: React.FC<SearchProps> = ({ visible, setVisible }) => {
  return (
    <div className={cs(styles.searchWrap, visible && styles.show)}>
      <a className={styles.closeBtn}>
        <IconFont
          type="icon-close"
          onClick={() => {
            setVisible(false);
          }}
        />
      </a>
      <div className={styles.container}>
        <form className={styles.searchForm}>
          <div className={styles.groupInline}>
            <div className={styles.searchIcon}>
              <IconFont type="icon-search" />
            </div>
            <input
              type="text"
              placeholder="输入搜索文章"
              role="searchbox"
              aria-label="输入搜索文章"
              className={styles.searchInput}
            />
          </div>
        </form>
        {/* <div className={styles.closeNote}> ESC 关闭</div> */}
      </div>
    </div>
  );
};

export default Search;
