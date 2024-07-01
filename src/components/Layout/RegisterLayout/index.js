
import styles from './RegisterLayout.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function RegisterLayout({ children }) {
    return (

        <div className={cx('container', 'sm:w-5/6', 'lg:w-3/6')}>
            {children}
        </div>

    );
}

export default RegisterLayout;