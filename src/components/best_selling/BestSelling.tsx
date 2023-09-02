import React from "react";
import Slider from "react-slick";

const BestSelling: React.FC = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    }

    return (
        <section className="pt-[93px] max-w-[1440px] mx-auto">
            <div className="mx-24 flex">
                <div>
                    <h2 className="text-black text-base font-bold
                                    max-w-[256px]">
                        Best Selling Plants
                    </h2>
                    <p className="text-gray max-w-[174px] mt-3 mb-6">
                        Easiest way to healthy life by buying your favorite plants
                    </p>
                    <button className="w-[168px] h-[50px] rounded-[8px]
                                       bg-primary
                                       pr-6
                                       relative
                                       hover:opacity-80">
                        See more
                        <img className="absolute top-0 ml-[121.5px] mt-[19.87px]" src="./icon/Next.svg"/>
                    </button>
                </div>

            </div>
        </section>
    )
}

export default BestSelling