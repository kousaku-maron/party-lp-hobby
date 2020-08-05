import { firestore, storage, serverTimestamp } from '../firebase'
import { buildPost, CreatePost } from 'entities/post'

const postsRef = firestore.collection('posts')
const imagesRef = storage.ref('posts')

export const getPostID = () => {
  const postRef = postsRef.doc()
  return postRef.id
}

export const getPosts = async () => {
  const snapshot = await postsRef.get()
  const posts = snapshot.docs.map((doc) => buildPost(doc.id, doc.data()))
  return posts
}

export const createPost = async (postID: string, data: CreatePost) => {
  const postRef = postsRef.doc(postID)
  await postRef.set({ ...data, createdAt: serverTimestamp() })
  return { result: true }
}

export const putPostImage = async (postID: string, image: Uint8Array | Blob | ArrayBuffer) => {
  const thumbnailRef = imagesRef.child(`${postID}/thumbnail.png`)
  const task = thumbnailRef.put(image, { contentType: 'image/png' })

  return new Promise<{ imageURL: string }>((resolve, reject) => {
    task
      .then((snapshop) => snapshop.ref.getDownloadURL())
      .then((url) => resolve({ imageURL: url }))
      .catch((e) => reject(e))
  })
}
