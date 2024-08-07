import Sidebar from '@/components/sidebar/sidebar';
import styles from '../page.module.css'
import Header from '@/components/header/header';
import Title from '@/components/title-views/title-views';

export default function AgreementList() {
  return (
    <>
      <div className={styles.dashboard__container}>
        <Sidebar />
        <div className={styles.dashboard__main}>
          <Header />
          <div className={styles.dashboard__content}>
            <Title title="lista de convenio" />

            
          </div>
        </div>
      </div>
    </>
  );
}