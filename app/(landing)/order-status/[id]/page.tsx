"use client";

import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderSubmitted from "../../components/order-status/order-submitted";
import { useState } from "react";

const OrderStatus = () => {
    const [isConfirmed, setIsConfirmed] = useState(false);

    return (
         <main className="bg-gray-100 min-h-[80vh] ">
            <div className="max-w-5xl mx-auto py-20">
                <h1 className="text-5xl font-bold text-center mb-8">Order Status</h1>
                <div className="mt-12">
                    {
                        isConfirmed ? <OrderConfirmed/> : <OrderSubmitted/>
                    }
                </div>
            </div>
        </main>
    )
}

export default OrderStatus;
