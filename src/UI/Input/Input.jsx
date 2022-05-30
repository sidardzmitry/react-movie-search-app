import styles from "./Input.module.css";

const Input = (props) => {
  const {
    search,
    changeInput = Function.prototype,
    handleKey = Function.prototype,
  } = props;
  return (
    <>
      <input
        className={styles["search-input"]}
        type="search"
        placeholder="Search"
        value={search}
        onChange={changeInput}
        onKeyDown={handleKey}
      />
    </>
  );
};

export default Input;
