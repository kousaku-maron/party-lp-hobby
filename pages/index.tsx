import React from 'react'
import Head from 'next/head'
import styles from './index.module.css'
import Button from '../components/button'

const Home = () => {
  return (
    <div className={styles.root}>
      <Head>
        <title>Party</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <main className={styles.content}>
        <div className={styles.leftSection}>
          <div className={styles.topContent}>
            <div className={styles.titleTextWrapper}>
              <h1 className={styles.titleText}>Party</h1>
            </div>
            <div className={styles.subtitleTextWrapper}>
              <h3 className={styles.subtitleText}>ともだちを誘って、オンライン横丁へ飲みに行こう！</h3>
            </div>
            <div className={styles.subtitleTextWrapper}>
              <h3 className={styles.subtitleText}>“Party”はどこからでも参加できる横丁を提供します。</h3>
            </div>

            <div className={styles.lineButtonWrapper}>
              <a href="https://lin.ee/B8pKue0">
                <Button color="#00B900">
                  <div className={styles.lineiconWrapper}>
                    <img className={styles.lineicon} src="/images/lineicon.png" />
                  </div>
                  <p className={styles.lineButtonText}>事前登録はこちら</p>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <img className={styles.screenshot} src="/images/screenshot.png" />
          <div className={styles.copyrightTextWrapper}>
            <p className={styles.copyrightText}>
              <span style={{ fontSize: 24 }}>©</span>Party.inc ALL Rights Reserved.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
