import styles from './DefaultLayout.module.scss';

import Slider from '~/components/Slider';

import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper', 'grid', 'grid-cols-6')}>
            <div className='col-span-1'>
                <Slider></Slider>

            </div>
            <div className={cx('container', 'col-span-5')}>
                <div className={cx('content')}>{children}</div>
            </div>

        </div>
    );
}

export default DefaultLayout;