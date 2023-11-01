"use client"
import { Bubble } from "@typebot.io/react";

export const ChatBot = () => {

  return (
    <Bubble typebot="my-typebot-mg8w5tz" 
    theme={{
      button: { backgroundColor: "#479AC2", iconColor: "#FFFFFF" },
      previewMessage: { backgroundColor: "white", textColor: "black" },
    }} />
  )
}