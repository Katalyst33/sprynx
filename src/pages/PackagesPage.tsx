import "../css/App.css";
import Card from "./CardComponents"

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
                    <Card packageName="GOLDEN" packages="Packages" packageOne="Interior" packageTwo="Exterior" packageThree="Engine"/>
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
