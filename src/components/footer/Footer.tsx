import Link from "next/link"
import SocialNetwork from "./SocialNetwork"
import FooterLink from "./FooterLink"

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary min-h-[400px]">
            <div className="max-w-[1440px]
                            px-24 pt-14 mx-auto
                            text-tiny
                            flex justify-between">

                <div className="flex flex-col">
                    <Link href="/">
                        <img src="./img/GREENMIND.svg" alt="GREENMIND" />
                    </Link>
                    <p className="text-gray max-w-[189px] my-6">We help you find your dream plant</p>
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
                    <p className="text-gray mt-[98px]">2023 all Right Reserved Term of use GREENMIND</p>
                </div>

                <div className="flex gap-6">
                    {
                        footerLinks.map((footerLinkItem, index) => {
                            return <FooterLink key={index}
                                title={footerLinkItem.title}
                                items={footerLinkItem.items}
                            />
                        })
                    }
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

const footerLinks = [
    {
        title: "Information",
        items: [
            {
                name: "About",
                href: "/"
            },
            {
                name: "Product",
                href: "/"
            },
            {
                name: "Blog",
                href: "/"
            }
        ]

    },
    {
        title: "Company",
        items: [
            {
                name: "Community",
                href: "/"
            },
            {
                name: "Career",
                href: "/"
            },
            {
                name: "Our story",
                href: "/"
            }
        ]

    },
    {
        title: "Contact",
        items: [
            {
                name: "Getting Started",
                href: "/"
            },
            {
                name: "Pricing",
                href: "/"
            },
            {
                name: "Resources",
                href: "/"
            }
        ]

    }
]