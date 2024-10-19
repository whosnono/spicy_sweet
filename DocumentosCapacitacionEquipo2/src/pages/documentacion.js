import styles from "./comun.module.css"
import Layout from '@theme/Layout';
import Btn from '@site/src/components/btn';

export default function Documentacion() {
    return (
        <Layout>
           <header  className={styles.header}>
                <h1>Página para la Documentación</h1>
                <p>En esta sección se encuentra la documentación del proyecto.</p>

                <Btn onClick = {() => alert('¡Documentación agregada!')}>Click me</Btn>
            </header> 
        </Layout>
      );
    }

