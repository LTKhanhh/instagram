import classNames from "classnames/bind";
import { useState, useRef, useEffect } from "react";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEllipsis, faComment } from '@fortawesome/free-solid-svg-icons';
import styles from './PostItem.module.scss'
import { getCommentById } from "./api";
import { postComment } from "./api";

const cx = classNames.bind(styles)

function Pfooter({ handleSubmit, open, details = false, likes, title, id, images }) {
    const [text, setText] = useState('');
    const isTextareaDisabled = text.trim().length !== 0;
    const [comments, setComments] = useState([])
    // const [check, setCheck] = useState()
    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(text.trim());
        setText("");
    };
    const textareaRef = useRef(null);

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await getCommentById(id)
                setComments([...res])
            } catch (err) {
                console.log(err);
            }
        }
        fetchAPI();

    }, [])

    const handleComment = () => {
        const fetchAPI = async () => {
            try {
                const res = await postComment(id, text)

            } catch (err) {
                console.log(err);
            }
        }
        fetchAPI();
        // setCheck(!check)
        setText('')
    }

    return (
        <div className={cx('f-container')}>
            {
                likes != 0 &&
                (
                    <div className={cx('font-bold', 'mb-2')} style={{ fontSize: '14px' }}>{likes} lượt thích</div>
                )
            }

            <div className={cx('status-container', 'flex')} style={{ fontSize: '14px' }}>
                <div className={cx('info-user', 'font-bold', 'mr-2')}>ltk_cmbny</div>
                <div className={cx('status')}>{title}</div>
            </div>
            {comments.length != 0 && <div className={cx('view-cmt')} onClick={open}>
                <span style={{ color: '#999', fontSize: '14px' }}>Xem tất cả {comments.length} bình luận</span>
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
                    <span className="cursor-pointer" onClick={handleComment}>Đăng</span>
                )}
            </form >
        </div>
    );
}

export default Pfooter;