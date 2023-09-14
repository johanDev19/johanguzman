import classNames from 'classnames';
import styles from './items.module.scss';

export interface Item {
    title: string;
    description: string;
}

export interface ItemsProps {
    className?: string;
    data: Item[];
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Items = ({ className, data }: ItemsProps) => {
    return (
        <div className={classNames(className, styles.root)}>
            {data?.map((item) => (
                <div className={styles.itemContainer} key={item.title}>
                    <h6 key={item.title} className={styles.h6}>
                        {item.title}
                    </h6>
                    <p className={styles.p}>{item.description}</p>
                </div>
            ))}
        </div>
    );
};
