import React from 'react';
import img from '../images/web.svg'; 
import img2 from '../images/app.svg';

const Services = () => {
    return (
        <div id="services" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4 text-center">
                    <h2 className="text-3xl text-blue-900 uppercase font-bold">Services</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <p className="mt-4 mx-12 text-xl lg:text-2xl font-semibold text-blue-900">We are deeply committed to the growth and success of our clients.</p>
                </div>
                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-6 group">
                            <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out mx-auto" src={img} />
                            <h2 className="font-semibold my-4 text-2xl">Download EasyPay App</h2>
                            <p className="text-md font-medium text-justify">We specialize in creating and optimizing high-quality, custom websites for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use websites and applications for clients.</p>
                        </div>
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-6 group">
                            <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out mx-auto" src={img2} />
                            <h2 className="font-semibold my-4 text-2xl">Mobile App Development</h2>
                            <p className="text-md font-medium text-justify">We develop high-quality, custom cross-platform mobile applications that are robust and optimized for performance, scalability, and accessibility.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                {/* Add content */}
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                {/* Add content */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;
