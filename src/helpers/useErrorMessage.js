import { useState } from 'react'

function useErrorMessage(messages) {
  const [message, setMessage] = useState(null)

  function hideMessage() {
    setMessage(null)
  }
  const showMessages = messages.map(message => () => setMessage(message))

  return [message, hideMessage, ...showMessages]
}

export default useErrorMessage
