import './index.css'

import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {item} = props

  return (
    <Link className="blogItemLink" to={`/blogs/${item.id}`}>
      <div className="blogItemContainer">
        <img className="blogItemimg" src={item.imageUrl} alt={item.imageUrl} />
        <div className="blogItemContentContainer">
          <p className="blogItemtopic">{item.topic}</p>
          <h1 className="blogItemTitle">{item.title}</h1>
          <div className="blogItemAuthor">
            <img
              className="blogItemAuthorimg"
              alt={item.avatarUrl}
              src={item.avatarUrl}
            />
            <p className="blogItemtopic">{item.author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
