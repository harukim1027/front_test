import { Fragment, useCallback, useRef, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import '../index.css';
import React from 'react';
import GridLayout from 'react-grid-layout';
import './Test.css';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function MainPage() {
  const [currentButton, setCurrentButton] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const [tab1, setTab1] = useState(false);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const [tab4, setTab4] = useState(false);

  const ClickCurrentButton = () => {
    setCurrentButton(true);
    setActiveButton(false);
  };
  const ClickActiveButton = () => {
    setCurrentButton(false);
    setActiveButton(true);
  };

  const ClickTab1 = () => {
    setTab1(true);
    setTab2(false);
    setTab3(false);
    setTab4(false);
  };

  const ClickTab2 = () => {
    setTab1(false);
    setTab2(true);
    setTab3(false);
    setTab4(false);
  };

  const ClickTab3 = () => {
    setTab1(false);
    setTab2(false);
    setTab3(true);
    setTab4(false);
  };

  const ClickTab4 = () => {
    setTab1(false);
    setTab2(false);
    setTab3(false);
    setTab4(true);
  };

  return (
    <div>
      <>
        {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
        <div>
          <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Dashboard
              </h1>
            </div>
          </header>
          <main>
            <div className="md:grid md:grid-cols-2 lg:px-20">
              <div className="mx-auto w-full py-6 sm:px-6 lg:mx-8 ">
                {/* Replace with your content */}
                <div className="px-4 py-6 sm:px-0">
                  <span className="text-2xl font-bold">Title1</span>

                  <div className="more_text">
                    <a
                      href="#"
                      className="focus-within:outline-none focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2 hover:text-black hover:text-pink-400"
                    >
                      more 〉
                    </a>
                  </div>
                  <div className="md:w-full xs:w-full flex">
                    <div className="address_button flex text-center">
                      <button
                        onClick={() => ClickCurrentButton()}
                        className={
                          currentButton === true
                            ? 'address_button_text address_button_hover  border md:text-base text-black xs:text-sm  text-center  xs:w-full'
                            : 'address_button_text  border md:text-base text-black xs:text-sm  text-center  xs:w-full'
                        }
                      >
                        Current Tab1
                      </button>
                    </div>
                    <div className=" address_button flex text-center">
                      <button
                        onClick={() => {
                          ClickActiveButton();
                        }}
                        className={
                          activeButton === true
                            ? 'address_button_text address_button_hover  border md:text-base text-black xs:text-sm  text-center  xs:w-full'
                            : 'address_button_text  border md:text-base text-black xs:text-sm  text-center  xs:w-full'
                        }
                      >
                        Active Tab2
                      </button>
                    </div>{' '}
                    <div className=" address_button flex text-center">
                      <button
                        onClick={() => setActiveButton(!activeButton)}
                        className="address_button_text bg-gray-100 border md:text-base text-black xs:text-sm  text-center  xs:w-full "
                      >
                        Inactive Tab3
                      </button>
                    </div>
                  </div>
                  <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
                    <span className="click_text">
                      {' '}
                      {currentButton === true ? 'Tab1 Content' : 'Tab2 Content'}
                    </span>
                  </div>
                </div>
                {/* /End replace */}
              </div>
              <div className="mx-auto w-full py-6 sm:px-6 lg:px-8">
                {/* Replace with your content */}
                <div className="px-4 py-6 sm:px-0">
                  <span className="text-2xl font-bold">Title2</span>

                  <div className="more_text">
                    <a
                      href="#"
                      className="focus-within:outline-none focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2 hover:text-black hover:text-pink-400"
                    >
                      more 〉
                    </a>
                  </div>
                  <div className="md:w-full xs:w-full flex">
                    <div className="address_button flex text-center">
                      <button
                        onClick={() => ClickTab1()}
                        className={
                          tab1 === true
                            ? 'address_button_text address_button_hover  border md:text-base text-black xs:text-sm  text-center  xs:w-full'
                            : 'address_button_text  border md:text-base text-black xs:text-sm  text-center  xs:w-full'
                        }
                      >
                        Will check width to all tabs
                      </button>
                    </div>
                    <div className="address_button flex text-center">
                      <button
                        onClick={() => ClickTab2()}
                        className={
                          tab2 === true
                            ? 'address_button_text address_button_hover  border md:text-base text-black xs:text-sm  text-center  xs:w-full'
                            : 'address_button_text  border md:text-base text-black xs:text-sm  text-center  xs:w-full'
                        }
                      >
                        Tab2
                      </button>
                    </div>
                    <div className=" address_button flex text-center">
                      <button
                        onClick={() => {
                          ClickTab3();
                        }}
                        className={
                          tab3 === true
                            ? 'address_button_text address_button_hover  border md:text-base text-black xs:text-sm  text-center  xs:w-full'
                            : 'address_button_text  border md:text-base text-black xs:text-sm  text-center  xs:w-full'
                        }
                      >
                        Tab3
                      </button>
                    </div>{' '}
                    <div className=" address_button flex text-center">
                      <button
                        onClick={() => ClickTab4()}
                        className={
                          tab4 === true
                            ? 'address_button_text address_button_hover  border md:text-base text-black xs:text-sm  text-center  xs:w-full'
                            : 'address_button_text  border md:text-base text-black xs:text-sm  text-center  xs:w-full'
                        }
                      >
                        Tab4
                      </button>
                    </div>
                  </div>
                  <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
                    <span className="click_text">
                      {' '}
                      {tab1 === true
                        ? 'If width of tabs is over width of contents, that tabs will hide.'
                        : tab2 === true
                        ? 'Tab2 Content'
                        : tab3 === true
                        ? 'Tab3 Content'
                        : 'Tab4 Content'}
                    </span>
                  </div>
                </div>
                {/* /End replace */}
              </div>
            </div>{' '}
          </main>
        </div>
      </>
    </div>
  );
}

export default MainPage;
