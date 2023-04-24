import React from 'react';

export default function Playlist() {
  return (
    <nav className='flex'>
        <ul>
            <li className='mb-2'>
                <a href="#" className='text-link hover:text-white text-sm font-semibold'>
                    My Playlist
                </a>
            </li>
            <li className='mb-2'>
                <a href="#" className='text-link hover:text-white text-sm font-semibold'>
                    Hip Hop
                </a>
            </li>
            <li className='mb-2'>
                <a href="#" className='text-link hover:text-white text-sm font-semibold'>
                    Punjabi
                </a>
            </li>
            <li className='mb-2'>
                <a href="#" className='text-link hover:text-white text-sm font-semibold'>
                    Pop Mix
                </a>
            </li>
            
        </ul>
    </nav>

  )
  }