import React from "react";
// import Slider from "react-slick";
import PlantItem from "./PlantItem";
import Link from "next/link";

const BestSelling: React.FC = () => {

    // const settings = {
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1
    // }

    return (
        <section className="pt-[93px] pb-[113px] max-w-[1440px] mx-auto">
            <div className="mx-24 flex">
                <div>
                    <h2 className="text-black text-base font-bold
                                    max-w-[256px]">
                        Best Selling Plants
                    </h2>
                    <p className="text-gray max-w-[174px] mt-3 mb-6">
                        Easiest way to healthy life by buying your favorite plants
                    </p>
                    <Link href="/">
                        <button className="w-[168px] h-[50px] rounded-[8px]
                                        bg-primary
                                        pr-6
                                        relative
                                        hover:brightness-[0.6] transition delay-100 duration-300">
                            See more
                            <img className="absolute top-0 ml-[121.5px] mt-[19.87px]" src="./icon/Next.svg"/>
                        </button>
                    </Link>
                </div>
                <div className="grid grid-cols-3">
                {
                    plantList.map( (plant) => {
                        return <PlantItem
                                    img={plant.img}
                                    name={plant.name}
                                    price={plant.price}
                                    href={plant.href}
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