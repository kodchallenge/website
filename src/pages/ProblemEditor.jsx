import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, NavLink, Button } from "reactstrap";
import Compiler from "../components/compiler/Compiler";
import useQuery from "../hooks/useQuery";
import LoaderSpinner from '../components/spinners/LoaderSpinner'
import { useDispatch } from "react-redux";
import { SetProblem } from "../store/actions/problemActions";
import {useSelector} from 'react-redux'
const ProblemEditor = () => {
    const problemState = useSelector(state => state.problem)
    const {selectProblem: problem} = problemState

    const [problemId] = useQuery("problem")
    const dispatch = useDispatch()

    useEffect(() => {
        if (!problemId) {
            window.location.pathname = "/"
            return;
        }
        if(!problem) {
            dispatch(SetProblem(problemId))
        }
    }, [])

    //region problem description
    const SplitProblemDesc = React.useMemo(() => {
        return (
            <div className="w-100 bg-white">
                <div className="problem-content px-3 w-100">
                    <h2>Problem</h2>
                    <div dangerouslySetInnerHTML={{ __html: problem?.description }} />
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
                                    <Link to="/problem/1" className="text-light">
                                        <i className="fa fa-arrow-left mr-2"></i>
                                        Geri Dön
                                    </Link>
                                </NavLink>
                            </Col>
                            <Col xs="4" className="text-center ">
                                {problem?.name}
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
                                <Compiler />
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