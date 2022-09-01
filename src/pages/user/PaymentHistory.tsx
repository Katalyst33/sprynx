import React from 'react'
import {BsFillCreditCardFill, BsFillFileEarmarkTextFill, BsPhoneFill} from "react-icons/bs"
import { IoMdCash } from 'react-icons/io'

const PaymentHistory = () => {
  return (
    <div className='bg-gray-200 py-16 lg:px-20 px-4'>
        <h1 className='text-3xl font-bold'>Payment Details</h1>
        <div className="lg:flex gap-10 pb-10">
            <div className='lg:w-7/12'>
                <div className="mt-5 bg-white rounded-lg shadow-md">
                    <p className='px-7 py-5 font-bold text-lg text-blue-700'>Securely add or remove payment methods to make it easier when you book.</p>
                    <hr/>
                    <div className='flex gap-20 justify-center py-5 px-7'>
                        <h3>Payment Cards</h3>
                        <h4>Pay with new card</h4>
                        <button className='text-blue-700 font-semibold hover:text-blue-500'>Add Card</button>
                    </div>
                    <hr/>
                </div>
                <div className='mt-5 bg-white rounded-lg shadow-md'>
                    <div className='flex justify-between items-center px-7 py-5'>
                        <p className='font-bold text-lg text-blue-700'>Recent Cards</p>
                        <BsFillCreditCardFill className='text-blue-700 text-lg'/>
                    </div>
                    <hr/>
                    <div className='flex gap-20 justify-center text-left py-5 px-7'>
                        <h3>Payment Card</h3>
                        <h4>**** **** 8430</h4>
                        <button className='text-blue-700 font-semibold hover:text-blue-500'>Pay With Card</button>
                    </div>
                    <hr/>
                    <div className='flex gap-20 justify-center py-5 px-7'>
                        <h3>Payment Card</h3>
                        <h4>**** **** 2925</h4>
                        <button className='text-blue-700 font-semibold hover:text-blue-500'>Pay With Card</button>
                    </div>
                    <hr/>
                </div>
                <div className="mt-5 bg-white rounded-lg shadow-md ">
                    <div className='flex justify-between items-center px-7 py-5'>
                        <p className='font-bold text-lg text-blue-700'>Other Methods of Payment</p>
                        <div className='flex gap-1'>
                            <IoMdCash className="text-blue-700 text-lg"/>
                            <BsPhoneFill className="text-blue-700 text-lg"/>
                        </div>
                    </div>
                    <hr/>
                    <div className='flex gap-20 justify-center py-5 px-7'>
                        <h3>Cash</h3>
                        <p>Cash Payment will be confirmed by agents</p>
                    </div>
                    <hr/>
                    <div className='flex gap-20 justify-center py-5 px-7'>
                        <h3>Funds Transfer</h3>
                        <p>Funds transfer will be confirmed by agents</p>
                    </div>
                </div>
            </div>
            
            <div className='mt-5 bg-white rounded-lg shadow-md lg:w-5/12'>
                <div className='flex justify-between items-center px-7 py-5'>
                    <p className='font-bold text-lg text-blue-700'>Payment History</p>
                    <BsFillFileEarmarkTextFill className='text-blue-700 text-lg'/>
                </div>
                <hr/>
                <div className='grid grid-cols-3 justify-center py-5 px-7'>
                    <h3 className='w-5/6 p-1 font-bold'>Location</h3>
                    <h4 className='w-5/6 p-1 font-bold'>Car</h4>
                    <h4 className='w-5/6 p-1 font-bold'>Package</h4>
                </div>
                <hr/>
                <div className='grid grid-cols-3 justify-center py-5 px-7'>
                    <h3 className='w-5/6 p-1'>25 kendo road </h3>
                    <h4 className='w-5/6 p-1'>Salon | Mercedes 2021</h4>
                    <h4 className='w-5/6 p-1'>Bronze</h4>
                </div>
                <hr/>
                <div className='grid grid-cols-3 justify-center py-5 px-7'>
                    <h3 className='w-5/6 p-1'>8 ilolo street, Mosidu</h3>
                    <h4 className='w-5/6 p-1'>Suv | Toyota Hilux y67</h4>
                    <h4 className='w-5/6 p-1'>Platinium</h4>
                </div>
                <hr/>
                <div className='grid grid-cols-3 justify-center py-5 px-7'>
                    <h3 className='w-5/6 p-1'>105 Gali road, Egba</h3>
                    <h4 className='w-5/6 p-1'>Salon | Toyota Camry 22</h4>
                    <h4 className='w-5/6 p-1'>Platinium</h4>
                </div>
                <hr/>
            </div>
            
            
        </div>
        
    </div>
  )
}

export default PaymentHistory