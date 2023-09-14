import { createBoard } from '@wixc3/react-board';
import { Hero } from '../../../components/hero/hero';

export default createBoard({
    name: 'Hero',
    Board: () => <Hero />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 912,
        canvasHeight: 282,
    },
});
