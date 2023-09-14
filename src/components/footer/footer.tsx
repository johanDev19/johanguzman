import classNames from 'classnames';
import { WhatsappLogo, GoogleLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

import styles from './footer.module.scss';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames(styles.footerLinkContainer, 'section')}>
                <div className={styles.links}>
                    <h3 className={styles.title}>Servicios</h3>
                    <a href="https://tally.so/r/mY0BBq" className={styles.link}>
                        Landing Page
                    </a>
                    <a href="https://tally.so/r/mY0BBq" className={styles.link}>
                        Tienda en línea
                    </a>
                    <a href="https://tally.so/r/mY0BBq" className={styles.link}>
                        Páginas cooperativas
                    </a>
                    <a href="https://tally.so/r/mY0BBq" className={styles.link}>
                        CRM o sistemas complejos
                    </a>
                    <a href="https://tally.so/r/mY0BBq" className={styles.link}>
                        Consultoría personalizada
                    </a>
                </div>
                <div className={styles.links}>
                    <h3 className={styles.title}>Contacto</h3>
                    <a href="https://wa.me/18496323447" target='_blank' className={styles.link}>
                        <div className={styles.icon}>
                            <WhatsappLogo weight="fill" size={20} color="#fff" />
                        </div>
                        +1849-632-3447
                    </a>
                    <a href="mailto:johan.dev19@gmail.com" target='_blank' className={styles.link}>
                        <div className={styles.icon}>
                            <GoogleLogo weight="fill" size={20} color="#fff" />
                        </div>
                        johan.dev19@gmail.com
                    </a>
                    <a href="https://www.linkedin.com/in/johan-guzman/" target='_blank' className={styles.link}>
                        <div className={styles.icon}>
                            <LinkedinLogo weight="fill" size={20} color="#fff" />
                        </div>
                        Página de LinkedIn
                    </a>
                    <a href="https://github.com/johanDev19" target='_blank' className={styles.link}>
                        <div className={styles.icon}>
                            <GithubLogo weight="fill" size={20} color="#fff" />
                        </div>
                        Página de github
                    </a>
                </div>
            </div>
            <div />
        </div>
    );
};
