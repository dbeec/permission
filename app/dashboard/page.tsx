import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";
import styles from "./page.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboard__content}>
      <Sidebar />
      <Header />
    </div>
  );
}
