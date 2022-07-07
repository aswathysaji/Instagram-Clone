import React from 'react'
import '../Styles/post.css'

function Post() {
  return (
    <div className='post' >
        <h2 className='post__header'>Username</h2>
        <img className='post__image' src="https://cdn.thenewstack.io/media/2022/05/600b72f9-react-1024x680.png" alt="post" />
        <h4>Username: Caption</h4>
    </div>
  )
}

export default Post