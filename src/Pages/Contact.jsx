import { useEffect } from 'react'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Contact = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.from('.contact-card', {
      scrollTrigger: {
        trigger: '.contact-card',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })

    gsap.from('.contact-item', {
      scrollTrigger: {
        trigger: '.contact-items',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="contact-card w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-8 hover:shadow-xl transition-shadow duration-300">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">Get in Touch</h1>
        
        <div className="contact-items space-y-4 sm:space-y-8">
          <div className="contact-item flex flex-col sm:flex-row items-start sm:items-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            <div className="bg-blue-500 p-2 sm:p-3 rounded-full mb-2 sm:mb-0">
              <MdEmail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div className="sm:ml-4">
              <p className="text-xs sm:text-sm font-medium text-gray-600">Email</p>
              <p className="text-base sm:text-lg text-gray-800 hover:text-blue-500 transition-colors duration-300 break-all">umar.developer.mern@email.com</p>
            </div>
          </div>

          <div className="contact-item flex flex-col sm:flex-row items-start sm:items-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            <div className="bg-green-500 p-2 sm:p-3 rounded-full mb-2 sm:mb-0">
              <MdPhone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div className="sm:ml-4">
              <p className="text-xs sm:text-sm font-medium text-gray-600">Phone</p>
              <p className="text-base sm:text-lg text-gray-800 hover:text-green-500 transition-colors duration-300">+92 (316) 715-1733</p>
            </div>
          </div>

          <div className="contact-item flex flex-col sm:flex-row items-start sm:items-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            <div className="bg-purple-500 p-2 sm:p-3 rounded-full mb-2 sm:mb-0">
              <MdLocationOn className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div className="sm:ml-4">
              <p className="text-xs sm:text-sm font-medium text-gray-600">Address</p>
              <p className="text-base sm:text-lg text-gray-800 hover:text-purple-500 transition-colors duration-300">Pakgate, Punjab, Multan, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact