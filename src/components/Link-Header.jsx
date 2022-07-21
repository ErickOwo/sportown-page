import Link from "next/link"

const LinkComponent = ({ link, name }) => {
  return (
    <Link href={ link } >
      <button className="p-2 hover:bg-black/30">
        { name }
      </button>
    </Link>
  )
}

export default LinkComponent;