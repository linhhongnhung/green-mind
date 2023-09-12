import CategoryItem from "./CategoryItem"

const Categories: React.FC = () => {
    return (
        <section className="text-center">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-3 gap-24
                                absolute
                                mt-[135px] mx-24
                                max-w-[1248px]
                                max-xl:mx-12 max-xl:gap-10
                                max-sm:mx-6 max-sm:grid-cols-1 max-sm:right-0 max-sm:left-0">
                    {
                        categories.map((category, index) => {
                            return <CategoryItem
                                key={index}
                                img={category.img}
                                name={category.name}
                                desc={category.desc}
                                href={category.href} />
                        })
                    }
                </div>
            </div>
            <h2 className="text-base font-bold">Categories</h2>
            <p className="mt-3 mb-24 text-gray text-tiny">Find what you are looking for</p>
            <div className="bg-primary h-[841px]
                            max-xl:h-[650px]
                            max-sm:h-[2300px]" />
        </section>
    )
}

export default Categories

const categories = [
    {
        img: "./img/Frame39.svg",
        name: "Natural Plants",
        desc: "Horem ipsum dolor sit amet, consectetur adipiscing elit.",
        href: "/"
    },
    {
        img: "./img/Frame38.svg",
        name: "Plant Accessories",
        desc: "Horem ipsum dolor sit amet, consectetur adipiscing elit.",
        href: "/"
    },
    {
        img: "./img/Frame37.svg",
        name: "Artificial Plants",
        desc: "Horem ipsum dolor sit amet, consectetur adipiscing elit.",
        href: ""
    }
]
