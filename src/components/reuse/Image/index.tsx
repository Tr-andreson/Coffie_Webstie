interface ImageT {
  url: string

}
/*
 * Image component for optimized Image
*/
export const Image = ({ url }: ImageT) => {
  return (
    <>
      <img
        className="w-full h-[400px]"
        src={url || "/noImage.png"} />
    </>
  )
}
