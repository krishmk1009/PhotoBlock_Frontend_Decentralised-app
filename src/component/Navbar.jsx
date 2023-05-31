import React from 'react'

const Navbar = ({ setModalOpen }) => {
    return (
        <nav className='flex content-center  -mt-2  flex-wrap border-b-2 border-gray-200'>
            <div className='w-1/5 p-5 h-20'>
                <img src="src/assets/logo.png" alt='logo' className='h-11' />
            </div>
            <div className='w-2/5'>
                <div className='bg-gray-200 w-90 h-3/5  mt-4 rounded-lg flex '>
                    <button className='mt-1 pl-4 mr-5 flex-none'>

                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 dark:text-gray"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                    <h3 className='flex-initial mt-3 text-gray-400 pb-6'> Search for photos...</h3>
                </div>

            </div>
            <div className='mt-3  ml-auto mr-10 flex' >
                <button class="bg-blue-500 mt-1 mb-5 mr-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setModalOpen(true)}>
                    Share
                </button>

                <div className=''>

                    <button className='mt-3 pl-2 mr-3 flex-none'>

                        <svg className="w-6 h-6 dark:text-black " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                    </button>
                    <button className='mt-3 pl-2 mr-3 flex-none'>

                        <svg class="w-6 h-6 dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                    </button>
                    <button className='mt-3 pl-2 mr-3 flex-none'>

                        <svg class="w-6 h-6 dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>

                    </button>
                    <button className='mt-3 pl-2 mr-3 flex-none'>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-black">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>



                    </button>
                </div>


            </div>
        </nav>

    )
}

export default Navbar