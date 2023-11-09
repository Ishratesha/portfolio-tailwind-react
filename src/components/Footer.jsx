const Footer = () => {
  return (
  
       
          
<footer className="bg-orange-500 py-15 w-full h-32">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center
     md:justify-between">
      <span className="text-sm text-gray-100 sm:text-center ">© 2023
       <a href="#" className="hover:underline">WebDev</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-100 sm:mt-0">
        <li>
            <a href="#home" className="mr-4 hover:underline md:mr-6 ">Home</a>
        </li>
        <li>
            <a href="#skills" className="mr-4 hover:underline md:mr-6">Skills</a>
        </li>
        <li>
            <a href="#about" className="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
            <a href="#projects" className="hover:underline">Projectss</a>
        </li>
    </ul>
    </div>
</footer>

         
    
  )
}

export default Footer