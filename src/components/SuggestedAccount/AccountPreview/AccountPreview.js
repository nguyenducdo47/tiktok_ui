import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/348236450_639139317660517_2429629815366283042_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UdgSRljzd3QAX9_ZY9F&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDWvEGyKSQ7IpMKquza4TW-rkqnLVnAIJVxkvNSbBHYXQ&oe=64BF656B"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>nguyenducdo47</strong>
                    <FontAwesomeIcon
                        className={cx('checked')}
                        icon={faCheckCircle}
                    />
                </p>
                <p className={cx('name')}>Nguyễn Đức Độ</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers </span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
