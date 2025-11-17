import { FooterList } from "../utils/constrants"
import { Logo } from "./reuse/logo"

const Footer = () => {
  return (
    <div className="p-2 lg:container mx-auto">
      <Logo />
      <div className=" grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-4">
        {/* privacy */}
        <div>
          <FooterBars heading="Privacy" list={FooterList.privacyList} />
        </div>

        {/* service */}
        <div>
          <FooterBars heading="Service" list={FooterList.serviceList} />
        </div>

        {/* about us */}
        <div>
          <FooterBars heading="About" list={FooterList.aboutList} />
        </div>

        {/* Information */}
        <div>
          <FooterBars heading="Information" list={FooterList.priceList} />
        </div>

      </div>

      {/* SocialMedia */}
    </div>
  )
}

export default Footer

interface Listprops {
  name: string,
  link: string
}

interface FooterBarsProps {
  heading: string,
  list: Listprops[]


}
const FooterBars = ({ heading, list }: FooterBarsProps) => {
  return (
    <div>
      <h4 className="font-bold">{heading}</h4>
      {list.map((_) => {
        return (
          <>
            <h4>{_.name}</h4>
          </>
        )
      })}
    </div>
  )
}
