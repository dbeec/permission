import Sidebar from "@/components/sidebar/sidebar";
import styles from "../page.module.css";
import Header from "@/components/header/header";
import Title from "@/components/title-views/title-views";
import BlockView from "@/components/block-views/block-component";
import AgreementRegisterForm from "@/components/forms/agreementregister-form/agreementRegisterForm";
import SaveIcon from "@mui/icons-material/Save";

export default function AgreementRegister() {
  return (
    <>
      <div className={styles.dashboard__container}>
        <Sidebar />
        <div className={styles.dashboard__main}>
          <Header />
          <div className={styles.dashboard__content}>
            <Title title="REGISTRO DE CONVENIO" />

            <div className={styles.block__content}>
              <BlockView blockTitle="INFORMACIÓN BÁSICA">
                <AgreementRegisterForm />
              </BlockView>

              <BlockView blockTitle="INFORMACIÓN DE RESIDENCIA Y CONTACTO">
                <AgreementRegisterForm />
              </BlockView>

              <BlockView blockTitle="INFORMACIÓN TRIBUTARIA">
                <AgreementRegisterForm />
              </BlockView>

              <BlockView blockTitle="INFORMACIÓN BANCARIA Y FINANCIERA">
                <AgreementRegisterForm />
              </BlockView>

              <BlockView blockTitle="PARAMETROS DE ACTIVACIÓN">
                <AgreementRegisterForm />
              </BlockView>

              <BlockView blockTitle="CARGA DE DOCUMENTOS">
                <AgreementRegisterForm />
              </BlockView>
            </div>

            <div className={styles.button}>
              <button>
                Guardar <SaveIcon sx={{ fontSize: "1.3rem" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
