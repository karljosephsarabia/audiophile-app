import { Fragment, useContext, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { CartContext } from '../context/CartContext';

const CartModal = () => {
    
    const { openModal , setOpenModal, cardData, handleRemoveFromCart, cartCount, total} = useContext(CartContext);
    const cancelButtonRef = useRef(null);

    function removeItemFromCart(index) {
        handleRemoveFromCart(index);
    };

    return (
        <>
            <Transition.Root show={openModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpenModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6" style={{maxHeight: "400px"}}>
                                    <div className="flex items-start justify-between">
                                        <Dialog.Title className="text-lg font-medium text-gray-900">Cart({cartCount})</Dialog.Title>
                                        <div className="ml-3 flex h-7 items-center">
                                            <button
                                                type="button"
                                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                onClick={() => setOpenModal(false)}
                                            >
                                                <span className="absolute -inset-0.5" />
                                                <span className="sr-only">Remove all</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <div className="flow-root">
                                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                {
                                                    cardData.map((product, index) => (
                                                    <li key={index} className="py-7">
                                                        <div className='' style={{ display: "flex", justifyContent: "space-between", alignItems: "start"}}>
                                                            <div className='' style={{display: "flex", gap: "8px"}}>
                                                                <div className="h-20 w-20 flex-shrink-0 rounded-md border border-gray-200">
                                                                    <img
                                                                        src={product.image.mobile}
                                                                        alt={product.slug}
                                                                        className="h-full w-full"
                                                                    />
                                                                </div>
                                                                <div className=''>
                                                                    <h3 className='' style={{textAlign: "start"}}>{product.name}</h3>
                                                                    <p style={{textAlign: "start"}}>{product.price}</p>
                                                                    <div className="flex flex-row gap-5" style={{marginTop: "5px"}}>
                                                                        <span className=" bg-[#F1F1F1]">
                                                                            <button className="w-[10px] h-[10px]">-</button>
                                                                            <input type="tel" name="quantity" className="text-center bg-[#F1F1F1] outline-none w-[38.72px] font-bold" defaultValue={1} min={0} max={99} maxLength={2} />
                                                                            <button className="w-[10px] h-[10px]">+</button>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className=''>
                                                                <span className='remove' onClick={() => removeItemFromCart(index)}></span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <p>Total</p>
                                        <p>${total}</p>
                                    </div>
                                    <div className="mt-6">
                                        <a href="#" className="bg-[#D87D4A] flex items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                                            Checkout
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};

export default CartModal;