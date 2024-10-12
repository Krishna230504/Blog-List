import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog-item">
      <div className="title-container">
        <h1 className="titles">{title}</h1>
        <p className="datee">{publishedDate}</p>
      </div>
      <p className="desc">{description}</p>
    </li>
  )
}

export default BlogItem
