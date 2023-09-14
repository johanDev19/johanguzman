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
                    <a href="/" className={styles.link}>
                        Landing Page{' '}
                    </a>
                    <a href="/" className={styles.link}>
                        Tienda en línea
                    </a>
                    <a href="/" className={styles.link}>
                        Páginas cooperativas
                    </a>
                    <a href="/" className={styles.link}>
                        CRM o sistemas complejos
                    </a>
                    <a href="/" className={styles.link}>
                        Consultoría personalizada
                    </a>
                </div>
                <div className={styles.links}>
                    <h3 className={styles.title}>Contacto</h3>
                    <a href="/" className={styles.link}>
                        <div className={styles.icon}>
                            <WhatsappLogo weight="fill" size={20} color="#fff" />
                        </div>
                        +1849-632-3447
                    </a>
                    <a href="/" className={styles.link}>
                        <div className={styles.icon}>
                            <GoogleLogo weight="fill" size={20} color="#fff" />
                        </div>
                        johan.dev19@gmail.com
                    </a>
                    <a href="/" className={styles.link}>
                        <div className={styles.icon}>
                            <LinkedinLogo weight="fill" size={20} color="#fff" />
                        </div>
                        Página de LinkedIn
                    </a>
                    <a href="/" className={styles.link}>
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
