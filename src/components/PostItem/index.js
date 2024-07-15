import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faComment, faXmark } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure
} from '@chakra-ui/react'

import styles from './PostItem.module.scss'
import Pfooter from "./footer";
import Content from "./content";
import PostDetails from "../PostDetails";
import Header from "./header";
const cx = classNames.bind(styles)


function PostItem({ images, likes, title, name = "", id }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            {/* {showDetails && <PostDetails />} */}
            <Modal isOpen={isOpen} onClose={onClose} size={"full"} >
                <ModalOverlay
                    // bg='blackAlpha.9000'
                    // backdropFilter='#ccc '
                    backgroundColor={'rgba(0,0,0,0.5)'}
                />
                <ModalContent>

                    {/* <ModalCloseButton
                        top={0}
                        left={0}
                    /> */}
                    <ModalBody height={'100%'} width={'100%'}>
                        <button onClick={onClose} className="fixed top-5 right-5">
                            <FontAwesomeIcon className="size-10" style={{ color: '#fff' }} icon={faXmark} />
                        </button>
                        <div className="flex items-center justify-center h-screen">
                            <PostDetails images={images} />
                            {/* <Content /> */}
                        </div>

                    </ModalBody>
                </ModalContent>
            </Modal>

            <div className={cx("container")}>
                <div className={cx('content')}>
                    {/* <div className={cx('flex', 'info', 'items-center', 'justify-between')}>
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
                    </div> */}
                    <Header name={name} />
                    <div className={cx('image-container')}>
                        {/* <img src={`${process.env.PUBLIC_URL}/we.jpg`}></img> */}
                        <Content images={images} />
                    </div>

                    <div className={cx('action', 'flex', 'justify-between')}>
                        <div className={cx('action-left', 'flex')}>
                            <span className={cx('action-item')}>
                                <img src={`${process.env.PUBLIC_URL}/heart-regular.svg`}></img>
                            </span>
                            <span className={cx('action-item')}>
                                <img src={`${process.env.PUBLIC_URL}/comment-regular.svg`}></img>
                            </span>
                            <span className={cx('action-item')}>
                                <img src={`${process.env.PUBLIC_URL}/paper-plane-regular.svg`}></img>
                            </span>
                        </div>
                        <div className={cx('action-right')}>
                            <span className={cx('action-item')}>
                                <img className="w-full h-full" src={`${process.env.PUBLIC_URL}/bookmark-regular.svg`}></img>
                            </span>
                            {/* <div className={cx('hollow-triangle')}></div> */}
                        </div>
                    </div>

                    <Pfooter open={onOpen} likes={likes} title={title} id={id} images={images} />
                </div>

            </div >
        </>
    );
}

export default PostItem;