import PropTypes from "prop-types"

const Category = ({image, title,}) => {
  return (
    
        <li className="flex justify-between gap-3 max-w-[230px] min-w-[230px]
         py-5 px-12 mb-3 shadow-md bg-white rounded">
            <img className="" src={image} width={26} height={24} alt="icon" />
            <h3>{title}</h3>
        </li>
      
  )
}

Category.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
}

export default Category
