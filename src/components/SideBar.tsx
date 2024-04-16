import { PencilLine } from "@phosphor-icons/react";
import styles from "./SideBar.module.css";
import Avatar from "./Avatar";

export default function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
        alt="Cover"
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/79678732?v=4" />
        <strong>Ramom Oliveria</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
