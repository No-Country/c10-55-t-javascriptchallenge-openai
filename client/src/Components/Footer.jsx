export default function Footer() {
    return (
        <div className="bg-black font-cardo text-white h-[300px]">
            {/* container */}
            <div className="pt-14 pl-16">
                {/*  title */}
                <div className="font-bold">Products</div>
                <div className="text-white pt-6 pl-10">
                    {/* list */}
                    <div>Shampoo</div>
                    <div className="pt-6">Conditioner</div>
                    <div className="pt-6">Hair tonic</div>
                </div>
            </div>
            {/* firma */}
            {/*<div className="bg-red-200">© iuba 2023</div> */}
        </div>
    )
}