"use client";

import Image from "next/image";
import Button from "../../ui/button";
import { FiRefreshCw } from "react-icons/fi";
import { useState } from "react";
import { updateTransactionStatus } from "@/app/services/transaction.service";

type TOrderSubmitted = {
    transactionId: string;
};

const OrderSubmitted = ({ transactionId }: TOrderSubmitted) => {
    const [isLoading, setIsLoading] = useState(false);

    const reloadOrderStatus = async () => {
        try {
            setIsLoading(true);
            // Update status to confirmed
            await updateTransactionStatus(transactionId, "confirmed");
            // Reload page
            window.location.reload();
        } catch (error) {
            console.error("Failed to update status:", error);
            setIsLoading(false);
        }
    }

    return (
        <div className="bg-white w-160 p-16 flex flex-col justify-center items-center mx-auto "> 
            <Image 
            src="/icon-order-submitted.svg" 
            alt="order submitted" 
            width={117} 
            height={117} 
            className="mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2"> Order Submitted!!</h2>
            <p className="text-center mb-8">Your Order is recorded in our system, we are still confirming the payment status, please wait and your order status will be updated in less than 12 hours.</p>
            <Button 
                variant="dark" 
                size="normal" 
                className="w-full " 
                onClick={reloadOrderStatus}
                disabled={isLoading}
            >
                <FiRefreshCw/> {isLoading ? "Loading..." : "Refresh Order Status"}
            </Button>
        </div>
    )
}

export default OrderSubmitted;
