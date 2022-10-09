import styles from "../styles/Modal.module.scss";

const Modal = ({ selectedImg, setSelectedImg }: any) => {
  const handleClick = () => {
    setSelectedImg(null);
  };
  return (
    <div className={styles.modal}>
      <div className="backdrop" onClick={handleClick}>
        <div className="buttons">
          <div className="modalContent">
            <img src={selectedImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
