import classNames from "classnames/bind";

import styles from './Comment.module.scss';

const cx = classNames.bind(styles)

function Comment({ name, comment, day, like, canReply, repList }) {
    return (
        <div className={cx('flex', 'container', 'mt-5', 'relative')}>
            <span className={cx('absolute', 'top-7', 'right-2', 'w-5')}>
                <img src={`${process.env.PUBLIC_URL}/heart-regular.svg`}></img>
            </span>
            <span className={cx('avatar')}>
                <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg`}></img>
            </span>
            <div className={cx('details', 'flex', 'flex-col')}>
                <div className={cx('content')}>
                    <span className={cx('name')}>ltk_cmbny</span>
                    <span className={cx('comment')}>tình </span>
                </div>
                <div className={cx('actions', 'flex')}>
                    <span className={cx('day')}> 3 ngày</span>
                    <span className={cx('like')}>5 lượt thích</span>
                    <span >Trả lời</span>
                </div>
                <div className={cx('reply')}>
                    <span className={cx('show')}>Xem câu trả lời</span>
                </div>
            </div>
        </div>
    );
}

export default Comment;