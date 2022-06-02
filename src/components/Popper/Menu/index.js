import Tippy from "@tippyjs/react/headless";
import className from "classnames/bind";
import {useState} from 'react'

import MenuItem from "./MenuItem";
import style from "./Menu.module.scss";
import Header from "./Header";
import { Wrapper as PopperWrapper } from "~/components/Popper";

const cx = className.bind(style); //dùng đc dấu (-)

const defaultFn = () =>{}

function Menu({ children, items = [] , onChange = defaultFn }) {

  const [history, setHistory] = useState([{ data: items }]) // truyền 1 Object đại diện dữ liệu cho trang hiện tại
  const current = history[history.length - 1]
  console.log('aa');
  const renderItems = () => {
    return current.data.map((item, index) => {
       const  isParent = !!item.children // Chuyển sang kiểu Boolem
        
       return <MenuItem key={index} data={item} onClick={() => {
         if (isParent) {
          setHistory(prev => [...prev, item.children]) // push thêm vào mảng 
         } else{
           onChange(item)
         }
       }}/>
    });
  };
  return (
    <Tippy  
      //visible //luon hien
      delay={[0, 700]}
      offset={[15, 7]} // chinh chieu ngang vs cao
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            { history.length > 1 && <Header title='Language' onBack={() =>{
              // Xóa phẩn tử cuối của mảng đi 
              setHistory((prev) => prev.slice(0, prev.length - 1))
            }} /> }
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
     // Đưa ra ngoài là sẽ hiện lại popper đầu tiên
      onHide={() => setHistory(prev => prev.slice(0 , 1))}  //Xóa phần tử đầu tiên đi
    >
      {children}
    </Tippy>
  );
}

export default Menu;
