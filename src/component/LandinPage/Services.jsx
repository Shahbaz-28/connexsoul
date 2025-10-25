import React from 'react';

const Services = () => {
  const btn = [
    {
      imgSrc: '/images/services-1.svg',
      title: 'Ad Creative',
      description: 'Eye-catching designs that perform',
    },
    {
      imgSrc: '/images/services-2.svg',
      title: 'Social Media Creative',
      description: 'Engaging assets for all platforms',
    },
    {
      imgSrc: '/images/services-3.svg',
      title: 'Email Design',
      description: 'Templates & designs to grab attention',
    },
    {
      imgSrc: '/images/services-4.svg',
      title: 'Web Design',
      description: 'Growth-driving designs for web',
    },
    {
      imgSrc: '/images/services-5.svg',
      title: 'Presentation Design',
      description: 'Custom slide decks that stand out',
    },
  ];

  const btn2 = [ 
    {
      imgSrc: '/images/services-6.svg',
      title: 'Packaging & Merch',
      description: 'Custom slide decks that stand out',
    },
    {
      imgSrc: '/images/services-7.svg',
      title: 'Ebook Report Design',
      description: 'Your digital content supercharged',
    },
    {
      imgSrc: '/images/services-8.svg',
      title: 'Print Design',
      description: 'Beautiful designs for all thing printed',
    },
    {
      imgSrc: '/images/services-9.svg',
      title: 'Motion Design',
      description: 'For websites ads & presentations',
    },
    {
      imgSrc: '/images/services-10.svg',
      title: 'Illustration Design',
      description: 'Visual storytelling for your brand',
    },
  ];

  const btn3 = [
    {
      imgSrc: '/images/services-12.svg',
      title: 'Brand Identity Design',
      description: 'Expertise and custom design services',
    },
    {
      imgSrc: '/images/services-13.svg',
      title: 'Concept Creation',
      description: 'Ideas that will captivate your audience',
    },
  ];

  return (
    <>
    <section className="bg-[#0C0C0C] mt-12 rounded-[30px] absolute z-20">
        <div className="container !max-w-[1150px]">
          <div className="bg-[#1F1F1FEB] text-white px-7 pb-8 pt-3 rounded-[30px] mx-auto">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-3">
              {btn.map((btn, index) => (
                    <ul key={index} className='py-4'>
                    <li className='flex items-start text-[#FCFCD8] text-[15px] font-normal'>
                      <div>
                      <img src={btn.imgSrc} alt="" className='w-[19px] pt-[4px]' />
                      </div>
                      <div>
                      <span className='f-Nohemi-Light-BF6438cc583f70b ml-2'>{btn.title}</span>
                      <p className='f-Nohemi-Light-BF6438cc583f70b text-[11px] text-[#FCFCD899] leading-[14px] ml-2 pt-[2px]'>{btn.description}</p>
                      </div>
                    </li>
                  </ul>
                ))}
              </div>
              <div className="col-span-3">
              {btn2.map((btn2, index) => (
                  <ul key={index} className='py-4'>
                  <li className='flex items-start text-[#FCFCD8] text-[15px] font-normal'>
                    <div>
                    <img src={btn2.imgSrc} alt="" className='w-[19px] pt-[5px]' />
                    </div>
                    <div>
                    <span className='f-Nohemi-Light-BF6438cc583f70b ml-2'>{btn2.title}</span>
                    <p className='f-Nohemi-Light-BF6438cc583f70b text-[11px] text-[#FCFCD899] leading-[14px] ml-2 pt-[2px]'>{btn2.description}</p>
                    </div>
                  </li>
                </ul>
                ))}
              </div>
              <div className="col-span-3">
              {btn3.map((btn3, index) => (
                 <ul key={index} className='py-4'>
                 <li className='flex items-start text-[#FCFCD8] text-[15px] font-normal'>
                   <div>
                   <img src={btn3.imgSrc} alt="" className='w-[19px] pt-[4px]' />
                   </div>
                   <div>
                   <span className='f-Nohemi-Light-BF6438cc583f70b ml-2'>{btn3.title}</span>
                   <p className='f-Nohemi-Light-BF6438cc583f70b text-[11px] text-[#FCFCD899] leading-[14px] ml-2 pt-[2px]'>{btn3.description}</p>
                   </div>
                 </li>
               </ul>
                ))}
              </div>
              <div className="col-span-3">
                <div className='p-2 bg-[#1111118F] rounded-[12px]'>
                  <div>
                    <img src="/images/services-card.svg" alt="" />
                  </div>
                 <div className='mt-[-50px]'>
                 <div className='px-4'>
                    <button className='f-Nohemi-Light-BF6438cc583f70b bg-[#3B3B3BA3] text-[#FCFCD899] text-[10px] rounded-[6px] px-2 pb-1 pt-[6px]'>Book a call</button>
                    <h2 className='f-Nohemi-Light-BF6438cc583f70b text-[21px] text-[#FCFCD8] leading-[23px] pt-4'>Want to know if cohyve is a good fit ?</h2>
                    <p className='f-Nohemi-Light-BF6438cc583f70b text-[11px] text-[#FCFCD899] leading-[13px] pt-4'>Book a quick demo and let us answer all your questions.</p>
                  </div>
                  <div className='px-4 pt-5 relative'>
                    <input 
                    type="text"
                    placeholder='Your work email'
                    className='f-Nohemi-Light-BF6438cc583f70b text-[#FCFCD880] text-[12px] bg-[#6C6C6C17] pl-9 pr-2 py-3 rounded-[12px] w-full'
                     />
                     <img src="/images/services-mail.png" alt="" className='absolute top-[33.50px] left-[27px]' />
                     <button className='f-Nohemi-Light-BF6438cc583f70b text-[#171717] text-[14px] bg-[#FCFCD8] w-full rounded-[12px] pt-3 pb-2 px-4 text-center mt-2 mb-4'>Book a Call</button>
                  </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
