
import PropTypes from 'prop-types'
// I wrote impt  meaning import propsType

const Header = ({ title }) => {
 // Or write  ({title})
 // then change the props.title to just title
  return (
    <header>
    <h1> {title} </h1>

    </header>
  )
}

Header.defaultProps = {
 title: 'Task Tracker',
}

Header.propTypes ={
  title: PropTypes.string,
} 


export default Header