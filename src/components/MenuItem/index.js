import classNames from "classnames/bind";

import styles from './MenuItem.module.scss'

const cx = classNames.bind(styles)
function MenuItem({
    icon,
    text,
    to,
    href,
    primary = false,
    current = false,
    info = false,
    more = false,
    ...passprop
}) {
    return (
        <div className={cx('container', more && 'more')} >
            <span className={cx('icon', info && 'info-icon')}>{icon}</span>
            <span className={cx('title', current && 'current')}>{text}</span>
        </div>
    );
}

export default MenuItem;