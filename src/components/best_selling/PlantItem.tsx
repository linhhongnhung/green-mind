import Link from "next/link"
import Slide from "../animations/Slide"
import { delay } from "framer-motion"

interface PlantItemProps {
    key: number
    img: string
    name: string
    price: string
    href: string
    index: number
}

const PlantItem: React.FC<PlantItemProps> = (props) => {
    const { key, img, name, price, href, index } = props
    return (
        <Slide index={index} direction="right">
            <Link
                href={href}
                className="flex flex-col
                       p-6 rounded-[16px] 
                       hover:brightness-[0.93] hover:bg-white hover:scale-105 transition duration-200">
                <img className="max-w-[299.33px] max-h-[363px]" src={img} alt="plant" />
                <h3 className="mt-3 mb-[7px] text-tiny">{name}</h3>
                <span className="text-gray text-tiny">₱ {price}</span>
            </Link>
        </Slide>
    )
}

export default PlantItem