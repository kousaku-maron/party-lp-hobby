import { NextApiRequest, NextApiResponse } from 'next'
import { CreatePost } from 'entities/post'
import { createPost } from 'repositories/post'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data: CreatePost = {
    message: req.body.message,
    writer: 'temp',
    imageURL: req.body.imageURL,
  }

  await createPost(req.body.postID, data)
  res.status(200).json({ id: req.body.postID })
}
