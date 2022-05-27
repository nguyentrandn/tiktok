import className from 'classnames/bind'
import style from './Header.module.scss'

const cx = className.bind(style) //dùng đc dấu (-)
function Header() {
    return  <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            
        </div>
    </header> 
}

export default Header;