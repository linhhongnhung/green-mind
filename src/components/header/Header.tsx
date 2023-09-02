import TabItem from "./TabItem"
import TabIcon from "./TabIcon"

const tabList = [
    {
        tabName: "Home",
        tabLink: "/"
    },
    {
        tabName: "Products",
        tabLink: "/"
    },
    {
        tabName: "Contacts",
        tabLink: "/"
    },
]

const tabIconList = [
    {
        iconSrc: "./icon/Cart.svg",
        href: "/"
    },
    {
        iconSrc: "./icon/Account.svg",
        href: "/"
    },
    {
        iconSrc: "./icon/Line1.svg",
        href: "/"
    },
    {
        iconSrc: "./icon/FilterRight.svg",
        href: "/"
    },
]

const Header: React.FC = () => {
    return (
        <div className="max-h-[126px] max-w-[1440px]
                        bg-white text-black
                        px-24 py-[44px] mx-auto
                        flex
                        sticky top-0">
            <img className="mr-24" src="./img/GREENMIND.svg" alt="GREENMIND logo" />
            <div className="flex justify-between w-[1010px]">
                <div className="flex">
                    {
                        tabList.map((tab) => {
                            return (
                                <TabItem
                                    tabName={tab.tabName}
                                    tabLink={tab.tabLink}
                                />
                            )
                        })
                    }
                </div>
                <div className="flex">
                    {
                        tabIconList.map((tab) => {
                            return (
                                <TabIcon
                                    iconSrc={tab.iconSrc}
                                    href={tab.href}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Header