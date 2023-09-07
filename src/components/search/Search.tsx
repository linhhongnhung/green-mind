import React from "react"
import Statistics from "./Statistics"
import Slide from "../animations/Slide"

const statisticList = [
    {
        amount: "50",
        type: "Plant Species"
    },
    {
        amount: "100",
        type: "Customers"
    }
]

const statisticListLength = statisticList.length

const Search: React.FC = () => {
    return (
        <section className="max-w-[1440px]
                            mx-auto">

            <div className="min-h-[512px] max-w-[1280px] rounded-[24px]
                            mx-24 pl-12
                            bg-primary
                            flex
                            max-lg:pr-12
                            max-md:mx-12
                            max-sm:mx-6 max-sm:px-6">

                <div>
                    <Slide index={0} direction="down">
                        <h2 className="text-large font-extrabold leading-[64px]
                                       mt-12 mb-6
                                       max-xl:text-[3rem]
                                       max-sm:text-base">
                            Buy your dream plants
                        </h2>
                    </Slide>
                    <div className="flex mb-12">
                        {
                            statisticList.map((item, index) => {
                                if (index !== statisticListLength - 1) {
                                    return (
                                        <React.Fragment key={index}>
                                            <Statistics
                                                amount={item.amount}
                                                type={item.type}
                                            />
                                            <div className="h-16 w-[1px] bg-black mr-12"></div>
                                        </React.Fragment>
                                    )
                                } else {
                                    return <Statistics
                                        key={index}
                                        amount={item.amount}
                                        type={item.type}
                                    />
                                }
                            })
                        }
                    </div>
                    <button className="w-12 h-12 bg-primary rounded-[12px]
                                       absolute
                                       ml-[393px] mt-2
                                       hover:brightness-[0.6] transition delay-100 duration-200
                                       max-xl:ml-[233px]">
                        <img className="m-auto" src="./icon/Search.svg" alt="search button" />
                    </button>
                    <input className="xl:w-[449px] h-16 rounded-[12px]
                                      pl-[18px] pr-16
                                      xl:text-tiny
                                      focus:ring-2 focus:ring-gray focus:outline-none transition
                                      max-xl:w-[290px]"
                        placeholder="What are you looking for?" />
                </div>
                <div className="w-full ml-auto
                                self-end
                                max-md:hidden">
                    <img src="./img/Group16.svg" alt="tree" />
                </div>
            </div>
        </section>
    )
}

export default Search