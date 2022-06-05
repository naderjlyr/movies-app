import "./CustomModal.scss";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useGetTrailerQuery } from "../../features/services/api";
export interface ModalProps {
  movieId: number;
  toggleOpen: () => void;
  open: boolean;
}
const CustomModal = ({ movieId, toggleOpen, open }: ModalProps) => {
  const { data: trailers } = useGetTrailerQuery(movieId);
  let firstTrailer = trailers?.results[0];

  return (
    <>
      {trailers && (
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={toggleOpen}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box className="trailer-container">
                <iframe
                  src={`https://www.youtube.com/embed/${firstTrailer?.key}`}
                  title={firstTrailer?.name}
                />{" "}
              </Box>
            </Fade>
          </Modal>
        </div>
      )}
    </>
  );
};

export default CustomModal;
