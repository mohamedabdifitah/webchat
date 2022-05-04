import React from "react"
import "../styles/stories.scss"
import StoryCard from "../helper/storiesCard"
const Stories : React.FC = () => {
  return (
    <div className="stories__home">
     <StoryCard />
     <StoryCard />
     <StoryCard />
     <StoryCard />
     <StoryCard />
     <StoryCard />
     <StoryCard />
    </div>
    )
}
export default Stories