import React from "react";
import "./header.css"
import people from "../../Assets/people.png"
import ai from "../../Assets/ai.png"

export default function Header(){
    return(
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">
                    Let's make something amazing with the help of GPT-3 OpenAI
                </h1>
                <p>
                ChatGPT is an artificial-intelligence chatbot developed by OpenAI and launched in November 2022. 
                It is built on top of OpenAI's GPT-3.5 and GPT-4 families of large language models and has 
                been fine-tuned using both supervised and reinforcement learning techniques.
                </p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your email address"/>
                    <button type="button">Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt="people"/>
                    <p>Are you the only one who is not using ChatGPT.</p>
                </div>
            </div>
            <div className="gpt3__header-image">
                    <img src={ai} alt="AI"/>
                </div>
        </div>
    )
}