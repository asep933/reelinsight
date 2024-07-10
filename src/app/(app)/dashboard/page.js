import Hero from '@/components/Hero'
import FilmList from '@/components/FilmList'
import FilmListSec from '@/components/FilmListSec'

export const metadata = {
    title: 'ReelInsight - Dashboard',
}

const Dashboard = () => {
    return (
        <>
            <Hero />

            <section className="pt-8">
                <FilmList />
                <FilmListSec />
            </section>
        </>
    )
}

export default Dashboard
