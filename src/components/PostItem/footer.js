import classNames from "classnames/bind";
import { useState, useRef, useEffect } from "react";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEllipsis, faComment } from '@fortawesome/free-solid-svg-icons';
import styles from './PostItem.module.scss'

const cx = classNames.bind(styles)

function Pfooter({ handleSubmit, open, details = false }) {
    const [text, setText] = useState('');
    const isTextareaDisabled = text.trim().length !== 0;
    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(text.trim());
        setText("");
    };
    const textareaRef = useRef(null);

    return (
        <div className={cx('f-container')}>
            <div className={cx('font-bold', 'mb-2')} style={{ fontSize: '14px' }}>19.750 lượt thích</div>
            <div className={cx('status-container', 'flex')} style={{ fontSize: '14px' }}>
                <div className={cx('info-user', 'font-bold', 'mr-2')}>ltk_cmbny</div>
                <div className={cx('status')}>alo 1234</div>
            </div>
            {!details && <div className={cx('view-cmt')} onClick={open}>
                <span style={{ color: '#999', fontSize: '14px' }}>Xem tất cả 1000 bình luận</span>
            </div>}


            <form className={cx('cmt-container', 'flex')} onSubmit={onSubmit}>
                <textarea
                    ref={textareaRef}
                    className={cx('custom-scrollbar-textarea', 'input')}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Thêm bình luận..."
                />
                {isTextareaDisabled && (
                    <span>Đăng</span>
                )}
            </form >
        </div>
    );
}

export default Pfooter;