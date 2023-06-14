/* Next API */
import Image from 'next/image';
import Link from 'next/link';

/* Styles */
import styles from '@/app/page.module.scss';

/* Fonts */
import { Source_Code_Pro } from 'next/font/google';
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${sourceCodePro.className} ${styles.main}`}>
      <Image
        className={styles.image}
        src={'/eaProfile.png'}
        alt={'emre arabaci'}
        width={140}
        height={140}
        quality={100}
        priority={true}
      />

      <p className={`${styles.text} ${styles.description}`}>
        Hi, I&#39;m Emre Arabaci
      </p>
      <div className={styles.underline} />
      <p className={`${styles.text} ${styles.default}`}>
        I like to building user friendly apps, historical research and playing
        guitar.
      </p>

      <div className={styles.underline} />

      <div className={styles.links}>
        <Link
          className={styles.link}
          href={'https://linkedin.com/in/emrearabaci'}
          target={'_blank'}
        >
          linkedin
        </Link>
        <Link
          className={styles.link}
          href={'https://github.com/emrearabaci'}
          target={'_blank'}
        >
          github
        </Link>
        <Link
          className={styles.link}
          href={'https://codepen.io/arabaci'}
          target={'_blank'}
        >
          codepen
        </Link>
        <Link
          className={styles.link}
          href={'https://www.figma.com/@arabaci'}
          target={'_blank'}
        >
          figma
        </Link>
        <Link
          className={styles.link}
          href={'https://www.codewars.com/users/arabaci'}
          target={'_blank'}
        >
          codewars
        </Link>
        <Link
          className={styles.link}
          href={'https://stackoverflow.com/users/11316848/emre-arabaci'}
          target={'_blank'}
        >
          stackoverflow
        </Link>
      </div>
    </div>
  );
}
