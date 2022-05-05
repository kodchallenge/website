import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button, DropdownItem, DropdownMenu, DropdownToggle, Table, UncontrolledDropdown } from 'reactstrap'
import StatusBar from '../../../components/utils/StatusBar'
import { getAllProblem } from '../../../store/actions/problemActions'
const ProblemListPage = () => {
    const problems = useSelector(state => state.problem)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(!problems || !problems.data) {
            dispatch(getAllProblem())
        }
    }, [])

    return (
        <div>
            <h1>Tüm Problemler</h1>
            <div className='mt-5 mb-3 d-flex justify-content-end'>
                <Button tag={NavLink} to="add" color='success'>Yeni Problem Ekle</Button>
            </div>
            <div>
                <Table>
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Track</th>
                            <th scope="col">Difficulty</th>
                            <th scope="col">Score</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {problems?.data?.map(problem => (
                            <tr>
                                <td>{problem.name.slice(0, 30)}</td>
                                <td>{problem.track?.name}</td>
                                <td>{problem.difficulty}</td>
                                <td>{problem.score}</td>
                                <td>
                                    <StatusBar status={problem.status}/>
                                </td>
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
                                            <DropdownItem onClick={() => navigate(`update/${problem._id}`)}>Düzenle</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem className='text-danger'>Pasif</DropdownItem>
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

export default React.memo(ProblemListPage)