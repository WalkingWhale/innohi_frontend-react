import React, { useEffect } from 'react';
import * as json2data from '../../components/JsonData'
import { useParams } from 'react-router-dom';
import * as CouncilCommon from './CouncilCommon'
import { withAuthenticator } from "@aws-amplify/ui-react";

const ArchiveDetail = ({ signOut, user }) => {
    const params = useParams;

    const RenderStartup = (data) => {
        const returnValue = (data.data.startupTestData).find(function (jsonData) { return jsonData.S_NO === Number(params().bno) })
        console.log(returnValue)

        return (
            <>
                <div className="container">
                    <div className="table-responsive-md" >
                        <table className="table table-bordered" style={{fontFamily:'Jost'}}>
                            <thead style={{ backgroundColor: 'rgba(242, 242, 242, 0.706)' }}>
                                <tr align="center">
                                    <th colSpan="4"><span style={{fontSize:'24px'}}>{returnValue.S_NAME}</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {/* <td width="10%">번호</td>
                                    <td width="40%">{data.data.S_NO}</td>
                                    <td width="10%">카테고리</td>
                                    <td width="40%">{data.data.S_CATEGORY}</td> */}
                                    <td align="center" width="30%">카테고리</td>
                                    <td colSpan="3">{returnValue.S_CATEGORY}</td>
                                </tr>
                                <tr>
                                     <td align="center" colSpan="1">테크 타입</td>
                                    <td colSpan="3">{returnValue.S_TECH_TYPE}</td>
                                </tr>
                                <tr>
                                    <td align="center" colSpan="1">메인 서비스</td>
                                    <td colSpan="3">{returnValue.S_MAIN_SERVICE}</td>
                                </tr>
                                <tr >
                                    <td align="center" colSpan="1">서비스 상세</td>
                                    <td colSpan="3">{returnValue.S_SERVICE_DETL}</td>
                                </tr>
                                <tr >
                                    <td align="center" colSpan="1">고용 직원</td>
                                    <td colSpan="3">{returnValue.S_EMPLOYEE_NUM}</td>
                                </tr>
                                <tr >
                                    <td align="center" colSpan="1">위치</td>
                                    <td colSpan="3">{returnValue.S_LOCATION}</td>
                                </tr>
                                <tr >
                                    <td align="center" colSpan="1">조사 시간</td>
                                    <td colSpan="3">{returnValue.S_RESEARCHED_TIME}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }

    CouncilCommon.headerGrid();

    useEffect(() => {
        CouncilCommon.eventLogOut(signOut);
        CouncilCommon.changeName(CouncilCommon.usernameCheck(user));
    })

    return (
        <>
            <section id="portfolio" className="portfolio section-bg">
                <div className="container" data-aos="fade-up" >
                    <div className="section-title">
                        <h2>스타트업 찾기</h2>
                        {/* <p>새로운 기술과 트렌드를 innoHI가 콕 찝어드립니다.</p> */}
                    </div>
                    <RenderStartup data={json2data} />
                </div>
            </section>
        </>
    )
}

export default withAuthenticator(ArchiveDetail, {
    socialProviders: ['google'],
    hideSignUp: [true],
    //   loginMechanisms : ['username'],
    loginMechanisms: ['email'],
    //  components : [components],
    variation: ["modal"]
});