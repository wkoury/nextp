
exports.generateContent = function (name){
	return (
`import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function ${name}() {
  return (
    <div className={styles.container}>
      <Head>
        <title>${name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Page ${name} bootstrapped with <a href="https://www.npmjs.com/package/nextp" rel="noopener noreferrer" target="_blank">nextp</a>.
        </h1>
      </main>
    </div>
  );
}`
);

}
