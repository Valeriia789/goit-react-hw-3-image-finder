import errorImage from './error1.jpg'
import errorAltImage from './error2.jpg'

const ImageErrorView = ({ message }) => {
  return (
    <div role='alert'>
      <img src={errorImage} alt='Ooops, something went wrong' />
      <p>{message}</p>
    </div>
  )
}

export default ImageErrorView