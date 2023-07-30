// styles
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <p>For Business Inquiries</p>
      <p>soojin58@hotmail.com</p>
      <p>(253) 335-7533</p>
      <p>&copy; 2023 Soojin Music Academy. All rights reserved.</p>
      <p>Made with &#x1F496; by atorcode</p>
    </footer>
  );
};
