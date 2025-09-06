import Mylistitems from './mylistitems';
import AccountSidebar from '../../components/accountsidebar';


function Mylist() {

    return (
        <div className="w-full">
            <div className="container flex gap-8">
                <AccountSidebar />
                
                <div className="w-[80%] p-5 flex-col rounded-md shadow-sm my-10">
                    <div className="mb-3 shadow-lg border border-gray-100 p-3 bg-white rounded-md">
                        <h3 className="text-[18px] font-[600]">Your List</h3>
                        <h3 className="text-[14px] font-[500]">
                            There are <span className="text-[#ff5252] font-[600] text-[15px]">2</span> items in your List
                        </h3>
                    </div>
                    <div className='w-full h-[500px] overflow-hidden overflow-x-hidden flex items-center flex-col pt-3 overflow-y-scroll rounded-lg gap-3 cardpanel'>
                        <Mylistitems />
                        <Mylistitems />
                        <Mylistitems />
                        <Mylistitems />
                        <Mylistitems />
                        <Mylistitems />
                        <Mylistitems />
                        <Mylistitems />
                        <Mylistitems />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mylist;
