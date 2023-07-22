import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import SuggestItem from './SuggestItem';
const cx = classNames.bind(styles);

function SuggestedAccount({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('lable')}>{label}</p>
            <SuggestItem/>
            <SuggestItem/>
            <SuggestItem/>
            
            <p className={cx('see-all')}>See all</p>

        </div>
    );
}

SuggestedAccount.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccount;
