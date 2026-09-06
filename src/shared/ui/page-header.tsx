import styles from "./ui.module.css";

type PageHeaderProps = {
  description?: string;
  eyebrow: string;
  title: string;
};

export function PageHeader({ description, eyebrow, title }: PageHeaderProps) {
  return (
    <header className={styles.pageHeader}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h1 className={styles.pageTitle}>{title}</h1>
      {description ? <p className={styles.pageDescription}>{description}</p> : null}
    </header>
  );
}
