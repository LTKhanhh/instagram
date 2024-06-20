import styles from './Register.module.scss';
import classNames from "classnames/bind";


const cx = classNames.bind(styles)
const USER_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Register() {
    return (
        <div className={cx('container')}>
            <div className={cx('row', 'flex', 'justify-center')}>
                <div className='columns-md'></div>
            </div>
        </div >
    );
}


export default Register;