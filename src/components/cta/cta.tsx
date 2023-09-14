import classNames from 'classnames';
import styles from './cta.module.scss';

export interface CtaProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Cta = ({ className }: CtaProps) => {
    return (
        <div className={classNames(styles.root, className, 'section')}>
            <h2 className={styles.title}>Obtén una cotización personalizado</h2>
            <button className={styles.button}>Cotizar</button>
        </div>
    );
};
