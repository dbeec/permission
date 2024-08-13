import Sidebar from "@/components/sidebar/sidebar";
import styles from "../page.module.css";
import Header from "@/components/header/header";
import Title from "@/components/title-views/title-views";
import BlockView from "@/components/block-views/block-component";
import SaveIcon from "@mui/icons-material/Save";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Tooltip } from "@mui/material";
import ExportButton from "@/components/buttons/export-button/export";
import BulkUploadButton from "@/components/buttons/bulkupload-button/bulk-upload";
import { AgreementBasicInformation, AgreementResidenceAndContact } from "@/components/forms/agreementregister-form/agreementRegisterForm";

export default function AgreementRegister() {
  return (
    <>
      <div className={styles.dashboard__container}>
        <Sidebar />
        <div className={styles.dashboard__main}>
          <Header />
          <div className={styles.dashboard__content}>
            <Title title="REGISTRO DE CONVENIO" />

            <div className={styles.content__button__export}>
              {/* <Tooltip title="Exportar datos">
                <ExportButton>
                  <FileDownloadIcon />
                </ExportButton>
              </Tooltip> */}

              <Tooltip title="Importar datos">
                <BulkUploadButton>
                  <FileUploadIcon />
                </BulkUploadButton>
              </Tooltip>
            </div>

            <div className={styles.block__content}>
              <BlockView blockTitle="INFORMACIÓN BÁSICA">
                <AgreementBasicInformation />
              </BlockView>

              <BlockView blockTitle="INFORMACIÓN DE RESIDENCIA Y CONTACTO">
                <AgreementResidenceAndContact />
              </BlockView>

              <BlockView blockTitle="INFORMACIÓN TRIBUTARIA">

              </BlockView>

              <BlockView blockTitle="INFORMACIÓN BANCARIA Y FINANCIERA">

              </BlockView>

              <BlockView blockTitle="PARAMETROS DE ACTIVACIÓN">

              </BlockView>

              <BlockView blockTitle="CARGA DE DOCUMENTOS">

              </BlockView>
            </div>

            <div className={styles.button}>
              <Tooltip title="Guardar registro">
                <button>
                  Guardar <SaveIcon sx={{ fontSize: "1.3rem" }} />
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
