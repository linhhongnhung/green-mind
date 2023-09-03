import TabItem from "./TabItem"
import TabIcon from "./TabIcon"
import Link from "next/link"

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
    }
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
    }
]

const Header: React.FC = () => {
    return (
        <header className="max-h-[126px] 
                           bg-white
                           sticky top-0 z-[1]">
            <div className="max-w-[1440px]
                            px-24 py-[44px]
                            mx-auto
                            flex
                            text-gray">
                <Link href="/" className="mr-24">
                    <img src="./img/GREENMIND.svg" alt="GREENMIND logo" />
                </Link>
                <div className="flex justify-between w-[1010px]">
                    <div className="flex">
                        {
                            tabList.map((tab, index) => {
                                return (
                                    <TabItem
                                        key={index}
                                        tabName={tab.tabName}
                                        tabLink={tab.tabLink}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="flex">
                        {
                            tabIconList.map((tab, index) => {
                                return (
                                    <TabIcon
                                        key={index}
                                        iconSrc={tab.iconSrc}
                                        href={tab.href}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header