import Slide from "../animations/Slide"

interface ServiceProps {
    icon: string
    title: string
    desc: string
    index: number
}

const Service: React.FC<ServiceProps> = (props) => {
    const { icon, title, desc, index } = props
    return (
        <Slide index={index} direction="up">
            <div className="hover:scale-110 transition duration-300">
                <div className="w-24 h-24 mx-auto bg-primary rounded-full flex">
                    <img className="m-auto" src={icon} alt="icon" />
                </div>
                <h3 className="mt-6 mb-3 font-bold text-tiny">{title}</h3>
                <p className="text-gray text-tiny">{desc}</p>
            </div>
        </Slide>
    )
}

export default Service