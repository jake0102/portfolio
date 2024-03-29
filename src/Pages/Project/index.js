import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'
import PageTitle from '../../Components/PageTitle'
import ProjectContents from '../../Components/ProjectContents'
import Bird from './imgs/bird.jpg'
import Dinosaur from './imgs/dinosaur.png'
import Exc from './imgs/exchange.jpg'
import Valorant from './imgs/valorant.png'
import Quaraok from './imgs/Quaraok.png'
import Hanako from './imgs/Hanako.png'
import Yashion from './imgs/Yashion.png'
import { Link } from 'react-router-dom'

function Project(){

    const value = useContext(ThemeContext)

    const contentsItems = [
        {
            title: '',
            colors: 'chocolate',
            imgSrc: Yashion,
            link: 'https://yashion.netlify.app/'
        },
        {
            title: '',
            colors: 'chocolate',
            imgSrc: Hanako,
            link: 'http://fmhanako.jp/'
        },
        {
            title: '',
            colors: 'chocolate',
            imgSrc: Bird,
            link: 'https://www.youtube.com/watch?v=ypBzBunU9WE'
        },
        {
            title: '',
            colors: 'chocolate',
            imgSrc: Dinosaur,
            link: 'https://www.youtube.com/watch?v=OsmPo4roh7Y'
        },
        {
            title: '',
            colors: 'chocolate',
            imgSrc: Quaraok,
            link: 'https://www.youtube.com/watch?v=-BCvTkLKlVs'
        },
        {
            title: '',
            colors: 'chocolate',
            imgSrc: Exc,
            link: 'https://www.youtube.com/watch?v=sMUopeRbOFc'
        },
        {
            title: '',
            colors: 'chocolate',
            imgSrc: Valorant,
            link: 'https://www.youtube.com/watch?v=h2LX-TZbH_A'
        },
        {
            title: '',
            colors: 'chocolate',
            imgSrc: Boogle,
            link: 'https://jake-boogle.netlify.app'
        },
        {
            title: '',
            colors: 'chocolate',
            imgSrc: Sbtc,
            link: 'https://jake-sbtc.netlify.app'
        },
    ]

    return(
        <div className={`project ${value.wrapperTheme}`}>
            <div className="project-container">
                <div className="project-top">
                    CREATED
                </div>
                <div className="project-top-real">
                    PROJECTS
                </div>
                <ProjectContents contentsItems={contentsItems} />
            </div>
        </div>
    )
}

export default Project