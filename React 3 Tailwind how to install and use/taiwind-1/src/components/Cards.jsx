import React from 'react'

const Cards = ({username, btn}) => {
  return (
     <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      
      {/* Image Section */}
      <div className="relative">
        <img 
          className="w-full h-64 object-cover object-top" 
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
          alt="Portrait of a girl" 
        />
      </div>

      {/* Content Section */}
      <div className="p-5 text-center">
        <h2 className="text-xl font-bold text-gray-800">
            {username}
        </h2>
        <p className="text-sm text-gray-500 mt-1">
            UI/UX Designer & Model
        </p>
        
        <p className="text-gray-600 mt-3 text-sm">
            Passionate about creating beautiful user experiences and capturing moments.
        </p>

        {/* Buttons / Actions */}
        <button className="mt-5 px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
            {btn}
        </button>
      </div>
    </div>
  )
}

export default Cards
