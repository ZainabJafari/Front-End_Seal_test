import React from 'react'
import { BiChevronDown } from "react-icons/bi";
import UploadInvoices from './UploadInvoices';

export const Header = () => {
  return (
    <div className='header'>
        <h2>Billing</h2>

        <div className='header-container'>
            <div className='header-container-one'>
            <p>Standard plan</p>
            <p className='user'>EM</p>
            <p><BiChevronDown/></p>
            </div>
            <div><UploadInvoices /></div>
        </div>

    </div>
  )
}
