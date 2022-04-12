import React, { useEffect, useState } from 'react'
import { Card, CardBody } from 'reactstrap'
import useService from '../../hooks/useService'
import ScoreBoardService from '../../services/scoreboard.service'
import LoaderSpinner from '../spinners/LoaderSpinner'

const SingleScoreBoard = ({ track }) => {
    const [highScores, loading] = useService(new ScoreBoardService().getHighScoreByTrack.bind(null, track))

    return (
        <LoaderSpinner loading={loading}>
            <Card>
                <CardBody className="py-1">
                    <h4 className="text-center mb-3">Bu Bölümün Yıldızları</h4>
                    {highScores?.map((score, index) => (
                        <>
                            <div className="my-s">
                                <div className="d-flex align-items-center">
                                    <h3 className="fw-bold">{index + 1}.</h3>
                                    <div className="ml-4 d-flex justify-content-evesnly w-100">
                                        <div>
                                            <img className="img img-fluid rounded-circle" src={score.photo} width={60} height={60} />
                                        </div>
                                        <div className="ml-3">
                                            <h4>{score.username ?? "Adsız"}</h4>
                                            <p className="text-warning">Skor: <strong>{score.score}</strong></p>
                                        </div>
                                    </div>
                                </div>
                                <hr className="mx-5 mt-0" />
                            </div>
                        </>
                    ))}
                </CardBody>
            </Card>
        </LoaderSpinner>
    )
}

export default React.memo(SingleScoreBoard)