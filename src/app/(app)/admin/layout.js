import Admin from '../components/admin'

export default function Layout({ children }) {
    return (
        <div className="bg-primary">
            <section className="fixed left-0 z-20">
                <Admin />
            </section>
            {children}
        </div>
    )
}
