import classNames from 'classnames';
import styles from './services.module.scss';
import { Items } from '../items/items';

export interface ServicesProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const servicesList = [
    {
        title: 'Landing page',
        description: 'Páginas de inicio optimizadas para convertir visitantes en clientes.',
    },
    {
        title: 'Tienda en línea',
        description: 'Soluciones de comercio electrónico personalizadas para tu negocio.',
    },
    {
        title: 'Páginas cooperativas',
        description:
            'Diseño y desarrollo de sitios web para cooperativas y organizaciones sin fines de lucro.',
    },
    {
        title: 'CRM o sistemas complejos',
        description:
            'Implementación y personalización de sistemas de gestión de relaciones con el cliente y otros sistemas complejos.',
    },
    {
        title: 'Consultoría personalizada',
        description: 'Asesoramiento experto para optimizar tu presencia en línea.',
    },
];
export const Services = ({ className }: ServicesProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h4 className={styles.title}>Servicios</h4>
            <div>
                <Items data={servicesList} />
            </div>
        </div>
    );
};
