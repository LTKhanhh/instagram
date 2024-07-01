import styles from './Register.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames/bind";


const cx = classNames.bind(styles)
const USER_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Register() {
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const [accountName, setAccountName] = useState('');
    const [fullName, setFullName] = useState('')
    const handleRegister = (e) => {
        e.preventDefault();
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
                        </div>
                        <div className={cx('full-name', 'mb-4')}>
                            <input value={fullName} onChange={e => setFullName(e.target.value)} placeholder="Tên đầy đủ" className={cx('w-full')}></input>
                        </div>
                        <div className={cx('user-name', 'mb-4')}>
                            <input value={userName} onChange={e => setUserName(e.target.value)} placeholder="Tên người dùng" className={cx('w-full')}></input>
                        </div>

                        <div className={cx('password')}>
                            <input type="password" value={passWord} onChange={e => setPassWord(e.target.value)} placeholder="Mật khẩu" className={cx('w-full')}></input>
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