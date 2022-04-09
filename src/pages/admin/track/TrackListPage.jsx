import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button, DropdownItem, DropdownMenu, DropdownToggle, Table, UncontrolledDropdown } from 'reactstrap'
import ChangeTrackStatus from './ChangeTrackStatus'
const TrackListPage = () => {

    const tracks = useSelector(state => state.track)
    const navigate = useNavigate()

    return (
        <div>
            <h1>Tüm Kategoriler</h1>
            <div className='mt-5 mb-3 d-flex justify-content-end'>
                <Button tag={NavLink} to="add" color='success'>New Add Track</Button>
            </div>
            <div>
                <Table>
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Slug</th>
                            <th scope="col">Icon</th>
                            <th scope="col">Description</th>
                            <th scope="col" />
                        </tr>
                    </thead>
                    <tbody>
                        {tracks?.data?.map(track => (
                            <tr>
                                <td>{track.name}</td>
                                <td>{track.slug}</td>
                                <td className='text-truncate'>
                                    <img src={track.icon} className="img-fluid" width={50} height={50} />
                                </td>
                                <td className='text-truncate'>{track.description.slice(0, 60)}...</td>
                                <td>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle nav className="nav-link-icon">
                                            <i class="fa-solid fa-ellipsis"></i>
                                        </DropdownToggle>
                                        <DropdownMenu
                                            aria-labelledby="navbar-default_dropdown_1"
                                            className="dropdown-menu-arrow"
                                            right
                                        >
                                            <DropdownItem onClick={() => navigate(`update/${track._id}`)}>Düzenle</DropdownItem>
                                            <DropdownItem divider />
                                            <ChangeTrackStatus Tag={DropdownItem} track={track}/>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default React.memo(TrackListPage)