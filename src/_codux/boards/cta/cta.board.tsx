import { createBoard } from '@wixc3/react-board';
import { Cta } from '../../../components/cta/cta';

export default createBoard({
    name: 'Cta',
    Board: () => <Cta />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 131,
    },
});
