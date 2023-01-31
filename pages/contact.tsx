import React from "react";

const Contact = () => {
  return (
    <div className='container my-24 px-6 mx-auto'>
      <section className='mb-32 text-gray-800'>
        <div className='flex flex-wrap'>
          <div className='grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6'>
            <h2 className='text-3xl font-bold mb-6'>Bize Ulaşın</h2>
            <p className='text-gray-500 mb-6'>
              Otelfiyat.com, Binlerce otel hakkında geniş bilgiler, En uygun
              fiyatlara rezervasyon seçenekleri sunuyor. Çağrı merkezimize
              ulaşarak rezervasyon danışmanı arkadaşlarımızdan dilediğiniz
              hizmeti alabilirsiniz. Hafta İçi: 08:00 - 24:00, Hafta Sonu: 09:00
              - 22:00 saatleri arasında sizlere yardımcı olmaktan mutluluk
              duyarız.
            </p>
            <p className='text-gray-500 mb-2'>
              Gazi Bulvarı No:95 Münir Birsel Plaza A Blok Kat 6 35280 Çankaya -
              Konak/İzmir
            </p>
            <p className='text-gray-500 mb-2'>+ 90 123 456 78 90</p>
            <p className='text-gray-500 mb-2'>info@otelfiyat.com</p>
          </div>
          <div className='grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6'>
            <form>
              <div className='form-group mb-6'>
                <input
                  type='text'
                  className='form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  placeholder='Adınız'
                />
              </div>
              <div className='form-group mb-6'>
                <input
                  type='email'
                  className='form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  placeholder='Email Adresiniz'
                />
              </div>
              <div className='form-group mb-6'>
                <textarea
                  className='
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      '
                  rows={3}
                  placeholder='Mesajınız'
                  defaultValue={""}
                />
              </div>
              <div className='form-group form-check text-center mb-6'>
                <input
                  type='checkbox'
                  className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer'
                  defaultChecked
                />
                <label
                  className='form-check-label inline-block text-gray-800'
                  htmlFor='checkbox'
                >
                  Gizlilik Politikasını Kabul Ediyorum
                </label>
              </div>
              <button
                type='submit'
                className='
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out'
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
