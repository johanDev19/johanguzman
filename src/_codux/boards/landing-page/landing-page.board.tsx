import { createBoard } from '@wixc3/react-board';
import { LandingPage } from '../../../components/landing-page/landing-page';
import LandingPage_module from '../../../components/landing-page/landing-page.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: 'LandingPage',
    Board: () => <LandingPage className="section" />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1032,
        windowHeight: 808,
    },
});
