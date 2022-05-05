import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Row, NavLink, Button } from "reactstrap";
import Compiler from "../components/compiler/Compiler";
import useQuery from "../hooks/useQuery";
import LoaderSpinner from '../components/spinners/LoaderSpinner'
import { useDispatch } from "react-redux";
import { SetProblem } from "../store/actions/problemActions";
import {useSelector} from 'react-redux'
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import Clock from "../components/utils/Clock";
const ProblemEditor = ({isContest}) => {
    const problemState = useSelector(state => state.problem)
    const {timer} = useSelector(state => state.contest)
    const {selectProblem: problem} = problemState

    const [problemId] = useQuery("problem")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!problemId) {
            window.location.pathname = "/"
            return;
        }
        if(!problem) {
            dispatch(SetProblem(problemId))
        }
    }, [problemState.selectProblem])

    //region problem description
    const SplitProblemDesc = React.useMemo(() => {
        return (
            <div className="w-100 bg-white">
                <div className="problem-content px-3 w-100">
                    <h2>Problem</h2>
                    <ReactMarkdown
                        children={problem?.description}
                        rehypePlugins={[rehypeRaw]}
                    />
                </div>
            </div>
        )
    }, [problem])
    //end region

    return (
        <div id="problem-editor" className="fullscreen">
            <LoaderSpinner loading={problemState.loading} style={{height: "100%"}}> 
                <>
                <header className="py-2 text-light" style={{ background: "#1a1d21" }}>
                    <div className="mx-4">
                        <Row className="align-items-center">
                            <Col xs="4" className="">
                                <NavLink>
                                    <div onClick={() => navigate(-1)} className="text-light hover-pointer">
                                        <i className="fa fa-arrow-left mr-2"></i>
                                        Geri Dön
                                    </div>
                                </NavLink>
                            </Col>
                            <Col xs="4" className="text-center ">
                                {/* {problem?.name} */}
                                {isContest ? <span className="badge badge-warning">{<Clock date={timer} />}</span> : null}
                            </Col>
                            <Col xs="4" className="text-right">
                                <Button className="btn-icon p-0" color="transparent">
                                    <span className="btn-inner--icon text-light">
                                        <i className="fa fa-cog" aria-hidden="true"></i>
                                    </span>
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </header>
                <section id="editor">
                    {/* <aside className="editor-side">L</aside> */}
                    <main className="editor-content">
                        <Row className="m-0 h-100">
                            <Col sm="6" className="desc">
                                {SplitProblemDesc}
                            </Col>
                            <Col sm="6" className="p-0">
                                <Compiler isContest={isContest}/>
                            </Col>
                        </Row>
                    </main>
                    {/* <aside className="editor-side">R</aside> */}

                </section>
                <footer>
                    Yasin T.
                </footer>
                </>
            </LoaderSpinner>

        </div>
    )
}

export default React.memo(ProblemEditor)