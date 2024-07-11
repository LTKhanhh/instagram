import styles from './Register.module.scss';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import requestApi from '~/fetch';
import classNames from "classnames/bind";


const cx = classNames.bind(styles)
const USER_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const FN_REGEX = /.*[a-zA-Z].*/;
const UN_REGEX = /^(?=.*[a-zA-Z])[^ ]*$/;

function Register() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const [accountName, setAccountName] = useState('');
    const [fullName, setFullName] = useState('');

    const [validAccount, setValidAccount] = useState();
    const [validPassWord, setValidPassWord] = useState();
    const [validUserName, setValidUserName] = useState();
    const [validFullName, setValidFullName] = useState();
    const [errMsg, setErrMsg] = useState('')

    useEffect(() => {
        setValidAccount(USER_REGEX.test(accountName))
    },
        [accountName])
    useEffect(() => {
        setValidPassWord(passWord.length >= 6)
    },
        [passWord])

    useEffect(() => {
        setValidFullName(FN_REGEX.test(fullName))
    },
        [fullName])

    useEffect(() => {
        setValidUserName(UN_REGEX.test(userName))
    },
        [userName])


    const handleRegister = (e) => {
        e.preventDefault();
        let inputobj = {
            "email": accountName,
            "password": passWord,
            "userName": userName
        }

        requestApi('auth/register', 'post', inputobj)
            .then(res => {
                // console.log(res)
                setAccountName('')
                setFullName('')
                setPassWord('')
                setUserName('')
                navigate('/login')
            })
            .catch(err => {
                err.response.data && setErrMsg(err.response.data.message)
                console.log(err)
            })
    }
    return (
        <div className={cx('container')}>
            <div className={cx('register', 'flex-col')}>
                <div className={cx('register-form', 'w-full')}>
                    <div className={cx('logo', 'h-28')}>
                        <img src={`${process.env.PUBLIC_URL}/Instagram_logo.svg`}></img>
                    </div>
                    <div className='flex justify-center'>
                        <span className='text-center font-bold' style={{ color: '#888' }}>Đăng ký để xem ảnh và video từ bạn bè.</span>
                    </div>

                    <div className={cx('login-fb')}>
                        <span className='text-white'>Đăng nhập bằng Facebook</span>
                    </div>

                    <div className={cx('separate')}>
                        <span>HOẶC</span>
                    </div>

                    <form onSubmit={handleRegister} className={cx('info', 'w-full')}>
                        <div className={cx('account-name', 'mb-4')}>
                            <input value={accountName} onChange={e => setAccountName(e.target.value)} placeholder="Số điện thoại hoặc email" className={cx('w-full')}></input>
                            {
                                accountName.length !== 0 ?
                                    <div className={cx('icon')}>
                                        {validAccount ? <FontAwesomeIcon className=' w-10 h-8' icon={faCheckCircle}></FontAwesomeIcon> :
                                            <FontAwesomeIcon className='text-red-600 w-10 h-8' icon={faCircleXmark}></FontAwesomeIcon>
                                        }
                                    </div>
                                    :
                                    <div></div>
                            }


                        </div>
                        <div className={cx('full-name', 'mb-4')}>
                            <input value={fullName} onChange={e => setFullName(e.target.value)} placeholder="Tên đầy đủ" className={cx('w-full')}></input>
                            {
                                fullName.length !== 0 ?
                                    <div className={cx('icon')}>
                                        {validFullName ? <FontAwesomeIcon className=' w-10 h-8' icon={faCheckCircle}></FontAwesomeIcon> :
                                            <FontAwesomeIcon className='text-red-600 w-10 h-8' icon={faCircleXmark}></FontAwesomeIcon>
                                        }
                                    </div>
                                    :
                                    <div></div>
                            }

                        </div>
                        <div className={cx('user-name', 'mb-4')}>
                            <input value={userName} onChange={e => setUserName(e.target.value)} placeholder="Tên người dùng" className={cx('w-full')}></input>
                            {
                                userName.length !== 0 ?
                                    <div className={cx('icon')}>
                                        {validUserName === true ? <FontAwesomeIcon className=' w-10 h-8' icon={faCheckCircle}></FontAwesomeIcon> :
                                            <FontAwesomeIcon className='text-red-600 w-10 h-8' icon={faCircleXmark}></FontAwesomeIcon>
                                        }
                                    </div>
                                    :
                                    <div></div>
                            }

                        </div>

                        <div className={cx('password')}>
                            <input type="password" value={passWord} onChange={e => setPassWord(e.target.value)} placeholder="Mật khẩu" className={cx('w-full')}></input>
                            {
                                passWord.length !== 0 ?
                                    <div className={cx('icon')}>
                                        {validPassWord ? <FontAwesomeIcon className=' w-10 h-8' icon={faCheckCircle}></FontAwesomeIcon> :
                                            <FontAwesomeIcon className='text-red-600 w-10 h-8' icon={faCircleXmark}></FontAwesomeIcon>
                                        }
                                    </div>
                                    :
                                    <div></div>
                            }

                        </div>



                        <div className='flex justify-center mt-6'>
                            <span className='text-center ' style={{ fontSize: '12px', color: '#999' }}>Những người dùng dịch vụ của chúng tôi có thể đã tải thông
                                tin liên hệ của bạn lên Instagram.
                                <span className='text-center ' style={{ fontSize: '12px', color: 'rgb(0, 55, 107)', cursor: 'pointer' }}>Tìm hiểu thêm</span>
                            </span>

                        </div>
                        <div className='flex justify-center'>
                            <span className='text-center' style={{ fontSize: '12px', color: '#999' }}>Bằng cách đăng ký, bạn đồng ý với
                                <span className='text-center ' style={{ fontSize: '12px', color: 'rgb(0, 55, 107)', cursor: 'pointer' }}> Điều khoản</span>
                                ,
                                <span className='text-center ' style={{ fontSize: '12px', color: 'rgb(0, 55, 107)', cursor: 'pointer' }}> Chính sách quyền riêng tư </span>

                                và
                                <span className='text-center ' style={{ fontSize: '12px', color: 'rgb(0, 55, 107)', cursor: 'pointer' }}> Chính sách cookie của chúng tôi</span>
                                .
                            </span>
                        </div>

                        {errMsg.length == 0 ? <div></div> :
                            <div className="text-center  mt-10">
                                <span className="text-red-600 text-xl">{errMsg}</span>
                            </div>
                        }

                        <div type='submit' className={cx("register-btn")}>
                            <button className={userName && passWord && fullName && accountName ? cx('btn', 'active') : cx('btn', 'disabled')}>
                                <span>Đăng ký</span>
                            </button>
                        </div>
                    </form>
                </div>

                <div className={cx('to-login', 'w-full')}>
                    <div className="flex">
                        <span>Bạn có tài khoản?</span>
                        <Link to={'/login'}><span className="font-bold text-blue-400 ml-2" >Đăng nhập</span></Link>
                    </div>
                </div>
            </div>
        </div >
    );
}


export default Register;