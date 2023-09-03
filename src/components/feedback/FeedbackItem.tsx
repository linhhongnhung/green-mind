interface FeedbackItemProps {
    name: string
    profession: string
    img: string
    rating: number
    comment: string
}

const FeedbackItem: React.FC<FeedbackItemProps> = (props) => {
    const { name, profession, img, rating, comment } = props
    return(
        <div className="max-w-[800px] min-h-[330px] bg-primary rounded-[12px] pt-12">
            <p className="text-content text-tiny px-12">{comment}</p>
            <div className="grid grid-cols-[163px_1fr_20px_89px]">
                <img className="ml-[13px]" src={img} alt="Customer"/>
                <div className="pl-[7px]">
                    <h4 className="font-bold text-tiny mt-[54px]">{name}</h4>
                    <span className="text-[0.75rem] text-gray">{profession}</span>
                </div>
                <img className="mt-[56px]" src="./icon/Star.svg" alt="star"/>
                <span className="text-tiny font-bold ml-3 mt-[54px]">{rating}</span>
            </div>
        </div>
    )
}

export default FeedbackItem