import { FC, PropsWithChildren } from "react";

const BannerBtn: FC<PropsWithChildren<any>> = ({ children }) => {
    return (
        <button className="bg-[#A21B87] w-[343px] h-[88px] rounded-full text-[#EBEFF2] text-[32px]">{children}</button>
    );
};

export default BannerBtn;
