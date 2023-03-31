export default function Nav() {
    return (
        <nav>
            <div className="flex flex-row items-center w-full mx-auto pt-2 px-24">
                {/* left nav */}
                <div className=" w-full">
                    <a className=" text-[56px] font-body whitespace-nowrap pl-5">
                        iuba
                    </a>
                </div>
                {/* rigth nav */}
                <div className="font-cardo flex justify-end py-[18px]">
                    <a href="#" class="text-lg  no-underline ml-2 px-7 pt-2">Products</a>
                    <a href="#" class="text-lg no-underline ml-2 px-7 pt-2">About</a>
                    <a href="#" class="text-lg no-underline ml-2 px-7 pt-2">Reviews</a>
                    <a href="#" class="text-lg no-underline ml-2 px-7 pt-2">Account</a>
                    <div className="border-black border-[1px] ml-2 px-7 py-2">
                        <a href="#" className="">Cart</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}