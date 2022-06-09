import { useState,  forwardRef } from 'react'
import images from '~/assets/images'
import style from './Image.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types';

const Image = forwardRef(({ src, className, alt, fallback,...props}, ref) =>{
    const [ _fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(fallback ? fallback : images.noImage) //nó sẽ Set lại State cho cái ảnh
    };

    // khi loi sẽ hiện thị ảnh no-image
    return  (
        <img 
            className={classNames(style.wrapper,  className)}
            ref={ref} 
            {...props} 
            src={ _fallback || src} // khi lỗi thì sẽ ưu tiên thằng (fallback) còn ko thì sẽ lấy thằng src
            alt={alt} 
            onError={handleError} /*khi cái ảnh bị lỗi thì sẽ gọi Hàm handleError*/
        />
    ) ;
}
)
Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
}
export default Image;