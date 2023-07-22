import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './AvatarDefault.module.scss';

const AvatarDefault = forwardRef(({ src, alt, className,fallback=images.avatarDefault, ...props }, ref) => {
    const [avatarError, setAvatarError] = useState('');

    const handleAvatarError = () => {
        setAvatarError(fallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={avatarError || src}
            alt={alt}
            {...props}
            onError={handleAvatarError}
        />
    );
});

AvatarDefault.propTypes={
    src:PropTypes.string,
    alt:PropTypes.string,
    className:PropTypes.string,
    fallback:PropTypes.string,
}

export default AvatarDefault;
