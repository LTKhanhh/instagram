import classNames from "classnames/bind";

import styles from './PostDetails.module.scss'
import Content from "../PostItem/content";
import Header from "../PostItem/header";
import Comment from "./comment";
const cx = classNames.bind(styles)

function PostDetails({ images }) {
    return (
        <div className={cx('bg-white', 'flex', 'container', 'sm:w-full', 'md:w-4/6')}>
            {/* <img className="" src={`${process.env.PUBLIC_URL}/we.jpg`}></img> */}
            <div className={cx('content')}>
                <Content images={images} />
                {/* <img className="w-40" src={`${process.env.PUBLIC_URL}/we.jpg`}></img> */}
            </div>
            <div className={cx('info', 'flex', 'flex-col', 'pl-4', 'pt-4', 'pr-6')}>
                <div className="pb-2 " style={{ borderBottom: "solid 0.1px", borderColor: "#ccc" }}>
                    <Header />
                </div>
                <div className={cx('cmt-list')}>
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </div>

            </div>

        </div>
    );
}

export default PostDetails;