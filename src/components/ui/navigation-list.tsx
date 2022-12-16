import { FC } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "./link";
import { ILink } from "@components/layout/header/header-menu";

interface INavigationListProps {
    linksList: ILink[];
}

const NavigationList: FC<INavigationListProps> = ({ linksList }) => {
    return (
        <nav className="flex gap-[24px]">
            {linksList.map((link) => (
                <Link key={link.name} href={link.href}>
                    <h3 className="flex items-center text-white gap-[8px]">
                        {link.name}
                        {link.hasSubMenu && (
                            <span>
                                <IoIosArrowDown />
                            </span>
                        )}
                    </h3>
                </Link>
            ))}
        </nav>
    );
};

export default NavigationList;
