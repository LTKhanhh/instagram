import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from './content';
import { CustomLeft, CustomRight, CustomDot } from "./custom";

import classNames from "classnames/bind";
import styles from './PostItem.module.scss'

const cx = classNames.bind(styles)


function Slider({ list = [`${process.env.PUBLIC_URL}/we.jpg`,
`${process.env.PUBLIC_URL}/we.jpg`,
`${process.env.PUBLIC_URL}/we.jpg`,
`${process.env.PUBLIC_URL}/we.jpg`,], style, className }) {


    return (<div className={cx("wrapper")}>

        <Carousel

            draggable={false}
            Carousel showDots={true}
            responsive={responsive}
            autoPlay={false}
            // autoPlaySpeed={3000}
            infinite={false}
            dotListClass={cx("custom-dot-list")}
            customLeftArrow={<CustomLeft />}
            customRightArrow={<CustomRight />}
            customDot={<CustomDot />}
            className={cx("carousel", className)}
        >
            {/* <img src={`${process.env.PUBLIC_URL}/we.jpg`}></img>
            <img src={`${process.env.PUBLIC_URL}/we.jpg`}></img>
            <img src={`${process.env.PUBLIC_URL}/we.jpg`}></img>
            <img src={`${process.env.PUBLIC_URL}/we.jpg`}></img> */}
            {list.map((item, index) => (
                <div className={cx('item')} key={index}>
                    <img src={item}></img>
                </div>
            ))}
        </Carousel >

    </div>
    );
}

export default Slider;