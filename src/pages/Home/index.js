import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { useState, useEffect } from "react";
import StoryList from "~/components/StoryList";
import PostItem from "~/components/PostItem";
const cx = classNames.bind(styles)


function Home() {
    return (
        <div className={cx('container', 'grid', 'grid-cols-3')}>
            <div className={cx('content', 'col-span-2', 'h-screen')}>
                <StoryList></StoryList>
                <PostItem></PostItem>
            </div>
            <div className={cx('others', 'h-screen')}>

            </div>
        </div>
    )
}

export default Home;