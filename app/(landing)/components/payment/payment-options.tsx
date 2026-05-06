import { get } from "http";
import CardWithHeader from "../../ui/card-with-header";
import { FiCreditCard } from "react-icons/fi";
import { getAllBank } from "@/app/services/bank.service";

const paymentlist = [
    {
        bank_name: "BCA",
        account_number: "1234567890",
        account_holder: "PT Sporton Digital"
    },
    {
        bank_name: "MANDIRI",
        account_number: "0987654321",
        account_holder: "PT Sporton Digital"
    },
    {
        bank_name: "BRI",
        account_number: "1243156227",
        account_holder: "PT Sporton Digital"
    }
];

const PaymentOptions = async () => {
    
const banks = await getAllBank();

    return (
        <CardWithHeader title="Payment Options">
            <div className="p-5">
                {banks.map((payment, index) => (
                    <div key={index} className="flex gap-5 p-5 border-b border-gray-100  ">
                        <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center">
                            <FiCreditCard size={24}/>
                        </div>
                        <div className="self-center">
                            <div className="font-bold">{payment.bankName}</div>
                            <div className="text-sm">{payment.accountNumber}</div>
                            <div className="text-sm opacity-70">{payment.accountName}</div>
                        </div>
                        <div className="ml-auto bg-blue-50 text-gray-800 text-xs h-fit self-center px-2 py-1 ">
                            Bank Transfer
                        </div>
                    </div>
                ))}
            </div>
        </CardWithHeader>
    )
}

export default PaymentOptions;