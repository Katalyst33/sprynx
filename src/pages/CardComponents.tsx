import React from "react"
import ReactDom from "react-dom"

export default function Card(props: any) {
    return (
        <div className="bg-blue-400 p-4 rounded-2xl">
            <h1 className="text-white">{props.packageName}</h1>
            <h1 className="text-white">{props.packages}</h1>
            <ul>
                <li className="package-item">
                    <div>{props.packageOne}</div>
                    <div className="flex  bg-red-500 border rounded-full w-4 h-4">
                        <span className="text-sm">V</span>
                    </div>
                </li>
                <li className="package-item">

                    <div>
                        {props.packageTwo}
                    </div>


                    <div className="flex border-3 border-blue-500/70 rounded-full w-4 h-4">
                        <span className="text-sm">V</span>
                    </div>
                </li>
                <li className="package-item">

                    <div>
                        {props.packageThree}
                    </div>


                    <div className="flex  bg-blue border rounded-full w-4 h-4">
                        <span className="text-sm">V</span>
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
    )
}