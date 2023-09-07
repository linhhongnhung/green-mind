import React from "react"
import PlantItem from "./PlantItem"
import Link from "next/link"

const BestSelling: React.FC = () => {

    return (
        <section className="pt-[93px] pb-[113px] max-w-[1440px] mx-auto">
            <div className="mx-24 flex
                            max-lg:flex-col max-lg:items-center max-lg:text-center
                            max-md:mx-12
                            max-sm:mx-6">
                <div>
                    <h2 className="text-base font-bold
                                    w-[256px]
                                    max-lg:w-auto">
                        Best Selling Plants
                    </h2>
                    <p className="text-tiny text-gray w-[196px] mt-3 mb-6
                                  max-lg:w-auto">
                        Easiest way to healthy life by buying your favorite plants
                    </p>
                    <Link href="/">
                        <button className="w-[168px] h-[50px] rounded-[8px]
                                           bg-primary
                                           text-tiny
                                           pr-6
                                           relative
                                           hover:brightness-[0.6] transition delay-100 duration-300">
                            See more
                            <img className="absolute top-0 ml-[121.5px] mt-[19.87px]" src="./icon/Next.svg" alt="next"/>
                        </button>
                    </Link>
                </div>
                <div className="grid grid-cols-3
                                max-lg:grid-cols-2 max-lg:mt-4
                                max-md:grid-cols-1">
                {
                    plantList.map( (plant, index) => {
                        return <PlantItem
                                    key={index}
                                    img={plant.img}
                                    name={plant.name}
                                    price={plant.price}
                                    href={plant.href}
                                    index={index}
                                />
                    })
                }
                </div>
            </div>
        </section>
    )
}

export default BestSelling

const plantList = [
    {
        img: "./img/Frame9.svg",
        name: "Natural Plants",
        price: "1,400.00",
        href: "/"
    },
    {
        img: "./img/Frame8.svg",
        name: "Artificial Plants",
        price: "900.00",
        href: "/"
    },
    {
        img: "./img/Frame7.svg",
        name: "Natural Plants",
        price: "3,500.00",
        href: "/"
    },
]