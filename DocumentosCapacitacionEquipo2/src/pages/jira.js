import styles from "./comun.module.css"
import Layout from '@theme/Layout';
import Btn from '@site/src/components/btn';

export default function Jira() {
    return (
        <Layout>
           <header  className={styles.header}>
                <h1>Página para información del Jira</h1>
                <p>En esta sección se encuentra toda la información más importante de Jira.</p>

                <Btn onClick = {() => alert('Direccionar al Jira')}>Click me</Btn>
            </header> 
        </Layout>
      );
    }