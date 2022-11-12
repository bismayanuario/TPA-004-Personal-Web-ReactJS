import React from "react"
import { Row } from "react-bootstrap";
import "./Blog.css"
import {Card} from "./Card"
import creative from "../../pic/creative.jpg"

const Blog = () => {
    const DataBlog = [
        {
          id: 1,
          image: "https://blog.skillacademy.com/hs-fs/hubfs/pentingnya-creative-thinking.jpg?width=900&name=pentingnya-creative-thinking.jpg",
          title_one: "Soft Skill",
          desc_one: "Mengenal Creative Thinking, Jenis-jenisnya, dan Cara Meningkatkannya",
          link: "https://blog.skillacademy.com/creative-thinking-adalah",
        },
        {
          id: 2,
          image: "https://www.dicoding.com/blog/wp-content/uploads/2022/08/Blog_24_Agustus_-_Berdamai_dengan_Merge_-_Conflict.png",
          title_one: "Git & Github",
          desc_one: "Berdamai dengan Merge-Conflict",
          link: "https://www.dicoding.com/blog/berdamai-dengan-merge-conflict/",
          
        },
        {
          id: 3,
          image: "https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/blog/mulai-karir-sebagai-web-developer-langkah-mudah-dari-heru-joko-senior-fullstack-engineer-grab-details-1664431464107.jpg",
          title_one: "Web Developer",
          desc_one: "Mulai Karir Sebagai Web Developer: Langkah Mudah dari Heru Joko, Senior Fullstack Engineer Grab",
          link: "https://skilvul.com/blogs/mulai-karir-sebagai-web-developer-langkah-mudah-dari-heru-joko-senior-fullstack-engineer-grab",
        },
      ]
      
  return (
    <>
    <div className='blog p-5' id='blogs'>
            <div className='blogText'>
                <h3>Blog <span>Collection</span></h3> <br /> <hr />
            </div> 
            <div className='container text-center mt-4 blog-con'>
            <Row>
                      {DataBlog.map((value, index) => {
              return <Card key={index} image={value.image} title_one={value.title_one} desc_one={value.desc_one} link={value.link}/>
            })}
                      </Row>
            </div>
        </div>
















    </>
  )
}

export default Blog
