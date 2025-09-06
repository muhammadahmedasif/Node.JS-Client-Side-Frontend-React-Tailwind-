import AccountSidebar from '../../components/accountsidebar';
import OrdersDetailsTable from './ordersdetailstable';


function MyOrders() {

    return (
        <div className="w-full">
            <div className="container flex items-center gap-8">
                <AccountSidebar />
                
                <div className="w-[80%] p-5 flex-col rounded-md shadow-sm my-10">
                    <div className="mb-3 shadow-lg border border-gray-100 p-3 bg-white rounded-md">
                        <h3 className="text-[18px] font-[600]">My Orders</h3>
                        <h3 className="text-[14px] font-[500]">
                            There are <span className="text-[#ff5252] font-[600] text-[15px]">2</span> Orders 
                        </h3>
                    </div>
                    <div className='w-full flex overflow-hidden overflow-x-scroll items-center bg-white p-3 shadow-lg rounded-lg gap-3'>
                        <OrdersDetailsTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyOrders;
