/* Components */
import { Providers } from '@/lib/providers'

/* Instruments */
import styles from './styles/layout.module.css'
import './styles/globals.css'
import Navbar from './components/Navbar/Navbar'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <Navbar />
          <section className={styles.container}>
            <main className={styles.main}>{props.children}</main>
          </section>
        </body>
      </html>
    </Providers>
  )
}
