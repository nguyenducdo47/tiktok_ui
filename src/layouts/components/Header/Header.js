import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faGlobe,
    faCoins,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import {
    faCircleQuestion,
    faKeyboard,
    faUser,
} from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import config from '~/configs';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';

import Menu from '~/components/Popper/Menu';
import SearchResult from '../SearchResult';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import AvatarDefault from '~/components/AvatarDefault';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },

    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },

    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard Shortcuts',
    },
];

function Header() {
    const handleMenuChange = (menuItems) => {
        console.log(menuItems);
    };

    const currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@nguyeducdo47',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Logo Tiktok" />
                </Link>

                <SearchResult />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 100]}
                                content="Upload video"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy
                                delay={[0, 100]}
                                content="Message"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy
                                delay={[0, 100]}
                                content="Inbox"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <AvatarDefault
                                src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/348236450_639139317660517_2429629815366283042_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UdgSRljzd3QAX9_ZY9F&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfAe5Jl4Tbfd5BbQn8j8u9SbUnNNPUJWi76WnmWES6JLuw&oe=64BD6B2B"
                                className={cx('user-avatar')}
                                alt="Nguyễn Đức Độ"
                                //fallback="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/112152644_2576281089354977_2232403886457455009_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_ohc=Hk1JtoyV3BIAX-EiGIg&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfB5_Lc2oDC185DyoAKuX_2hx5ZzgRgaB9YW4aHAXKi10A&oe=64DDD636"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
