import Link from "next/link"
import SocialNetwork from "./SocialNetwork"

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary min-h-[400px]">
            <div className="max-w-[1440px]
                            px-24 pt-12 mx-auto
                            flex justify-between">

                <div className="flex flex-col">
                    <Link href="/">
                        <img src="./img/GREENMIND.svg" alt="GREENMIND" />
                    </Link>
                    <p className="text-tiny text-gray max-w-[189px] my-6">We help you find your dream plant</p>
                    <div className="flex gap-6">
                        {
                            socialNetworks.map((socialNetwork, index) => {
                                return <SocialNetwork
                                    key={index}
                                    name={socialNetwork.name}
                                    icon={socialNetwork.icon}
                                    href={socialNetwork.href} />
                            })
                        }
                    </div>
                    <p className="text-tiny text-gray mt-24">2023 all Right Reserved Term of use GREENMIND</p>
                </div>


            </div>
        </footer>
    )
}

export default Footer

const socialNetworks = [
    {
        name: "Facebook",
        icon: "./icon/Facebook.svg",
        href: "https://www.facebook.com"
    },
    {
        name: "Instagram",
        icon: "./icon/Instagram.svg",
        href: "https://www.instagram.com"
    },
    {
        name: "Twitter",
        icon: "./icon/Twitter.svg",
        href: "https://www.twitter.com"
    }
]