import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Col, Container, Row, Table } from 'reactstrap'
import useService from '../../hooks/useService'
import ProblemSolutionService from '../../services/problemSolution.service'

const UserProfilePage = () => {
	const [solutions, setSolutions] = useState({})
	const { user } = useSelector(state => state.auth)
	const [userSolutions, loading] = useService(new ProblemSolutionService().getUserSolutions.bind(null, user._id), data => {
		const groupByTrack = data?.groupBy(u => u.track.name)
		setSolutions(Object.fromEntries(groupByTrack))
	})

	return (
		<div className='py-5'>
			<Container>
				<div className='my-2 text-center'>
					<h1 className='font-weight-bold'>
						Merhaba {user?.username}
					</h1>
				</div>
				<div className='my-5'>
					<Row>
						<Col md="4">
							<div className='pr-4'>
								<Card className='pt-3 px-2 shadow'>
									<div className='text-center'>
										<img className='rounded-pill' style={{ border: "2px solid #1d1d32" }} src={user?.photo} width={128} height={128} />
										<h3>{user?.username}</h3>
										<hr className='w-25' />
									</div>
									<div>
										<Table className='text-warning'>
											<tr>
												<td>Toplam Puan</td>
												<th className='text-right'>
													{loading ? "..." : userSolutions?.reduce((a, b) => a + b.score, 0)}
												</th>
											</tr>
											<tr>
												<td>Çözülen Problemler</td>
												<th className='text-right'>
													{loading ? "..." : userSolutions.length}
												</th>
											</tr>
										</Table>
									</div>
								</Card>
								<div className='mt-4'>
									<p><Link to={"/user/change-password"} className="font-weight-bold">Şifre Değiştir</Link></p>
									<p><Link to={"/user/change-photo"} className="font-weight-bold">Profil Fotoğrafını Değiştir</Link></p>
								</div>
							</div>
						</Col>
						<Col md="8">
							<div className='pl-4'>
								<Row>
									{Object.keys(solutions).map(key => (
										<Col xs={4}>
											<div className='card-lift--hover shadow rounded text-center p-1 mb-5'>
												<img src={solutions[key][0]?.track?.icon} width={48} height={48} />
												<h4>{key}</h4>
												<p>{solutions[key].length} / {solutions[key][0]?.track?.problems?.length}</p>
											</div>
										</Col>
									))}
								</Row>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</div>
	)
}

export default UserProfilePage