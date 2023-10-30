import styles from '@/app/page.module.scss'
import routes from '@/app/data/routes.json'
import blocs from '@/app/data/blocs.json'
import Link from 'next/link'
import { ratingText, gtmCode, siteName, websiteHost } from '@/app/_helpers/config';

export const metadata = {
    title: 'Sunset Forest Boulder Problem Listings | CRAGS.HK',
    description: 'Find all the boulder problems at Sunset Forest on CRAGS.HK, neatly organized by blocs. Stay updated with our regular updates and use our search function to find specific problems quickly and easily. Your complete guide to bouldering in Sunset Forest.',
    openGraph: {
        title: 'Sunset Forest Boulder Problem Listings | CRAGS.HK',
        description: 'Find all the boulder problems at Sunset Forest on CRAGS.HK, neatly organized by blocs. Stay updated with our regular updates and use our search function to find specific problems quickly and easily. Your complete guide to bouldering in Sunset Forest.',
        url: websiteHost,
        siteName: siteName,
        images: [
            {
                url: `${websiteHost}og-image.jpg`,
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
}

export default function Home() {
    return (
        <main className={styles.main}>
            <div className="container">
                <h1>Sunset Forest Boulder Problem Listings</h1>
                {blocs.data.map((bloc) => {
                    return <section className={styles.bloc}>
                        <h2>{bloc.id} - {bloc.name}</h2>
                        <ul className={styles.blocRoutes}>
                            {routes.data.filter(route => route.blocs === bloc.id).map((route) => {
                                return <li className={styles.blocRoute} key={route.id}>
                                    <Link href={`#`}>
                                        <div className={styles.blocRouteGrade}>{route.gradings.map(grade => grade !== 'project' ? `V${grade}` : grade).join('/')}</div>
                                        <div className={styles.blocRouteId}>{route.id} - </div>
                                        <div className={styles.blocRouteName}>{route.name}{route.isSds ? ' (sds)' : ''}{route.rating !== 0 ? ratingText[route.rating] : ''}</div>
                                    </Link>
                                </li>
                            })}
                        </ul>
                    </section>;
                })}
                <br/>
                <p>Welcome to the most comprehensive list of boulder problems at Sunset Forest, your go-to resource at CRAGS.HK. Our listings are meticulously organized by blocs, making it easy for you to navigate and find the specific problems you're interested in.</p>
                <p>From the most challenging routes to beginner-friendly problems, our guide covers it all. Each problem is detailed with its grade and any additional notes that might help you on your climbing journey. Our aim is to make your bouldering experience at Sunset Forest as enjoyable and fulfilling as possible.</p>
                <p>What sets our guide apart is the regular updates we provide. We understand that conditions can change, new problems can be set, and old ones might evolve; that's why we make sure our guide is always up-to-date.</p>
                <p>To make things even easier, we've integrated a search function into our page. Whether you're looking for a specific problem, a particular grade, or a certain bloc, a quick search will get you the information you need in no time.</p>
                <p>Join us in exploring the joy of bouldering at Sunset Forest. Whether you're planning your next visit or looking to challenge yourself with a new problem, CRAGS.HK is your trusted companion.</p>
                <p>Stay tuned for updates and remember, the only way is up!</p>
            </div>
        </main >
    )
}