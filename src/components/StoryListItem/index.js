import classNames from "classnames/bind";

import styles from './StoryListItem.module.scss'

const cx = classNames.bind(styles)

function StoryListItem({ avatar, name }) {
    return (
        <div className={cx('container', 'flex', 'flex-col')}>
            <div className={cx('avatar')}>{avatar}</div>
            <div className={cx('name')}>{name}</div>
        </div>
    );
}

export default StoryListItem;