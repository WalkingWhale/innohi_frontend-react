import React, { useEffect } from 'react';

//import axios from 'axios';
import * as  DT from '../../components/dataTable/DataTable';
import * as jsondata from '../../components/JsonData';

import $ from 'jquery';
import reactDom from "react-dom";

import * as common from '../../components/common/BreadCrumbs'

const TechPick = () => {

    const callSelectBoardData = () => {
        makeDataTable(jsondata.newsletterTestData);
        // axios.get(`${process.env.REACT_APP_API_URL}/api/v1/board/selectBoard`, { params: { limit: 10, offset: 0 } })
        //   .then((Response) => {
        //     //       console.log(Response.data);
        //     makeDataTable(Response.data.data);
        //   })
        //   .catch((Error) =>  {
        //     console.log(Error)
        //     makeDataTable(jsondata.newsletterTestData);
        //   })
    }

    const makeDataTable = (Response) => {
        const columns = [
            { data: 'bno', width: "5%" },
            { data: 'title', width: "70%", },
            { data: 'updtDate', width: "10%" },
            { data: 'regUser', width: "10%" },
            { data: 'viewCnt', width: "5%" },
        ]

        syncTable(Response, columns);
    }

    const syncTable = (orginData, columns) => {

        $('#dataTable').DataTable({
            data: orginData,
            columns: columns,
            createdRow: function (row, data, dataIndex) {
                row.addEventListener('click', function () {
                    // return (
                    //    //  window.location.href = '/boardDetail?' + "bno="+orginData[dataIndex].bno
                    //      window.location.href = '/boardDetail?' + JSON.stringify(orginData[dataIndex])
                    // );
                    const elements = <TechDetailElements data={orginData[dataIndex]} />
                    reactDom.render(elements, document.getElementById("dataTable2"));
                    document.getElementById("dataTable_wrapper").style.display = "none"
                })
            },

            drawCallback: function () {
                document.getElementById('dataTable').firstElementChild.style.backgroundColor = '#f1f1f1b4';
            },

            language: DT.lang_kor,
            responsive: DT.defaultResponsive,
            lengthChange: DT.defaultLengthChange,
            searching: DT.defaultSearching,
            ordering: DT.defaultOrdering,
            info: DT.defaultInfo,
            // 페이징 기능 숨기기
            //paging: false,
            // 2번째 항목을 오름 차순 
            // order : [ [ 열 번호, 정렬 순서 ], ... ]
            pageLength: 5,
            order: [[0, "asc"]]
        });
    };

    const TechMainElements =
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2 style={{ textTransform: 'capitalize' }}>Tech Pick</h2>
                    <p>
                        TechPick 소제목
                    </p>
                </div>
                <table id="dataTable" className="type04" width="100%">
                    <thead>
                        <tr>
                            <th>순번</th>
                            <th>내용</th>
                            <th>날짜</th>
                            <th>작성자</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                </table>
                <div id="dataTable2" width="100%">

                </div>
            </div>
        </section>
        ;

    const TechDetailElements = (props) => {
        console.log(JSON.stringify(props.data));
        const param = props.data;
        return (
            <>
                <div className="container">
                    <div className="table-responsive-md" >
                        <table className="table table-bordered">
                            <thead style={{ backgroundColor: 'rgba(242, 242, 242, 0.706)' }}>
                                <tr align="center" >
                                    <th width="10%">제목</th>
                                    <th width="40%" colSpan="3" >{param.title}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr align="center">
                                    <td>순번</td>
                                    <td>{param.bno}</td>
                                    <td>조회수</td>
                                    <td>{param.viewCnt}</td>
                                </tr>
                                <tr align="center">
                                    <td width="10%">작성일</td>
                                    <td width="40%">{param.regDate}</td>
                                    <td width="10%">작성자</td>
                                    <td width="40%">{param.regUser}</td>
                                </tr>
                                <tr>
                                    <td colSpan="4">
                                        <iframe
                                            src={param.content}
                                            style={{ height: '2830px', width: '100%' }} title="oi-newsletter"></iframe>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table table-condensed">
                            <thead>
                                <tr>
                                    {/* <td style={{ float: 'right' }}> */}
                                    {/* <button type="button" id="delete" className="btn btn-primary disabled">이전</button> */}
                                    <a href='/board'>
                                        <button type="button" id="list" className="btn btn-primary" style={{ float: 'right' }}>목록</button>
                                    </a>
                                    {/* <button type="button" id="write" className="btn btn-primary active">다음</button> */}
                                    {/* </td> */}
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </>

        )
    };


    useEffect(() => {
        callSelectBoardData();
    })

    return (
        <>
            <main id="main">
                {common.BreadCrumbsElements}
                {TechMainElements}
            </main>
        </>
    );


}

export default TechPick;