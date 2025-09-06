import { Button } from "@mui/material";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuCopy } from "react-icons/lu";

function QuantityBoxCart(props) {
    const [qty, setqty] = useState('1');
    const [msg, setmsg] = useState('In Stock');
    const [color, setcolor] = useState('rgba(35,209,0,1)');

    function increment() {
        setqty(prev => {
            const prevQty = Number(prev) || 0;
            const newQty = prevQty + 1;
            if (newQty > props.stock) {
                setmsg('There are not enough products in stock');
                setcolor('rgba(255,106,0,1)');
            } else {
                setmsg('In Stock');
                setcolor('rgba(35,209,0,1)');
            }
            return newQty.toString();
        });
    }

    function decrement() {
        setqty(prev => {
            const prevQty = Number(prev) || 0;
            if (prevQty <= 1) {
                setmsg('Invalid Quantity Must be greater than 0');
                setcolor('rgba(236,16,16,1)');
                return '0';
            } else {
                const newQty = prevQty - 1;
                setmsg('In Stock');
                setcolor('rgba(35,209,0,1)');
                return newQty.toString();
            }
        });
    }

    function handleInputChange(e) {
        const value = e.target.value;
        // allow empty string so user can delete
        if (value === '') {
            setqty('');
            return;
        }
        // only accept numbers
        if (/^\d+$/.test(value)) {
            const num = Number(value);
            if (num < 0) {
                setmsg('Invalid Quantity Must be greater than 0');
                setcolor('rgba(236,16,16,1)');
            } else if (num > props.stock) {
                setmsg('There are not enough products in stock');
                setcolor('rgba(255,106,0,1)');
            } else {
                setmsg('In Stock');
                setcolor('rgba(35,209,0,1)');
            }
            setqty(value);
        }
    }

    function handleBlur() {
        // if user leaves empty input, fix to 0
        if (qty === '') {
            setqty('0');
            setmsg('Invalid Quantity Must be greater than 0');
            setcolor('rgba(236,16,16,1)');
        }
    }

    return (
        <div className="w-full flex items-center flex-col justify-center">
            <div className="qtybox flex items-center justify-center w-full">
                <div className="w-[60px]">
                    <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={qty}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className='border-l pr-2 border-t border-b border-gray-300 pl-1 outline-none focus:border-[rgba(85,85,85,0.34)] w-full h-[45px]'
                    />
                </div>

                <div className="flex items-center justify-center w-[20px] flex-col h-[45px]">
                    <Button
                        className="!border-gray-300 !border-l !border-r !border-t hover:!bg-gray-100 !rounded-[0px] !h-[22.5px] !text-black !min-w-[3px]"
                        onClick={increment}
                    >
                        <FaAngleUp className="text-[10px]" />
                    </Button>
                    <Button
                        className="!border-gray-300 !border !rounded-[0px] hover:!bg-gray-100 !h-[22.5px] !text-black !min-w-[3px]"
                        onClick={decrement}
                    >
                        <FaAngleDown className="text-[10px]" />
                    </Button>
                </div>
            </div>
            <div
                className="inline-block p-1 mt-4 flex items-center justify-center border border-solid rounded-[4px]"
                style={{ borderColor: color }}
            >
                <h3 className="text-[10px] font-[500] w-full text-center" style={{ color }}>
                    {msg}
                </h3>
            </div>
        </div>
    );
}

export default QuantityBoxCart;
