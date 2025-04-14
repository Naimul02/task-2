import React from 'react'

export default function Navbar() {
  return (
    <div className=''>

<nav>
        <div className="navbar">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Dua Page</a>
  </div>
  <div className="flex gap-40">
    <input type="text" placeholder="Search by Dua Name" className="input input-bordered w-24 md:w-auto" />
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://scontent.fcgp38-1.fna.fbcdn.net/v/t39.30808-1/487284660_1501788344119784_6346066288059553724_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGkyl1a10IaU-f6PTC4Bu-Iygpepnz2clTKCl6mfPZyVDXcxbYA8ZD2PUeG2jjyGh7lsZYDv-5FNZ9Q0Y3i3uRN&_nc_ohc=ny6u8SzuF_sQ7kNvwH1vaIF&_nc_oc=AdkMgH_JbumynIMa7sdQGSD8BtCrmY5Tdiifc0U22SicjUV6cyzCRYFPoR6gbigt5lE&_nc_zt=24&_nc_ht=scontent.fcgp38-1.fna&_nc_gid=7U5NMUxiGOwvQsxQ0Kh5aw&oh=00_AfF8ICEODs6pCwGNfvZRlSmx75DxeHkxCRs_1_RtcErVlA&oe=6802A807" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </nav>
    </div>
  )
}
