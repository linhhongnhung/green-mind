import Link from "next/link"

interface PlantItemProps {
    img: string
    name: string
    price: string
    href: string
}

const PlantItem: React.FC<PlantItemProps> = (props) => {
    const { img, name, price, href } = props
    return (
        <Link
            href={href}
            className="flex flex-col
                       p-6 rounded-[16px] 
                       hover:brightness-[0.92] hover:bg-white transition duration-200">
            <img className="max-w-[299.33px] max-h-[363px]" src={img} alt="plant" />
            <h3 className="mt-3 mb-[7px]">{name}</h3>
            <span className="text-gray">₱ {price}</span>
        </Link>
    )
}

export default PlantItem