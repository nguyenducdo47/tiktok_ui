import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItems } from './Menu';
import config from '~/configs';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from '~/components/Icons';
import SuggestedAccount from '~/components/SuggestedAccount/SuggestedAccount';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItems
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItems
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItems
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
            </Menu>

            <SuggestedAccount label='Suggested account'/>
            <SuggestedAccount label='Following account'/>


        </aside>
    );
}

export default Sidebar;
