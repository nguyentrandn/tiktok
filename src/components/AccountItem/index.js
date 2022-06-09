
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

import Image from '~/components/Image'
import classNames from "classnames/bind";
import styles from './Accountitem.module.scss'

const cx = classNames.bind(styles)

function AccountItem({data}) {
    return ( 
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
        <Image 
            src={data.avatar} 
            alt="" 
            className={cx('avatar')} 
        />
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>{data.full_name}</span>
                { data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
            </h4>
            <span className={cx("username")}>{data.nickname}</span>
        </div>
    </Link> );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AccountItem;