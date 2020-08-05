export type Post = {
  id: string
  writer: string
  message: string
  imageURL: string
  createdAt: Date
}

export type SerializedPost = {
  createdAt: string
  id: string
  writer: string
  message: string
  imageURL: string
}

export type CreatePost = Omit<Post, 'id' | 'createdAt'>

export const buildPost = (id: string, data: firebase.firestore.DocumentData) => {
  const post: Post = {
    id,
    writer: data.writer,
    message: data.message,
    imageURL: data.imageURL,
    createdAt: data.createdAt.toDate(),
  }

  return post
}

export const serializedPost = (id: string, data: firebase.firestore.DocumentData) => {
  const post: SerializedPost = {
    id,
    writer: data.writer,
    message: data.message,
    imageURL: data.imageURL,
    createdAt: data.createdAt.toDate().toDateString(),
  }

  return post
}
