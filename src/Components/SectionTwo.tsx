import DownloadInvoices from './DownloadInvoice'

const SectionTwo = () => {
    const handleDownload = (fileName: string) => {
        //  Create a link to download the invoice
        const link = document.createElement('a');
        link.href = `/api/download/${fileName}`; // Anpassa sökvägen till din nedladdningsruta på servern
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <div className='card-two'>

            <div className='payment'>
                <p>Date</p>
                <p>Amount</p>
                <p>Plan</p>
                <p>Status</p>
                <p><DownloadInvoices /></p>

            </div>
            <div className='payment-rad'>
                <p>Jan 2022</p>
                <p>USD $60.73</p>
                <p>Standard</p>
                <p className='payment-text'>Paid</p>
            </div>
            <div className='payment-rad'>
                <p>Des 2022</p>
                <p>USD $60.73</p>
                <p>Standard</p>
                <p className='payment-text'>Paid</p>
            </div>
            <div className='payment-rad'>
                <p>Feb 2022</p>
                <p>USD $60.73</p>
                <p>Standard</p>
                <p className='payment-text'>Paid</p>
                <p>Invoice</p>
            </div>

        </div>
    )
}

export default SectionTwo