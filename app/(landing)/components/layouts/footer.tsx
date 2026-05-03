import Link from "next/dist/client/link";
import Image from "next/image";

const Footer = () => {
    return <footer className="bg-dark-alternate text-white">
    <div className="container mx-auto flex justify-between pt-14 pb-24">
        <div className="w-105">
            <Image src="/logo footer.png" alt="logo sporton" width={187} height={44} />
            <p className=" mt-8">
                Engineered for endurance and designed for speed.  Experience gear that moves as fast as you do.
            </p>
        </div>
        <div className="w-105 grid grid-cols-2 ">
          <div className="flex gap-7 flex-col"> 
            <Link href="#">Home</Link>
            <Link href="#">Categories</Link>
            <Link href="#">Product</Link>
            <Link href="#">About Us</Link>
           </div> 

           <div className="flex gap-7 flex-col"> 
            <Link href="#">Instagram</Link>
            <Link href="#">Tiktok</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">YouTube</Link>
           </div> 
        </div>
    </div>
    <div className="border-t border-t-white/15">
        <div className="container mx-auto py-6.5 flex justify-between">
            <div>SportsOn © 2026 All Rights Reserved.</div>
            <div className="grid grid-cols-2 w-105">
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Terms Conditions</Link>
            </div>
        </div>
    </div>
    </footer>;
};

export default Footer;