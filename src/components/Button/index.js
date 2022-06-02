import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Button({
  to,
  href,
  small = false,
  large = false,
  primary = false,
  outline = false,
  outlineBlack =false,
  text = false,
  rounded = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className,
  children,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  // nếu mà có prop Disabled thì sẽ xóa tất cả prop có từ (on) VD: onKeyup, onkeyDown
  if (disabled) { 
      Object.keys(props).forEach((key) =>{
          if (key.startsWith('on') && typeof props[key] === 'function') {
              delete props[key];
          }
      })
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    primary: primary,
    outline,
    outlineBlack,
    small,
    large,
    text,
    rounded,
    disabled,
    leftIcon,
    rightIcon,
    [className]: className,
  });

  return (
    <Comp className={classes} {...props}>
        {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
