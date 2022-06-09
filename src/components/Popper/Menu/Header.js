import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import className from "classnames/bind";
import style from "./Menu.module.scss";
import PropTypes from 'prop-types';

const cx = className.bind(style); //dùng đc dấu (-)

function Header({title, onBack}) {
  
  return (
    <header className={cx('header')}>
        <button className={cx('back-btn')} onClick={onBack}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        
        <h4 className={cx('header-title')}>{title}</h4>
    </header>
  )
}
Header.propsTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
}
export default Header;
