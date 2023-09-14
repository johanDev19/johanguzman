import { useState } from 'react';
import styles from './App.module.scss';
import { LandingPage } from './components/landing-page/landing-page';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <LandingPage />
        </div>
    );
}

export default App;
