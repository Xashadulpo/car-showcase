import React from 'react'
import Image from 'next/image'
import { footerLinks } from '@/constant/constants'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col text-gray-300 mt-6 padding-x">
      <div className="flex justify-between items-start gap-20">
        <div className="flex flex-col items-start pl-6 gap-3 text-black ">
          <Image src='/logo.svg' alt='logo' width={118} height={18} />
          <p>
            asifHub 2022<br />All right resurved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((links) => (
            <div className="footer_link" key={links.title}>
              <h3 className='mb-3 text-black font-extrabold uppercase'>{links.title}</h3>
              
              {links.links.map((items) => (
                  <Link href={items.url} key={items.title}>
                    {items.title}
                  </Link>
              ))}
            </div>
          ))}
        </div>

      </div><br/><br/><br/>
      <div className="flex  text-gray-600 justify-between items-center  text-[14px] phone:text-base ">
          <div>
             <p>&copy;2021 carHub.All Rights Reserved</p>
          </div>
          <div className='flex justify-center gap-4'>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>

          </div>
      </div>
<h1>hi</h1>
    </footer>
  )
}

export default Footer
