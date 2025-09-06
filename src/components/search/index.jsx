import "../search/style.css";
import IconButton from '@mui/material/IconButton';
import { FaMagnifyingGlass } from "react-icons/fa6";

function Search() {
    return (
        <>
            <div className="searchBox w-[100%] h-[50px] bg-gray-300 rounded-[8px] relative p-2 flex items-center justify-center">

                <input className="w-full h-[35px] focus:outline-none text-[15px] p-2" type="text" placeholder="Search for the products..." name="searchbar" id="searchbar" />
                
                <IconButton aria-label="Seach">
                   <FaMagnifyingGlass className="text-[18px] rounded-[100%]" />
                </IconButton>

            </div>
        </>
    )
}

export default Search;