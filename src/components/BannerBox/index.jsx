import { Link } from "react-router-dom";

function BannerBox(props) {
  return (
    <div className={`w-full ${props.className} p-1 rounded-[10px] overflow-hidden`}>
      <div className="relative transition-all duration-300 hover:scale-102 w-full h-full">
        <img src={props.image} alt="Banner" className="w-full h-full rounded-[10px]"/>
        <div className={`absolute top-6 ${props.info === "left" ? "left-1" : "right-2"} z-50 p-3`}>
          <h3 className="text-[16px] font-[700]">{props.description1}</h3>
          <h3 className="text-[16px] font-[700]">{props.description2}</h3>
          <h3 className="text-[16px] font-[700] text-[#ff5252] pt-3">{props.price}</h3>
          <Link to={"/"} className="text-[14px] font-[700] underline hover:no-underline pt-3 flex">
              SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
}



export default BannerBox;
