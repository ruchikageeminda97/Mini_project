import { View, Text } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'


const Chatscreen = () => {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Ask Ruchika',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2F3d-robot%2F2&psig=AOvVaw15I2yFOx0HCicfO4fI_3Ap&ust=1695994297144000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODH2p-1zYEDFQAAAAAdAAAAABAJ',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])


  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

export default Chatscreen