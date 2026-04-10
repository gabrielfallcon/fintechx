import styles from "./warnings.module.scss";

const warnings = [
  "Remembers what user said earlier in the conversation",
  "Allows user to provide. follow-up corrections With Ai",
  "Limited knowledge of world and events after 2021",
  "May occasionally generate incorrect information",
  "May occasionally produce harmful instructions or biased content",
];

const WarningsComponent = () => {
  return (
    <div className={styles.warnings}>
      <h2>BrainBox</h2>

      <div className={styles.list}>
        {warnings.map((warning, index) => (
          <div key={index} className={styles.item}>
            <p>{warning}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WarningsComponent;
