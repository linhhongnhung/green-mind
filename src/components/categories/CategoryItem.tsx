import Link from "next/link";

interface CategoryItemProps {
    img: string;
    name: string;
    desc: string;
    href: string;
}

const CategoryItem: React.FC<CategoryItemProps> = (props) => {
    const { img, name, desc, href } = props;
    return (
        <Link
            href={href}
            className="flex flex-col
                       rounded-[16px] 
                       transition duration-200">
            <img className="max-w-[352px]" src={img} alt="plants" />
            <h3 className="font-bold my-3">{name}</h3>
            <div className="opacity-0 hover:opacity-1">
                <p className="text-gray max-w-[300px] mx-auto mb-6">{desc}</p>
                <button className="w-[147px] h-[51px]
                                   rounded-[8px] bg-white
                                   pr-[21px] mx-auto
                                   text-tiny
                                   hover:brightness-90 hover:bg-primary hover:scale-110
                                   transition delay-100 duration-300">
                    <img className="absolute ml-[100.5px] mt-[6px]" src="./icon/Next.svg" />
                    Explore
                </button>
            </div>
        </Link>
    )
}

export default CategoryItem;