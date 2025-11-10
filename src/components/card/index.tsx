import { Image } from "../reuse/Image"

interface CardT {
  imageUrl: string
  name: string
  paragraph: string
  price: number

}

export const Card = ({ imageUrl, name, paragraph, price }: CardT) => {
  return (
    <div>
      <Image url={imageUrl} />
      <h4 className="my-4 text-3xl">{name || "Lougue Cafe"}</h4>
      <p className="text-lg">{paragraph}</p>
      <div className='flex items-center justify-between'>
        <p>Rs {price}</p>
        <button className="bg-[#2a0000] text-white px-4 py-2 text-sm rounded-sm">Order Now</button>
      </div>
    </div>
  )
}


