import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

import Dnh from '../assets/darknighthero.jpg';
import ariseDeck from '../assets/arisedeck.png'

import Image from "next/image";

const Projects = () => {

    return (
        <div className="flex bg-slate-800 items-center justify-center px-5 py-20" id="projects">
            <div className="max-w-7xl w-full">

                <h1 className="text-5xl text-blue-400 font-semibold py-5 selection:text-blue-900">
                    Projects
                </h1>

                {/* Dark Night Hero */}
                <div className="py-2">
                    <div className="flex flex-col lg:flex-row items-center border rounded-lg shadow border-gray-700 bg-gray-800 hover:bg-gray-700">

                        <Image className="object-cover h-80 w-auto rounded-t-lg md:rounded-none md:rounded-l-lg select-none" src={Dnh} alt="Dark Night Hero"/>

                        <div className="flex flex-col justify-between p-4 leading-normal">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white selection:text-blue-400">
                                Dark Night Hero
                            </h5>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify selection:text-blue-400">
                                A captivating 3D rogue-lite RPG that combines magic spells, intense combat, and a fantasy dungeon environment.
                                The game features action-packed battles, challenging levels, and formidable boss enemies. With a dynamic heads-up
                                display, inventory system, character progression, the game offers immersive gameplay that can be played alone
                                or with friends in multiplayer mode. You can download a copy of the game or watch an overview by visiting the
                                website link below.
                            </p>

                            <div className="flex flex-row">
                                <span className='px-1' >
                                    <a href="https://sites.psu.edu/darknighthero/" target="_blank" className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 selection:text-blue-400">
                                        Learn More &nbsp;
                                        <FontAwesomeIcon icon={faUpRightFromSquare}/>
                                    </a>
                                </span>

                                <span className='px-1'>
                                    <a href="https://github.com/RezyK2525/CapstoneGameProject" target="_blank" className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 selection:text-blue-400">
                                        Repository &nbsp;
                                        <FontAwesomeIcon icon={faUpRightFromSquare}/>
                                    </a>
                                </span>
                            </div>

                            <div className="px-2 pt-4">
                                <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 selection:text-blue-400">Unity</span>
                                <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 selection:text-blue-400">C#</span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* AriseDeck */}
                <div className="py-2">
                    <div  className="flex flex-col lg:flex-row items-center border rounded-lg shadow border-gray-700 bg-gray-800 hover:bg-gray-700">

                        <Image className="md:px-[12rem] object-cover h-80 w-full rounded-t-lg md:rounded-none md:rounded-l-lg select-none" src={ariseDeck} alt="Dark Night Hero"/>

                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white selection:text-blue-400">
                                AriseDeck
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify selection:text-blue-400">
                                AriseDeck is an Android application that provides a platform for self-improvement, progress tracking, and connecting with a community of fitness enthusiasts.
                                It offers personalized daily, weekly, and monthly challenges for users to conquer their fitness goals.
                                The app features a leaderboard system that tracks and ranks users based on their completed challenges, fostering a sense of competition and motivation.
                                With a seamless login system, users can easily manage their login information within the user-friendly interface.
                            </p>

                            <div className="flex flex-row">
                                <span className='px-1'>
                                    <a href="https://github.com/HeyyJett/AriseDeck" target="_blank" className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 selection:text-blue-400">
                                        Repository &nbsp;
                                        <FontAwesomeIcon icon={faUpRightFromSquare}/>
                                    </a>
                                </span>
                            </div>

                            <div className="px-2 pt-4">
                                <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 selection:text-blue-400">Android Studio</span>
                                <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 selection:text-blue-400">Java</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
