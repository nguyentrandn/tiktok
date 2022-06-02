import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


import classNames from "classnames/bind";
import styles from './Accountitem.module.scss'



const cx = classNames.bind(styles)
function AccountItem() {
    return ( 
    <div className={cx('wrapper')}>
        <img src='https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/241660859_1221853268314489_3082811399413781660_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=zelYAux4mSoAX9kZ0QC&_nc_ht=scontent.fdad3-4.fna&oh=00_AT-XmJ9k-EcTSmdEa0656n_Ug4FFcXlo0Nw2KncnPznf7g&oe=629D35AD' alt="" className={cx('avatar')} />
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