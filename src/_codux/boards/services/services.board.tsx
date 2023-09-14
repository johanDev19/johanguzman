import { createBoard } from '@wixc3/react-board';
import { Services } from '../../../components/services/services';

export default createBoard({
    name: 'Services',
    Board: () => <Services />,
    isSnippet: true,
});
