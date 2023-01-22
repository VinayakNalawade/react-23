import {Component} from 'react'

import './index.css'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {isLoading: true, blogsList: []}

  componentDidMount() {
    this.fetchList()
  }

  fetchList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')

    const responseList = await response.json()

    const blogsList = responseList.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))

    this.setState({blogsList, isLoading: false})
  }

  render() {
    const {isLoading, blogsList} = this.state

    return (
      <div className="blogsListContainer">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogsList.map(each => <BlogItem key={each.id} item={each} />)
        )}
      </div>
    )
  }
}

export default BlogList
