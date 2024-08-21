import React from "react";

interface IProps {
    children: React.ReactNode;
}

const ContentWrapper = ({ children }: IProps) => {
    return <div className="max-w-[1440px] px-4 md:px-4 xl:px-32 mx-auto">{children}</div>

}

export default ContentWrapper