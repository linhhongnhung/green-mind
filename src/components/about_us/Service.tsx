interface ServiceProps {
    icon: string
    title: string
    desc: string
}

const Service: React.FC<ServiceProps> = (props) => {
    const { icon, title, desc } = props
    return (
        <div className="hover:scale-110 transition duration-300">
            <div className="w-24 h-24 mx-auto bg-primary rounded-full flex">
                <img className="m-auto" src={icon} alt="icon"/>
            </div>
            <h3 className="mt-6 mb-3 font-bold text-tiny">{title}</h3>
            <p className="text-gray text-tiny">{desc}</p>
        </div>
    )
}

export default Service