import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

import requestApi from "~/fetch";
import StoryList from "~/components/StoryList";
import PostItem from "~/components/PostItem";
import { getPost } from "./api";
const cx = classNames.bind(styles)


function Home() {
    const navigate = useNavigate();
    const [page, setPage] = useState(0)
    const [data, setData] = useState([])
    const [hasMore, setHasMore] = useState(true);
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await getPost(page)
                setData([...data, ...res])
            } catch (err) {
                console.log(err);
            }
        }

        fetchAPI();
    }, [page])
    // console.log(data)

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && hasMore) {
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasMore]);


    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            toast.error("Vui lòng đăng nhập")
            navigate("/login")
        }
    });

    return (
        <div className={cx('container', 'grid', 'grid-cols-3')}>
            <div className={cx('content', 'col-span-2', 'h-screen')}>
                <StoryList></StoryList>
                {data && data.map((tmp, idx) => (
                    <PostItem images={tmp.images} title={tmp.title} likes={tmp.likes} id={tmp.id}></PostItem>
                ))}

            </div>
            <div className={cx('others', 'h-screen')}>

            </div>
        </div>
    )
}

export default Home;