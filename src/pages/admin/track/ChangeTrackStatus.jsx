import React from 'react'
import { useDispatch } from "react-redux"
import Swal from "sweetalert2"
import TrackService from "../../../services/track.service"
import { getAllTrack } from '../../../store/actions/trackActions'

const ChangeTrackStatus = ({Tag, track}) => {
    
    const dispatch = useDispatch()

    const handleChangeStatus = () => {
        const trackService = new TrackService()
        trackService.changeTrackStatus({_id: track._id, status: !track.status})
        .then(result => {
            Swal.fire({
                title: "Başarılı",
                icon: "success",
                text: result.data.message
            })
            dispatch(getAllTrack())
        })
        .catch(err => {
            Swal.fire({
                title: "Başarısız",
                icon: "error",
                text: err.response.data.message,
            })
        })
    }

    return (
        <Tag 
            className={track.status ? "text-danger" : "text-success"}
            onClick={handleChangeStatus}
        >
            {track.status ? "Kapat" : "Aç"}
        </Tag>
    )
}

export default React.memo(ChangeTrackStatus)