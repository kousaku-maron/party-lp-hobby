import { useState, useCallback } from 'react'

export const usePickFile = (): [File | undefined, string | undefined, (file: File) => Promise<unknown>] => {
  const [fileURL, setFileURL] = useState<string | undefined>(undefined)
  const [file, setFile] = useState<File | undefined>(undefined)

  const onChangeFile = useCallback(async (file: File) => {
    setFile(file)

    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (!reader.result) {
          return reject()
        }

        const result = reader.result.toString()
        setFileURL(result)
        resolve(result)
      }

      reader.onerror = () => reject()
      reader.onabort = () => reject()
      reader.readAsDataURL(file)
    })
  }, [])

  return [file, fileURL, onChangeFile]
}
