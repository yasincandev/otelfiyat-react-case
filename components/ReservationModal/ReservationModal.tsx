import { FC, Fragment, useRef, useState } from 'react';
import { Dialog, RadioGroup, Transition } from '@headlessui/react';
import Swal from 'sweetalert2';

type ReservationModalProps = {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (open: boolean) => void;
};

const breakfast = [
  { name: 'Yarım Pansiyon', description: 'Detaylar İçin Arayınız' },
  { name: 'Oda Kahvaltı', description: 'Sadece kahvaltı dahil.' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
const ReservationModal: FC<ReservationModalProps> = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);
  const [selected, setSelected] = useState(breakfast[0]);

  const handleBooking = () => {
    Swal.fire({
      title: 'Başarılı!',
      text: 'Rezervasyonunuz alınmıştır.',
      icon: 'success',
      confirmButtonText: 'Tamam',
    });
    setOpen(false);
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
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

        <div className="fixed inset-0 z-10 overflow-y-auto">
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-md font-medium leading-6 text-gray-900"
                      >
                        Bu Odayı Rezerve Etmek İstediğinize Emin Misiniz?
                      </Dialog.Title>
                      <div className="mt-5">
                        <RadioGroup value={selected} onChange={setSelected}>
                          <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                            Size Uygun Seçimi Yapınız
                          </RadioGroup.Label>
                          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {breakfast.map((size) => (
                              <RadioGroup.Option
                                as="div"
                                key={size.name}
                                value={size}
                                className={({ active }) =>
                                  classNames(
                                    active ? 'ring-2 ring-indigo-500' : '',
                                    'relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none'
                                  )
                                }
                              >
                                {({ active, checked }) => (
                                  <>
                                    <RadioGroup.Label
                                      as="p"
                                      className="text-base font-medium text-gray-900"
                                    >
                                      {size.name}
                                    </RadioGroup.Label>
                                    <RadioGroup.Description
                                      as="p"
                                      className="mt-1 text-sm text-gray-500"
                                    >
                                      {size.description}
                                    </RadioGroup.Description>
                                    <div
                                      className={classNames(
                                        active ? 'border' : 'border-2',
                                        checked
                                          ? 'border-indigo-500'
                                          : 'border-transparent',
                                        'absolute -inset-px rounded-lg pointer-events-none'
                                      )}
                                      aria-hidden="true"
                                    />
                                  </>
                                )}
                              </RadioGroup.Option>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={handleBooking}
                    className=" mx-auto bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                  >
                    Rezervasyon Yap
                  </button>
                </div>
                <div className="mt-6 text-center">
                  <p className="group inline-flex text-base font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>

                    <span className="text-gray-500 group-hover:text-gray-700">
                      Rezervasyonlarınız Güvende
                    </span>
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ReservationModal;
