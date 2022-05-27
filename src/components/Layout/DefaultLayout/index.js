import classNames from "classnames/bind";

import Header from "~/components/Layout/components/Header";
import styles from "./DefaultLayout.module.scss";
import Sidebar from "./Sidebar";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  //content ở giữ có thể thay đổi nên Đặt  Prop(children)
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
