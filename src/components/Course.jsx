import PropTypes from "prop-types"

const Course = ({title, assigment, part, description, more, }) => {
  return (
    <li className='w-[350px] p-8 bg-white rounded'>
        <h3 className="font-semibold text-2xl text-[#111111]">{title}</h3>
        <div className=" flex justify-start items-center gap-3 text-sm font-semibold">
            <span className="flex items-center">
                <p className="text-[#343434]">{assigment}</p>
                <p className="text-[#ABABAB]"> &nbsp;topshiriq</p>
            </span> 
            <span className="w-[1px] h-4 bg-[#343434]"></span>
            <span className="flex items-center">
                <p className="text-[#343434]">{part}</p>
                <p className="text-[#ABABAB]"> &nbsp;boim</p>
            </span> 
        </div>
        <hr className="bg-[#0F314C] mt-4" />

        <p className="mb-10">{description}</p>

        <a className="flex justify-start gap-2 w-44 text-white py-3 px-4 bg-[#1DD1A1] rounded mt-10" href="#">Kursni boshlash <img src="src/assets/arrow-right.svg" alt="" /></a>
    </li>
  )
}

export default Course
