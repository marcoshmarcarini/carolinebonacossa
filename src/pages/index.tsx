import Image from "next/image"

export default function Home(){
  return(
    <div>
      <Image 
        src={`https://www.carolinebonacossa.com.br/wp-content/uploads/2021/06/caroline-bonacossa-advocacia.jpg`} 
        width={300}
        height={600}
       alt='Image'/>
    </div>
  )
}