import React from "react";
import Statistics from "./Statistics";

const statisticList = [
    {
        amount: "50",
        type: "Plant Species",
    },
    {
        amount: "100",
        type: "Customers",
    }
]

const statisticListLength = statisticList.length;

const Search: React.FC = () => {
    return (
        <section className="max-w-[1248px] min-h-[512px] rounded-[24px]
                            mx-auto pl-12
                            bg-primary text-black
                            flex">
            <div>
                <h2 className="text-large font-extrabold leading-[64px]
                                mt-12 mb-6">
                    Buy your dream plants
                </h2>
                <div className="flex mb-12">
                    {
                        statisticList.map((item, index) => {
                            if (index !== statisticListLength - 1) {
                                return (
                                    <React.Fragment>
                                        <Statistics
                                            amount={item.amount}
                                            type={item.type}
                                        />
                                        <div className="h-16 w-[1px] bg-black mr-12"></div>
                                    </React.Fragment>
                                )
                            } else {
                                return <Statistics
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
                                    hover:opacity-80">
                    <img className="m-auto" src="./icon/Search.svg" alt="search button" />
                </button>
                <input className="w-[449px] h-16 rounded-[12px]
                                   pl-[18px] pr-16
                                   text-black
                                   focus:ring-2 focus:ring-black focus:outline-none"
                    placeholder="What are you looking for?" />
            </div>
            <img className="self-end ml-auto" src="./img/Group16.svg" alt="tree" />
        </section>
    )
}

export default Search