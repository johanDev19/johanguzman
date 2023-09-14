import { useState } from 'react';
import styles from './App.module.scss';
import { LandingPage } from './components/landing-page/landing-page';
import { Footer } from './components/footer/footer';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <div />
            <LandingPage />
            <Footer />
        </div>
    );
}

export default App;
