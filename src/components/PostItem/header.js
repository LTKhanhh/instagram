import classNames from "classnames/bind";
import { faEllipsis, faComment, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './PostItem.module.scss';


const cx = classNames.bind(styles)


function Header() {
    return (
        <div className={cx('flex', 'info', 'items-center', 'justify-between')}>
            <div className={cx('info-left', 'flex', 'items-center')}>
                <div className={cx('info-user', 'flex')}>
                    <span className={cx('avatar')}>
                        <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg`}></img>
                    </span>
                    <span className={cx('name')}>ltk_cmbny</span>
                </div>
                <div className={cx('time')}>
                    <span>3 ngày</span>
                </div>
            </div>
            <div className={cx('info-right')}>
                <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
            </div>
        </div>

    );
}

export default Header;