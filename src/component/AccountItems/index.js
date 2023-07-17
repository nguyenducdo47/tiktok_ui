import classNames from 'classnames/bind';
import style from './AccountItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/348236450_639139317660517_2429629815366283042_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KsMXXxbVHuwAX_CGjzK&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfCsrPBduGR6NQWYMpE_bUIBFoXTPb911UWOb5D_IwhvCA&oe=64B387EB"
                alt=" User name"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Đức Độ</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>

                <span className={cx('username')}>nguyenducdo47</span>
            </div>
        </div>
    );
}

export default AccountItems;
