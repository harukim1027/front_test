import { Fragment, useCallback, useRef, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import '../index.css';
import React from 'react';
import GridLayout from 'react-grid-layout';
import './Test.css';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function MainPage() {
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
            <div className="md:grid md:grid-cols-2">
              <div className="mx-auto w-full py-6 sm:px-6 lg:px-8">
                {/* Replace with your content */}
                <div className="px-4 py-6 sm:px-0">
                  <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
                </div>
                {/* /End replace */}
              </div>
              <div className="mx-auto w-full py-6 sm:px-6 lg:px-8">
                {/* Replace with your content */}
                <div className="px-4 py-6 sm:px-0">
                  <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
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
