import styles from '@/app/page.module.scss'
import blocs from '@/app/data/blocs.json'
import Link from 'next/link'

export default function Blocs() {
    return (
        <main className={styles.main}>
            <div className="container">
                <h2>Blocs</h2>
                {blocs.data.map((bloc) => {
                    return <section className={styles.bloc}>
                        <h3><Link href={`/sunset-forest/bloc/${bloc.slug}`}>{bloc.id} - {bloc.name}</Link></h3>
                    </section>;
                })}
            </div>
        </main>
    )
}
