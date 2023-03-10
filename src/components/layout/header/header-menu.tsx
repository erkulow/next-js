// import Link from "@components/ui/link";
/* import { FaChevronDown } from "react-icons/fa";
import MegaMenu from "@components/ui/mega-menu"; */
import classNames from "classnames";
import NavigationList from "@components/ui/navigation-list";
// import { useTranslation } from "next-i18next";
import { FaMapMarkerAlt } from "react-icons/fa";
export interface MenuProps {
    data: any;
    className?: string;
}

export interface ILink {
    name: string;
    path: string;
    hasSubMenu: boolean;
	href: string,
}

const linksList: ILink[] = [
    { name: "Каталог", path: "test", hasSubMenu: true, href: "/contact-us" },
    { name: "О компании", path: "test", hasSubMenu: false, href: "/category/catalog" },
    { name: "Оплата", path: "test", hasSubMenu: false, href: "/category/catalog" },
    { name: "Доставка", path: "test", hasSubMenu: false, href: "/category/catalog" },
    { name: "Возврат", path: "test", hasSubMenu: false, href: "/category/catalog" },
    { name: "Бонусная программа", path: "test", hasSubMenu: false, href: "/category/catalog" },
    { name: "FAQ", path: "test", hasSubMenu: false, href: "/category/catalog" },
];

const HeaderMenu: React.FC<MenuProps> = ({ className }) => {
    /* 	const { t } = useTranslation("menu");
	const item = data[0]; */
    return (
        <nav className={classNames(`flex-shrink-0 flex gap-[24px] w-auto relative`, className)}>
            <h3 className="flex items-center text-white gap-[8px]">
                <FaMapMarkerAlt />
                Казань
            </h3>
            <NavigationList linksList={linksList} />

            {/* <div
					className={`menuItem group cursor-pointer py-7 text-base-100 ${
						item.subMenu ? "relative" : ""
					}`}
					key={item.id}
				>
					<Link
						href={item.path}
						className="inline-flex items-center text-sm xl:text-base text-heading px-3 xl:px-4 py-2 font-normal relative group-hover:text-black"
					>
						{t(item.label)}
						{(item?.columns || item.subMenu) && (
							<span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
								<FaChevronDown className="transition duration-300 ease-in-out transform group-hover:-rotate-180" />
							</span>
						)}
					</Link>

					{item?.columns && Array.isArray(item.columns) ? (
						<MegaMenu columns={item.columns} />
					) : ''}

					{item?.subMenu && Array.isArray(item.subMenu) && (
						<div className="subMenu shadow-header bg-gray-200 absolute start-0 opacity-0 group-hover:opacity-100">
							<ul className="text-body text-sm py-5">
								{item.subMenu.map((menu: any, index: number) => {
									const dept: number = 1;
									const menuName: string = `sidebar-menu-${dept}-${index}`;

									return (
										<ListMenu
											dept={dept}
											data={menu}
											hasSubMenu={menu.subMenu}
											menuName={menuName}
											key={menuName}
											menuIndex={index}
										/>
									);
								})}
							</ul>
						</div>
					)}
				</div> */}
        </nav>
    );
};

export default HeaderMenu;
