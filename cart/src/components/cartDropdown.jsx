import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useSelector } from 'react-redux'

// 
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const CartDropdown = () => {
    const data = useSelector((state) => state.cart.value)

    return (
        <Menu as="div" className="relative inline-block text-left" >
            <div>
                <Menu.Button className="inline-flex w-full justify-center">
                    <i class="ri-shopping-cart-2-line"></i>
                </Menu.Button>
            </div>

            {/* <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            /> */}

            <Menu.Items className="absolute right-0 z-10 mt-2 w-max origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    <div className="flex justify-between mx-4 my-3 border-b border-green-600">
                        <h4 className="text-sm mb-2 text-slate-500">Your cart</h4>
                        <a className="text-sm text-green-600">Lihat Sekarang</a>
                    </div>
                    {data.map((item, index) => {
                        return (
                            <Menu.Item>
                                <div className="flex justify-between items-center mt-5 mx-4 border-b border-gray-300">
                                    <img className="w-12 pb-2" src={item.img} alt="" />
                                    <p className="font-medium text-sm mx-10">{item.name}</p>
                                    <p className="text-red-500 font-bold text-sm">Rp{item.price}</p>
                                </div>
                            </Menu.Item>
                        );
                    })}
                </div>
            </Menu.Items>
        </Menu>
    )
}