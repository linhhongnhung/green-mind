"use client"
import Link from "next/link"
import React, { useState } from "react"

interface CategoryItemProps {
    img: string
    name: string
    desc: string
    href: string
}

const CategoryItem: React.FC<CategoryItemProps> = (props) => {

    const { img, name, desc, href } = props

    const [isHoverd, setIsHoverd] = useState(false)
    const handleHover = () => {
        setIsHoverd(true)
    }
    const handleNoHover = () => {
        setIsHoverd(false)
    }

    return (
        <Link
            href={href}
            className="flex flex-col
                       rounded-[16px] 
                       hover:translate-y-[96px] transition duration-500"
            onMouseEnter={handleHover}
            onMouseLeave={handleNoHover}>
            <div>
                <img className="max-w-[352px]" src={img} alt="plants" />
                <h3 className="font-bold text-tiny my-3">{name}</h3>
            </div>
            <div className={
                isHoverd
                    ? "opacity-1 transition duration-1000"
                    : "opacity-0 transition duration-500"}>
                <p className="text-gray text-tiny mb-6">{desc}</p>
                <button className="w-[147px] h-[51px]
                                   rounded-[8px] bg-white
                                   pr-[21px] mx-auto
                                   text-tiny
                                   hover:scale-110 transition duration-300">
                    <img className="absolute ml-[100.5px] mt-[6px]" src="./icon/Next.svg" />
                    Explore
                </button>
            </div>
        </Link>
    )
}

export default CategoryItem