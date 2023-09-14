import classNames from 'classnames';
import styles from './landing-page.module.scss';
import { Hero } from '../hero/hero';
import { Services } from '../services/services';

export interface LandingPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const LandingPage = ({ className }: LandingPageProps) => {
    return (
        <div className={classNames(styles.root, className, 'section')}>
            <Hero />
            <Services />
        </div>
    );
};
