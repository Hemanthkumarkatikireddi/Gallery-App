// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onClickContent, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails

  const imgClick = () => {
    onClickContent(id)
  }
  const isActiveBtn = isActive ? 'active-btn' : 'mini-img'
  return (
    <li className="thumbnail-list-type">
      <button className="thumbnail-list-container" type="button">
        <img
          className={isActiveBtn}
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={imgClick}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
