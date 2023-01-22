import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {isLoading: true, blog: {}}

  componentDidMount() {
    this.fetchblogDetails()
  }

  fetchblogDetails = async () => {
    const {match} = this.props

    const rawresponse = await fetch(`https://apis.ccbp.in${match.url}`)

    const response = await rawresponse.json()

    const blog = {
      id: response.id,
      title: response.title,
      imageUrl: response.image_url,
      avatarUrl: response.avatar_url,
      author: response.author,
      content: response.content,
      topic: response.topic,
    }

    this.setState({blog, isLoading: false})
  }

  render() {
    const {isLoading, blog} = this.state

    return (
      <div className="BlogItemDetails">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <>
            <h1 className="blogItemDetailsHeading">{blog.title}</h1>
            <div className="blogItemDetailsAuthor">
              <img
                className="blogItemDetailsAuthorimg"
                alt={blog.avatarUrl}
                src={blog.avatarUrl}
              />
              <p className="blogItemDetailstopic">{blog.author}</p>
            </div>
            <img
              className="blogItemDetailsimg"
              src={blog.imageUrl}
              alt={blog.title}
            />
            <p className="blogItemDetailsContent">{blog.content}</p>
          </>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
