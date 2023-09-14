import classNames from 'classnames';

import ProfileImage from './../../assets/profile-image.jpg';
import styles from './hero.module.scss';

export interface HeroProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Hero = ({ className }: HeroProps) => {
    return (
        <div className={classNames(styles.root, className, 'section')}>
            <div className={styles.imageWrapper}>
                <img src={ProfileImage} alt="" />
            </div>
            <div>
                <h1 className={styles.title}>
                    Transforma tu negocio con mis soluciones web a medida. Desde landing pages
                    quecapturan clientes hasta tiendas en línea que impulsan ventas. ¿Necesitas un
                    CRMo consultoría experta? Lo tengo cubierto. Da el salto digital hoy.
                </h1>
            </div>
        </div>
    );
};
