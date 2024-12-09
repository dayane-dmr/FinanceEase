export const Footer = () => {
    return(
        <footer className='bg-[url("/bgHeader.avif")] bg-round px-8 py-8 h-2 lg:px-14 pb-12'>
            <div className='max-w-screen-2xl mx-auto'>
                <p className='text-sm text-white flex justify-center'>Powered by: 
                <a 
                        href='https://github.com/DYNDMR' 
                        className='cursor-pointer text-sm ml-2' 
                        target='_blank' 
                        rel='noopener noreferrer'>
                        DYN DMR
                    </a>
                </p>
            </div>
        </footer>
    )
}