import styles from "./Search.module.css";

export const Search = ({ placeHolder, value, onChange, onSubmit }: any) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        className={styles.search}
        type="text"
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    </form>
  );
};
