import Button from "~/components/Button";

import className from "classnames/bind";
import style from "./Menu.module.scss";

const cx = className.bind(style); //dùng đc dấu (-)

function MenuItem({ data, onClick }) {
  const classes = cx('menu-item'  // css cứng
  , {  // linh hoạt 
    separate: data.separate
  })
  return (
    <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
