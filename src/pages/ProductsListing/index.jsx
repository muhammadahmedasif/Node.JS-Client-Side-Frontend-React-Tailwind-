import SideBar from "../../components/sidebar";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ContentCard from "../../components/contentCard";
import ContentCardList from "../../components/contentCardlist";
import { BsGrid } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";
import { Button } from "@mui/material";
import Menufun from "../../components/menu";
import { useState } from "react";
import Pagination from '@mui/material/Pagination';



function ProductsListing() {

    const [itemview, setitemview] = useState('grid')

    return (
        <>
            <section className="py-3">
                <div className="container">
                    <div role="presentation" className="mb-4">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/" className="link !text-[14px] transition-all">
                                Home
                            </Link>
                            <Link
                                underline="hover"
                                color="inherit"
                                href="/productslisting"
                                className="link !text-[14px] transition-all"
                            >
                                Products Listing
                            </Link>
                        </Breadcrumbs>
                    </div>
                </div>

                <div className="bg-white p-3 !h-[980px] mt-3">
                    <div className="container h-full flex gap-3">
                        <div className="w-[20%] h-full bg-white">
                            <SideBar />
                        </div>

                        <div className="w-[80%] flex h-full flex justify-center items-center gap-2 flex-col">
                            <div className="w-full h-[10%] bg-[rgba(126,123,123,0.5)] rounded-[8px] p-2 flex items-center">
                                <div className="flex items-center ml-10 gap-5 justify-center">
                                    <div>
                                        <Button className={`!bg-[rgba(132,122,122,0.6)] !h-[35px] !w-[35px] !min-w-[35px] !rounded-full hover:!bg-[rgba(52,50,50,0.3)] ${itemview === 'grid'?"!text-[#ff5252] !bg-black":'!text-gray-300'} hover:!text-[rgba(52,50,50,0.9)] hover:scale-110 !transition-all !duration-500`} onClick={()=>setitemview('grid')}>
                                            <BsGrid className="text-[20px]" style={{ strokeWidth: 0.4 }}/>
                                        </Button>
                                    </div>
                                    <div>
                                       <Button className={`!bg-[rgba(132,122,122,0.6)] !h-[35px] !w-[35px] !min-w-[35px] !rounded-full hover:!bg-[rgba(52,50,50,0.3)] ${itemview === 'list'?"!text-[#ff5252] !bg-black":'!text-gray-300'} hover:!text-[rgba(52,50,50,0.9)] hover:scale-110 !transition-all !duration-500`} onClick={()=>setitemview('list')}>
                                            <CiBoxList className="text-[20px]" style={{ strokeWidth: 1 }}/>
                                        </Button>
                                    </div>
                                </div>
                                <span className="text-[15px] pl-5 flex items-center font-[600] text-[rgba(52,50,50,0.6)]">There are 30 products</span>
                                <div className="flex ml-auto pr-6 items-center">
                                    <div  className="mr-2">
                                        <span className="text-[15px] font-[600] text-[rgba(52,50,50,0.6)]">Sort By: </span>
                                    </div>
                                    <div className="p-1">

                                    <Menufun />
                                    </div>

                                </div>
                            </div>
                            <div className={`${itemview === 'grid'?'grid grid-cols-4 x-sm:grid-cols-2 gap-7':'grid grid-cols-1 x-sm:grid-cols-1 gap-7'} products h-full items-center flex pr-3 justify-center w-full`}>
                                {
                                    itemview === 'grid' ? 
                               <> 
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                </> 
                                :
                                <>
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                <ContentCardList image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                                </>
                                }                                
                            </div>
                        </div>

                    </div>
                </div>
                    <div className="pt-6">
                        <div className="bg-white w-full flex items-center justify-center py-5 page">

                    <Pagination count={200} />
                        </div>
                    </div>
            </section>
        </>
    )
}

export default ProductsListing