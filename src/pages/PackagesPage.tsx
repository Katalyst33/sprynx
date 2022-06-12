import "../css/App.css";

function PackagesPage() {
    return (
        <>
            <div className="container mx-auto">
                {/* <h1 className="text-center text-xl lg:text-3xl py-20 bg-yellow-500 md:bg-green-500 lg:bg-red-500">
          Choose a package below and get it <br /> delivered at your door step
        </h1> */}
                <h1 className="text-center text-xl lg:text-3xl py-20 ">
                    Choose a package below and get it <br /> delivered at your door step
                </h1>

                <section className="grid grid-cols-3 gap-x-10 ">
                    <div className="bg-blue-400 p-4 rounded-2xl">
                        <h1 className="text-white">Golden</h1>
                        <h1 className="text-white">package</h1>
                        <ul>
                            <li className="package-item">
                                <div>interior</div>
                                <div className="flex  bg-red-500 border rounded-full w-4 h-4">
                                    <span className="text-sm">G</span>
                                </div>
                            </li>
                            <li className="package-item">

                                <div>
                                    Exterior
                                </div>


                                <div className="flex  bg-red-500 border rounded-full w-4 h-4">
                                    <span className="text-sm">F</span>
                                </div>
                            </li>
                            <li className="package-item">

                                <div>
                                    Engine
                                </div>


                                <div className="flex  bg-red-500 border rounded-full w-4 h-4">
                                    <span className="text-sm">F</span>
                                </div>
                            </li>
                        </ul>

                        <div>
                            <h1 className="text-white">

                                Duration: 8 to 9 hours

                            </h1>
                            <h1 className="text-white">
Regular Car N43,830

</h1> <h1 className="text-white">
Large Car N43,830

</h1>

<p>F <span className="text-xs text-white">5,500 extra Logistics fee to Mainland.</span></p>
                        </div>
                    </div>
                    <div className="bg-blue-400">
                        <h1>Golden</h1>
                        <h1>package</h1>
                        <ul>
                            <li>interior</li>
                            <li>Exterior</li>
                            <li>Engine</li>
                        </ul>
                    </div>
                    <div className="bg-blue-400">
                        <h1>Golden</h1>
                        <h1>package</h1>
                        <ul>
                            <li>interior</li>
                            <li>Exterior</li>
                            <li>Engine</li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
}

export default PackagesPage;
