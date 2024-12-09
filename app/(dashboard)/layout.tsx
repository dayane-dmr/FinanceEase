import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

type Props = {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {

    return (
        <>
            <Header/>
            <main className='bg-sky-100 px-3 lg:px-14 '>
                {children}
            </main>
           <Footer/>
        </>
    )

}

export default DashboardLayout;