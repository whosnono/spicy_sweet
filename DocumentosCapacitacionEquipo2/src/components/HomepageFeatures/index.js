import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Miembros del equipo',
    Svg: require('@site/static/img/Miembros.svg').default,
    description: (
      <>
        Acevedo Camargo Arlette Sachenka <br />
        Amaro Ruiz Bryant Alejandro <br />
        Betancourt Laurean Tania Berenice <br />
        Cárdenas Rosas Sofía <br />
        Camacho Leon Adriana <br />
        Contreras Duarte Mariangel Lilibeth <br />
        Gutierrez Villa Jose Antonio <br />
        Figueroa Hernández Sofia Belem
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return ( 
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
