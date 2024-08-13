import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";
import styles from "./page.module.css";
import Title from "@/components/title-views/title-views";
import LanguageIcon from "@mui/icons-material/Language";
import GroupIcon from "@mui/icons-material/Group";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

export default function Dashboard() {
  return (
    <>
      <div className={styles.dashboard__container}>
        <Sidebar />
        <div className={styles.dashboard__main}>
          <Header />
          <div className={styles.dashboard__content}>
            <Title title="DASHBOARD" />

            <div className={styles.content__cards}>
              <div className={styles.cards}>
                <div className={styles.head__card}>
                  convenios
                  <LanguageIcon sx={{ color: "#f95e21" }} />
                </div>
                <p>41</p>
              </div>
              <div className={styles.cards}>
                <div className={styles.head__card}>
                  clientes
                  <GroupIcon sx={{ color: "#f95e21" }} />
                </div>
                <p>83,420</p>
              </div>
              <div className={styles.cards}>
                <div className={styles.head__card}>
                  créditos
                  <CurrencyExchangeIcon sx={{ color: "#f95e21" }} />
                </div>
                <p>28,939</p>
              </div>
              <div className={styles.cards}>
                <div className={styles.head__card}>
                  beneficiarios
                  <MilitaryTechIcon sx={{ color: "#f95e21" }} />
                </div>
                <p>83,307</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
