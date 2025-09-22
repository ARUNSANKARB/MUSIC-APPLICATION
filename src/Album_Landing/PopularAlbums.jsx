import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { __DB } from '../backend/firebaseconfig'
import { FaMusic } from 'react-icons/fa';
import { DiVim } from 'react-icons/di';
import { NavLink } from 'react-router-dom';
import Spinner from '../helper/Spinner';

const PopularAlbums = () => {
    const [albums, setAlbums] = useState(null);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const albumCollectionRef = collection(__DB,"albums");
                const getAlbums = await getDocs(albumCollectionRef);
                const albumData = getAlbums.docs.map((album) => ({
                    ...album.data(),
                    songs: album.data()?.songs || []
                }));
                setAlbums(albumData);
            } catch (error) {
                console.error("Error fetching albums:", error);
            }
        };
        fetchAlbums();
    }, []);

    return (
        <section className='w-[80vw] text-white'>
            {albums ? (
                <article className='w-full '> 
                    <header className='w-full p-5 flex items-center gap-3'>
                        <span className='text-3xl'><FaMusic/></span>
                        <h1 className='text-3xl font-bold'>Popular Albums</h1>
                    </header>
                    <main className='w-full '>
                        <div className='px-6 flex gap-5 items-center'>
                            {albums.map((album, index) => (
                                <NavLink 
                                    to={`/album-details/${album?.albumTitle}`} 
                                    key={index} 
                                    state={album}
                                >
                                    <div className='w-[260px] h-[350px] bg-black/50 p-4 rounded-lg hover:bg-black hover:ring-1 hover:ring-[wheat]'>
                                        <img 
                                            src={album?.albumThumbnail || 'default-thumbnail.jpg'} 
                                            alt={album?.albumTitle || 'Album Thumbnail'} 
                                            className='w-full h-[250px] object-cover rounded-md hover:scale-105 transition-all duration-100 ease-linear'
                                        />
                                        <h1 className='py-2 px-15 bg-transparent mt-2 rounded text-xl font-semibold'>
                                            {album?.albumTitle || 'Untitled Album'}
                                        </h1>
                                    </div>
                                </NavLink>
                            ))}
                        </div> 
                    </main>
                </article>
            ) : (
                <section className='w-[100%] h-[100vh] fixed top-0 left-[7%]'>
                    <Spinner />
                </section>
            )} 
        </section>
    );
};

export default PopularAlbums