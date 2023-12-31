import React from "react"
import "./whatGPT3.css"
import Feature from "../../component/feature/Feature"

export default function WhatGPT3(){
    return(
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title="What is GPT-3" 
                text="Generative Pre-trained Transformer 3 is an autoregressive language model released in 2020 
                that uses deep learning to produce human-like text. Given an initial text as prompt, it will 
                produce text that continues the prompt."/>
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">
                    The possibilities are beyond your imagination
                </h1>
                
            </div>
            <div className="gpt3__whatgpt3-container">
                
                <Feature title="Chatbots" 
                text="A chatbot or chatterbot is a software application used to conduct an online 
                chat conversation via text or text-to-speech, in lieu of providing direct contact
                 with a live human agent."/>

                <Feature title="KnowledgeBase" 
                text="Artificial intelligence (AI) is intelligence demonstrated by machines, 
                as opposed to intelligence of humans and other animals. Example tasks in which 
                this is done include speech recognition, computer vision, translation between (natural)
                 languages, as well as other mappings of inputs."/>

                <Feature title="Education"
                text="Artificial intelligence is now a part of our everyday lives. 
                It drives online shopping algorithms, web searches, and digital personal 
                assistants like Siri and Alexa. Our cars contain AI-powered safety functions, 
                and smart thermostats automatically adjust the temperature in our homes to save energy."/>
                
            </div>
        </div>
    )
}