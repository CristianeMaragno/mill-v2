"use client"
import { Bubble } from "@typebot.io/react";

export const ChatBot = () => {

  return (
    <Bubble typebot="my-typebot-mg8w5tz" 
    theme={{
      button: { backgroundColor: "#063b27", iconColor: "#cfff92" },
      previewMessage: { backgroundColor: "white", textColor: "black" },
    }} />
  )
}