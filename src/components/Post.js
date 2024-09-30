import React from 'react'
import post from '../Assests/Images/icon-post.png'
import PostItems from './PostItems'
import arrow from '../Assests/Images/long-arrow-right.png'

const Post = () => {
 const postLists=[{
  "category":"categoryA",
  "description":"Quishendrerit dolor magna eget est lorem ipsum dolor sit",
  "date":"July 19, 2020"
 },
 {
  "category":"categoryB",
  "description":"Senectus et netus et malesuada fames ac turpis egestas integer",
  "date":"June 30, 2020"
 }
]
  return (
    <div>
         <div className="py-16 lg:py-20">
          <div className="flex items-center pb-6">
            <img src={post} alt="icon story" />
            <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
              My Post
            </h3>
            <a href="/blog"
              className="flex items-center pl-10 font-body italic text-green transition-colors hover:text-secondary dark:text-green-light dark:hover:text-secondary">
              All posts
              <img src={arrow} className="ml-3" alt="arrow right" />
            </a>
          </div>
          <div>
          {postLists.map((data,index)=>(
  <PostItems category={data.category} description={data.category} date={data.date} index={index} />
          ))
          }
       
          </div>
        </div>
      
    </div>
  )
}

export default Post
