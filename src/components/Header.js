import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd  }) => {
     return (
        <header className='header'> 
            <h1 style={headingStyle}> {title}</h1> 
            
            <Button color={showAdd  ? 'black' : 'green'} 
             text={showAdd  ?
             'close' : 'Add'}
              onClick={onAdd} />
            
        </header>
    )
}

 Header.defaultProps = {
     title: 'tasktrack',
 }

 Header.propTypes = {
     title: PropTypes.string.isRequired,

 }

const headingStyle = {
    color: 'black', backgroundColor: 'red'
}

export default Header
