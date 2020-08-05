import React, { useMemo, useState, useCallback } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from './create.module.css'
import Button from 'components/button'
import TextField from 'components/textField'
import YourPost from 'components/yourPost'
import { SerializedPost } from 'entities/post'
import { usePickFile } from 'services/hooks/file'
import { putPostImage, getPostID } from 'repositories/post'

const CreatePostPage = () => {
  const router = useRouter()
  const [message, setMessage] = useState<string>('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [image, imageURL, onChangeImage] = usePickFile()

  const post = useMemo(() => {
    const data: SerializedPost = {
      id: 'temp',
      writer: 'temp',
      message,
      imageURL: imageURL,
      createdAt: Date.now().toString(),
    }

    return data
  }, [imageURL, message])

  // TODO: ローディング表示処理とエラーハンドリング
  const onPublish = useCallback(async () => {
    const postID = getPostID()
    const { imageURL } = await putPostImage(postID, image)

    const res = await fetch('/api/post/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        postID,
        message,
        imageURL,
      }),
    })

    res.json().then((data) => router.push(`/post/${data.id}`))
  }, [image, message, router])

  return (
    <div className={styles.root}>
      <Head>
        <title>Party - Create Your LP</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <main className={styles.content}>
        <div className={styles.leftSection}>
          <div className={styles.titleTextWrapper}>
            <h1 className={styles.titleText}>Party</h1>
          </div>
          <div className={styles.form}>
            <label className={styles.pickImageWrapper}>
              {imageURL ? (
                <img src={imageURL} className={styles.pickImage} />
              ) : (
                <div className={styles.pickImagePlacehoder}>
                  <div className={styles.pickImageIconWrapper}>
                    <img className={styles.pickImageIcon} src="/images/photo.png" />
                  </div>
                  <p className={styles.pickImageText}>写真を選ぶ</p>
                </div>
              )}

              {/* MEMO: エリアクリックでイベントを起こさせたいので非表示 */}
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(e) => {
                  if (!e.target.files) return
                  onChangeImage(e.target.files[0])
                }}
              />
            </label>

            <div className={styles.messageWrapper}>
              <div className={styles.labelTextWrapper}>
                <p className={styles.messageLabelText}>メッセージ</p>
              </div>
              <TextField fullWidth={true} height={120} onChange={(e) => setMessage(e.target.value)} />
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.yourPostWrapper}>
            <YourPost post={post} preview={true} />
          </div>

          <div className={styles.submitButtonWrapper}>
            <Button color={message && imageURL ? '#FF7146' : '#9B9399'} disabled={!message || !imageURL} onClick={onPublish}>
              <p className={styles.submitButtonText}>公開する</p>
            </Button>
          </div>
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

export default CreatePostPage
