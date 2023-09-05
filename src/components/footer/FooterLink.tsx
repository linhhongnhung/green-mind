import Link from "next/link"
import { list } from "postcss"

interface FooterLinkProps {
    title: string
    items: object[]
}

interface ItemProps {
    text: string
    href: string
}

const FooterLink: React.FC<FooterLinkProps> = (props) => {
    const { title, items } = props
    return (
        <div className="flex flex-col gap-6">
            <h3 className="font-bold">{title}</h3>
            {
                items.map((item, index) => {
                    return <Item key={index} text={item.name} href={item.href} />
                })
            }
        </div>
    )
}

export default FooterLink

const Item: React.FC<ItemProps> = (props) => {
    const { text, href } = props
    return <Link href={href} className="text-gray font-[400]
                                        hover:text-content transition">
        {text}
    </Link>
}