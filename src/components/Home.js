import React from 'react'
import ImageWithText from '../components/ImageWithText'

const Home = () => {
  return (
    <div>
        <h1 className='text-center'>Home</h1>
        <ImageWithText
            imageSrc="/img/search_so.png"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo."
            layout="left"
        />
        <ImageWithText
            imageSrc="/img/games_ipad.png"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo."
            layout="right"
        />
        <ImageWithText
            imageSrc="/img/game_laptor.png"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo."
            layout="left"
        />
    </div>
  )
}

export default Home