import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


import classNames from "classnames/bind";
import styles from './Accountitem.module.scss'

const cx = classNames.bind(styles)
function AccountItem() {
    return ( 
    <div className={cx('wrapper')}>
        <img src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_300x300.webp?x-expires=1654070400&x-signature=p7o1mkB89ef5NqRnkuTaGwlg%2Fl8%3D' alt="" className={cx('avatar')} />
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span> Nguyen van A</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <span className={cx("username")}>Nguyen Van A</span>
        </div>
    </div> );
}

export default AccountItem;