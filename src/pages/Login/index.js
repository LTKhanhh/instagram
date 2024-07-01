import classNames from "classnames/bind";
import { useState } from "react";

import style from "./Login.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(style)

function Login() {
    const [accountName, setAccountName] = useState('');
    const [passWord, setPassWord] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
    }
    return (
        <div className={cx('container', 'sm:h-5/6 sm:mt-16', 'lg:h-4/6 lg:mt-44')}>
            <div className={cx('content', 'grid', 'grid-cols-2')}>
                <div className={cx('theme', 'col-span-1')}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/RonaldoAl-Nassr23.jpg/170px-RonaldoAl-Nassr23.jpg"></img>
                </div>

                <div className={cx('login', 'col-span-1', 'flex-col')}>
                    <div className={cx('login-form', 'w-3/4')}>
                        <div className={cx('logo', 'h-28')}>
                            <img src={`${process.env.PUBLIC_URL}/Instagram_logo.svg`}></img>
                        </div>

                        <form onSubmit={handleLogin} className={cx('info', 'w-full')}>
                            <div className={cx('account-name', 'mb-4')}>
                                <input value={accountName} onChange={e => setAccountName(e.target.value)} placeholder="Số điện thoại, tên người dùng hoặc email" className={cx('w-full')}></input>
                            </div>

                            <div className={cx('password')}>
                                <input type="password" value={passWord} onChange={e => setPassWord(e.target.value)} placeholder="Mật khẩu" className={cx('w-full')}></input>
                            </div>

                            <div type='submit' className={cx("login-btn")}>
                                <button className={accountName && passWord ? cx('btn', 'active') : cx('btn', 'disabled')}>
                                    <span>Đăng nhập</span>
                                </button>
                            </div>
                        </form>

                        <div className={cx('separate')}>
                            <span>HOẶC</span>
                        </div>

                        <div className={cx('login-fb', 'mt-10')}>
                            <span>Đăng nhập bằng Facebook</span>
                        </div>

                        <div className={cx('forgot-psw')}>
                            <span>Quên mật khẩu?</span>
                        </div>
                    </div>

                    <div className={cx('to-register', 'w-3/4')}>
                        <div className="flex">
                            <span>Bạn chưa có tài khoản ư?</span>
                            <Link to={'/register'}><span className="font-bold text-blue-400 ml-2" >Đăng ký</span></Link>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Login;