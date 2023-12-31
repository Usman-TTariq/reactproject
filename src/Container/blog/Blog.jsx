import React from "react"
import "./blog.css"
import Article from "../../component/article/Article"
import blog01 from "../../Assets/blog01.png"
import blog02 from "../../Assets/blog02.png"
import blog03 from "../../Assets/blog03.png"
import blog04 from "../../Assets/blog04.png"
import blog05 from "../../Assets/blog05.png"


export default function Blog() {
    return (
        <div className="gpt3__blog section__padding">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>

                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us explore how it is?"/>
                    <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us explore how it is?"/>
                    <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us explore how it is?"/>
                    <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us explore how it is?"/>
                </div>
            </div>
       </div>
            )
    }