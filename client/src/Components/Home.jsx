//import bg from "../assets/fondo.jpg"

export default function Home() {
    return (
        <div className="flex ">
            {/* background */}
            <div className="bg-site bg-no-repeat bg-cover w-[100%] h-screen pl-20 pt-28">
                {/* title */}
                <div className=" text-[50px] font-body w-[50%]">A Unique Formula 
                </div>
                <div className=" text-[50px] font-body w-[50%]">For Your Unique Needs
                </div>
                {/* text */}
                <div className=" w-[43%] text-lg mb-3">
                    <p className=" font-cardo">A 'one-size-fits-all' convention isn't what you need for your hair.
                        At Iuba, your unique formula is concocted using only the best
                        ingredients that you can’t get off the shelf.</p>
                </div>
                {/* button */}
                <div className=" w-[30%] pl-10 ml-5 py-4 font-cardo border-[1px] border-black">
                    <button>CREATE YOUR CUSTOM HAIRCARE</button>
                </div>
            </div>
        </div>
    )
}


