import { FC, MouseEventHandler } from "react"

interface props {
    open:boolean
    onClose : MouseEventHandler<HTMLElement>
    children:React.ReactNode
}

const Modal :FC<props> =  ({ open, onClose, children })  =>{
    return (
      // backdrop
      <div
        onClick={onClose}
        className={`
          fixed py-4 md:py-0 inset-0 md:inset-4   container md:mx-auto rounded flex justify-center
          ${open ? "visible bg-transparent" : "invisible"}
        `}
        style={{zIndex:10}}
      >
        {/* modal */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
            bg-white rounded-xl py-6 h-fit max-h-[100%] px-6 overflow-auto w-fit
            ${open ? "scale-100 opacity-100" : "opacity-0"}
          `}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
          >
            X
          </button>
          {children}
        </div>
      </div>
    )
  }

export default Modal;