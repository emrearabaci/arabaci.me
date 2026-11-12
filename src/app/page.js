/* Next API */
import Image from 'next/image';

/* Styles */
import styles from '@/app/page.module.scss';

/* Fonts */
import { Source_Code_Pro } from 'next/font/google';
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`${sourceCodePro.className} ${styles.main}`}>
      <Image
        className={styles.image}
        src={'/eaProfile.png'}
        alt={'Portrait of Emre Arabaci'}
        width={140}
        height={140}
        quality={100}
        priority={true}
      />

      <h1 className={`${styles.text} ${styles.description}`}>
        Hi, I&#39;m Emre Arabaci
      </h1>
      <div className={styles.underline} aria-hidden={'true'} />
      <p className={`${styles.text} ${styles.default}`}>
        I like to building user friendly apps, historical research and playing
        guitar.
      </p>

      <div className={styles.underline} aria-hidden={'true'} />

      <nav className={styles.links} aria-label={'Social profiles'}>
        <a
          className={styles.link}
          href={'https://www.linkedin.com/in/earabaci'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          linkedin
        </a>
        <a
          className={styles.link}
          href={'https://github.com/emrearabaci'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          github
        </a>
        <a
          className={styles.link}
          href={'https://stackoverflow.com/users/11316848/emre-arabaci'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          stackoverflow
        </a>
      </nav>
    </main>
  );
}
