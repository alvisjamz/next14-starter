import Image from 'next/image'

const aboutPage = () => {
  return (
    <div>
      <Image 
        src="/about.png"
        alt="aboutimage"
        width={500}
        height={500}
        />
    </div>
  )
}

export default aboutPage