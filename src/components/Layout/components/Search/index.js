import {useState, useEffect, useRef} from 'react'
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem'
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { SearchIcon } from '~/components/Icons'
import {Wrapper as PopperWrapper} from '~/components/Popper'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from './Search.module.scss'
import classNames from 'classnames/bind'
import {useDebounce} from '~/hoocks'
import * as searchServices from '~/apiServices/searchServices'

const cx = classNames.bind(styles)

function Search() {

  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState([]) //kết quả tìm kiếm đc 
  const [showResult , setShowResult] = useState(true)
  const [loading , setLoading] = useState(false)
  const debounce = useDebounce(searchValue, 500) // khi nguoi dung ngung go 500ms thi moi goi API

const inputRef = useRef()

useEffect(() =>{
  if (!debounce) { 
    setSearchResult([])
    return
  }

  const fetchApi = async () => {
    //trc khi Api goi
    setLoading(true)

    const result = await searchServices.search(debounce);
    setSearchResult(result)

    // sau khi Api dc goi
    setLoading(false)
  }
  
  fetchApi()

    
}, [debounce])

// Clear Kết quả Tk
const handleClear = () => {
    setSearchValue('');
    setSearchResult([])
    inputRef.current.focus()
}

const handleHideResult = () => {
    setShowResult(false)
}

// ko cho nhap dau Cách
const handleChange = (e) => {
  let value = e.target.value;

  // Cách 1:
  // if (/^\s*$/.test(value)) value = '';

  // Cách 2:
  if (value.trim() === '') value = '';
      
  setSearchValue(value);
};



  return (
    <HeadlessTippy
      interactive="true"
      visible={showResult && searchResult.length > 0} // nếu ô search có chữ thì mơi hiện dropbox
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Accounts</h4>
            {searchResult.map((result) => 
              <AccountItem key={result.id} data={result} />
            )}
            
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input 
            ref={inputRef} // Khi DOM đc Mound vào Web thì nó sẽ Update vào inputRef.current                                                                                     
            placeholder="Search accound and video..." 
            spellCheck={false} 
            value={searchValue}
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !loading && ( //convert value thành Boolem
            <button className={cx("clear")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
            </button>
        )}
        
        { loading && <FontAwesomeIcon icon={faSpinner} className={cx("loading")} /> }
        <button className={cx("search-btn")} onMouseDown={e => e.preventDefault()}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
