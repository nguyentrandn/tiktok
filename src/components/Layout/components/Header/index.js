import {useEffect, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSignIn, faSpinner, faUpload } from '@fortawesome/free-solid-svg-icons'
import {Wrapper as PopperWrapper} from '~/components/Popper'

import Button from '~/components/Button'
import className from 'classnames/bind'
import style from './Header.module.scss'
import images from '~/assets/images'
import Tippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem'

const cx = className.bind(style) //dùng đc dấu (-)

function Header() {
const [searchResult, setSearchResult] = useState([])
useEffect(() =>{
    setTimeout(() =>{
        setSearchResult([1])
    },0)
})

    return  <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='images'/>
            </div>
            <Tippy 
                interactive='true'
                visible={searchResult.length > 0} // nếu ô search có chữ thì mơi hiện dropbox
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    Accounts
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                )}>
                <div className={cx('search')}>
                    <input placeholder='Search accound and video...' spellCheck={false}/>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                        <FontAwesomeIcon icon={faSpinner}  className={cx('loading')}/>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </button>
                </div>
            </Tippy>
            <div className={cx('action')}>
                <Button  text leftIcon={<FontAwesomeIcon icon={faUpload}/>}>Upload</Button>
                <Button  primary >Log in</Button>
            </div>
        </div>
    </header> 
}

export default Header;