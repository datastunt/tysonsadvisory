const Blob = ({color}: {color: string}) => {
  return (
      <div className="w-1/3 h-fit absolute -bottom-10 -right-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="20" />
            </filter>
          </defs>

          <path fill={color} opacity="0.7" filter="url(#softBlur)"
            d="M16.7,-19.9C28,-10.4,47.8,-11.2,51.8,-6.5C55.7,-1.9,43.7,8.2,36.9,22.6C30.2,37.1,28.7,55.8,20.3,61.3C11.9,66.8,-3.3,58.9,-16.3,51.4C-29.3,43.8,-40,36.5,-46.1,26.4C-52.3,16.2,-53.9,3.2,-47.1,-3.7C-40.3,-10.5,-25.2,-11.3,-16,-21.2C-6.7,-31,-3.4,-49.9,-0.3,-49.5C2.7,-49.1,5.4,-29.4,16.7,-19.9Z"
            transform="translate(100 100)" />
        </svg>

      </div>
  )
}

export default Blob
