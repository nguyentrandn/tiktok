import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faPlus,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { MessageIcon, InboxIcon } from "~/components/Icons";
import "tippy.js/dist/tippy.css";

import Button from "~/components/Button";
import className from "classnames/bind";
import style from "./Header.module.scss";
import images from "~/assets/images";
import Tippy from "@tippyjs/react";
import Menu from "~/components/Popper/Menu";
import Image from "~/components/Image";
import Search from "~/layouts/components/Search";
import config from "~/config";

const cx = className.bind(style); //dùng đc dấu (-)

const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tieng Viet",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tieng Viet",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tieng Viet",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tieng Viet",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tieng Viet",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tieng Viet",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tieng Viet",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tieng Viet",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tieng Viet",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tieng Viet",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tieng Viet",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tieng Viet",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and Help!",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];
function Header() {
  const curentuser = true;

  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
    switch (menuItem.type) {
      case "language":
        // handle change language
        break;
      default:
    }
  };

  // Đẩy hết cái đống cấu hình này qua MenuItem
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@trang",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coins",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Setting",
      to: "/setting",
    },
    ...MENU_ITEM,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate: true, // cai vach
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to={config.routes.home} className={cx("logo-link")}>
            <img src={images.logo} alt="images" />
          </Link>
        </div>

        {/* Search */}
        <Search />
        {/* -------------------- */}
        {/* Check xem đã dăng nhập hay chưa á mà */}
        <div className={cx("action")}>
          {curentuser ? (
            // đã login
            <>
              <Button outlineBlack leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>

              <Tippy
                content="Message"
                offset={[0, 7]}
                placement="bottom"
                delay={200}
              >
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy
                content="Inbox"
                offset={[0, 1]}
                placement="bottom"
                delay={200}
              >
                <button className={cx("action-btn")}>
                  <InboxIcon />
                  <span className={cx("badge")}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button outlineBlack leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Button primary>Log In</Button>

              {/* ------------------------------------------- */}
            </>
          )}
          <Menu
            items={curentuser ? userMenu : MENU_ITEM}
            onChange={handleMenuChange}
          >
            {curentuser ? (
              <Image
                className={cx("user-avatar")}
                alt="Avatar User"
                src="https://scontent.fdad3-5.fna.fbcdn.net/v/t1.6435-9/195651511_1159626061203877_3862803406390125903_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=RiyYT4W3VCMAX9BuBDA&_nc_ht=scontent.fdad3-5.fna&oh=00_AT9u7swbyvPMra9cfYogRCD_nhCjsa9I4D4x9_vEWgrEqw&oe=62BF1E73"
                //fallback= 'https://static.fullstack.edu.vn/static/media/f8-icon.7ad2b161d5e80c87e516.png'
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
