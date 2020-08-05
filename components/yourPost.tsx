import React from 'react'
import clsx from 'clsx'
import { SerializedPost } from 'entities/post'
import Button from 'components/button'
import styles from './yourPost.module.css'

type Props = {
  post: SerializedPost
  preview?: boolean
  className?: Pick<React.HTMLAttributes<HTMLElement>, 'className'>
  style?: React.CSSProperties
}

const YourPost = ({ post, preview = false, className, style }: Props) => {
  return (
    <div className={clsx(styles.content, className)} style={style}>
      <div className={styles.leftSection}>
        <div className={styles.topContent}>
          <div className={styles.titleTextWrapper}>
            <h1 className={styles.titleText}>Party</h1>
          </div>
          <div className={styles.subtitleTextWrapper}>
            <h3 className={styles.subtitleText}>{post.message}</h3>
          </div>

          <div className={styles.lineButtonWrapper}>
            {preview ? (
              <Button color="#00B900" disabled={false}>
                <div className={styles.lineiconWrapper}>
                  <img className={styles.lineicon} src="/images/lineicon.png" />
                </div>
                <p className={styles.lineButtonText}>事前登録はこちら</p>
              </Button>
            ) : (
              <a href="https://lin.ee/B8pKue0">
                <Button color="#00B900">
                  <div className={styles.lineiconWrapper}>
                    <img className={styles.lineicon} src="/images/lineicon.png" />
                  </div>
                  <p className={styles.lineButtonText}>事前登録はこちら</p>
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.thumbnailWrapper}>
          <div className={styles.thumbnailshadow} />
          {post.imageURL ? (
            <img className={styles.thumbnailshot} src={post.imageURL} />
          ) : (
            <div className={styles.thumbnailDammy}>
              <img className={styles.photoicon} src="/images/photo.png" />
            </div>
          )}
        </div>
        <div className={styles.copyrightTextWrapper}>
          <p className={styles.copyrightText}>
            <span style={{ fontSize: 24 }}>©</span>Party.inc ALL Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default YourPost
