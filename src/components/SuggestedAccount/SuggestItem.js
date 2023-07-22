import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
const cx = classNames.bind(styles);

function SuggestItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper className={cx('preview')}>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy
                // visible
                interactive
                delay={[800, 0]}
                offset={[-20, 0]}
                placement="bottom"
                render={renderPreview}
            >
                <div className={cx('account-items')}>
                    <img
                        className={cx('avatar')}
                        src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/348236450_639139317660517_2429629815366283042_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UdgSRljzd3QAX9_ZY9F&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDWvEGyKSQ7IpMKquza4TW-rkqnLVnAIJVxkvNSbBHYXQ&oe=64BF656B"
                        alt=""
                    />

                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>nguyenducdo47</strong>
                            <FontAwesomeIcon
                                className={cx('checked')}
                                icon={faCheckCircle}
                            />
                        </p>
                        <p className={cx('name')}>Nguyễn Đức Độ</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
SuggestItem.propTypes = {};
export default SuggestItem;
