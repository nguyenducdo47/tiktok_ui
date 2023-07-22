import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './AccountItems.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AvatarDefault from '~/components/AvatarDefault';

const cx = classNames.bind(style);

function AccountItems({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <AvatarDefault
                className={cx('avatar')}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && (
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        />
                    )}
                </h4>

                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItems.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItems;
