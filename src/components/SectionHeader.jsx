import PropTypes from "prop-types"


const SectionHeader = ({title, button}) => {
  return (
    <section className="flex justify-between items-center py-8">
      <h2 className="text-[#2E2E2E] text-3xl">{title}</h2>
      <button className="py-2 px-8 text-[10px] font-medium bg-opacity-0 text-[#536DFD] border rounded-md border-[#536DFD]">{button}</button>
    </section>
  )
}

SectionHeader.propTypes = {
  title: PropTypes.string,
  button: PropTypes.string,
}

export default SectionHeader
