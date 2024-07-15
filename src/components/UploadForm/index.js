import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faComment, faXmark, faArrowLeft, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from "react";
import EmojiPicker from 'emoji-picker-react';
// import 'emoji-mart/css/emoji-mart.css'; // Import CSS của emoji-mart
import requestApi from "~/fetch";
import {
    Box,
    Button,
    CloseButton,
    Flex,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Textarea,
    Tooltip,
    useDisclosure,
} from '@chakra-ui/react'
import useShowToast from "~/hooks/useShowToast";
import Slider from "../PostItem/slider";
import styles from "./UploadForm.module.scss"

const cx = classNames.bind(styles)

// const EmojiPicker = ({ onSelect }) => {
//     return <Picker onSelect={onSelect} />;
// };

function UploadForm({ close }) {
    const [selectedFile, setSelectedFile] = useState([])
    const [sendFile, setSendFile] = useState([])
    const [last, setLast] = useState(false)
    const showToast = useShowToast();
    const fileInputRef = useRef(null);
    const [text, setText] = useState('');
    const textareaRef = useRef(null);

    const handleChoose = () => {
        fileInputRef.current.click(); // Khi bấm nút, mở hộp thoại chọn file
    };
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setSendFile(files);
        const file = e.target.files[0];
        const reader = new FileReader();

        if (file && file.type.startsWith("image/")) {
            reader.onloadend = () => {
                setSelectedFile([...selectedFile, reader.result]);
            };
            reader.readAsDataURL(file);
        }
        else {
            showToast("Error", "Please select an image file", "error");
            setSelectedFile([]);
        }

    };

    const handleSubmit = (e) => {
        // console.log(1)
        // e.preventDefault();
        // console.log(selectedFile)

        let inputobj = new FormData();
        inputobj.append("title", text);
        for (let i = 0; i < sendFile.length; i++) {
            inputobj.append('image', sendFile[i]);
        }
        // inputobj.append("image", selectedFile); nhưng mà thử lấy ra xem đc k



        requestApi('post', 'post', inputobj)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        // selectedFile([])
        setSendFile([])
        setText("")
        close()
    }

    const backHandle = () => {
        setSelectedFile([])
    }

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const handleEmojiClick = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };
    const handleEmojiSelect = (event, emojiObject) => {
        const textarea = textareaRef.current;
        const startPos = textarea.selectionStart;
        const endPos = textarea.selectionEnd;
        const textBefore = textarea.value.substring(0, startPos);
        const textAfter = textarea.value.substring(endPos, textarea.value.length);
        console.log(startPos, endPos, textBefore, textAfter)
        textarea.value = `${textBefore}${emojiObject.emoji}${textAfter}`;
        textarea.setSelectionRange(startPos + emojiObject.emoji.length, startPos + emojiObject.emoji.length);
        textarea.focus();

        setShowEmojiPicker(false);
    };
    return (
        <div className={cx("flex-col", "container")}>
            {/*header */}
            <div className={cx('title', 'flex', 'bg-white')}>
                {selectedFile.length == 0 &&
                    (
                        <h2 style={{ fontWeight: "700" }}>Tạo bài viết mới</h2>
                    )
                }
                {
                    selectedFile.length != 0 &&
                    (
                        <div className="flex justify-between w-11/12 ">
                            {
                                !last && (
                                    <>
                                        <div className="relative">
                                            <FontAwesomeIcon onClick={backHandle} icon={faArrowLeft} className="absolute top-2" />
                                        </div>
                                        <h2 style={{ fontWeight: "700" }}>Cắt</h2>
                                        <h3 className="cursor-pointer" onClick={() => setLast(true)} style={{ color: 'rgb(0,149,246)' }}>Tiếp</h3>
                                    </>
                                )
                            }
                            {
                                last && (
                                    <>
                                        <div className="relative">
                                            <FontAwesomeIcon onClick={() => setLast(false)} icon={faArrowLeft} className="absolute top-2" />
                                        </div>
                                        <h2 style={{ fontWeight: "700" }}>Tạo bài viết mới</h2>
                                        <h3 onClick={handleSubmit} className="cursor-pointer" style={{ color: 'rgb(0,149,246)' }}>Chia sẻ</h3>
                                    </>
                                )
                            }

                        </div>
                    )
                }
            </div>
            {/*body */}
            <div className={cx('body-container')}>
                <div className={cx("img-container", 'relative')}>
                    {
                        selectedFile.length == 0 &&
                        (
                            <div className="flex justify-center items-center h-full">
                                <div className="relative">
                                    <span className="absolute bottom-20 left-5 size-44">
                                        <svg aria-label="Biểu tượng thể hiện file phương tiện, chẳng hạn như hình ảnh hoặc video" fill="currentColor" height="77" role="img" viewBox="0 0 97.6 77.3" width="96"><title>Biểu tượng thể hiện file phương tiện, chẳng hạn như hình ảnh hoặc video</title><path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path></svg>
                                    </span>

                                    {/* <form onSubmit={handleSubmit}> */}
                                    <input type="file" style={{ display: 'none' }} ref={fileInputRef} multiple onChange={handleFileChange} />
                                    {/* <button type="submit">Upload</button> */}
                                    {/* </form> */}
                                    <button onClick={handleChoose} className={cx("choose-btn")}>
                                        Chọn từ máy tính
                                    </button>
                                </div>

                            </div>
                        )
                    }
                    {selectedFile.length != 0 &&
                        <>
                            <Slider className={'up-form'} style={{ maxHeight: '400px', width: 'auto' }} list={selectedFile} />
                            <input type="file" style={{ display: 'none' }} ref={fileInputRef} multiple onChange={handleFileChange} />

                            {!last &&
                                (<span className="absolute right-4" onClick={handleChoose}>
                                    <FontAwesomeIcon className="size-10" icon={faCirclePlus} />
                                </span>)
                            }
                        </>

                    }
                </div>

                {
                    last &&
                    (
                        <div className={cx('status-container')}>
                            <div className={cx('user', 'flex')}>
                                <span className={cx('avatar')}>
                                    <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg`}></img>
                                </span>
                                <span className={cx('name')}>ltkhanh_cmbny</span>
                            </div>
                            <div>
                                <textarea
                                    ref={textareaRef}
                                    className={cx('custom-scrollbar-textarea', 'input')}
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder="Viết chú thích..."
                                />

                            </div>
                            <button onClick={handleEmojiClick} className="emoji-button">
                                123
                            </button>
                            {showEmojiPicker &&
                                <div className="emoji-picker">
                                    <EmojiPicker onEmojiClick={handleEmojiSelect} />
                                </div>
                            }
                        </div>
                    )
                }
            </div>

        </div>

    );
}

export default UploadForm;