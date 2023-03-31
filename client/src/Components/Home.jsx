//import bg from "../assets/fondo.jpg"

export default function Home() {
    return (
        <div className="flex ">
            {/* background */}
            <div className="bg-site bg-no-repeat bg-cover w-[100%] h-screen pl-20 pt-28">
                {/* title */}
                <div>A Unique Formula For Your Unique Needs
                </div>
                {/* text */}
                <div>
                    <p className=" pr-[50%]">A 'one-size-fits-all' convention isn't what you need for your hair.
                        At Iuba, your unique formula is concocted using only the best
                        ingredients that you can’t get off the shelf.</p>
                </div>
                {/* button */}
                <div>
                    <button>CREATE YOUR CUSTOM HAIRCARE</button>
                </div>
            </div>

        </div>
    )
}


