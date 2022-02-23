export const CouncilMainElements =
    <section id="about" className="about" style={{ background:'#f3f5fa'}}>
        <div className="container" data-aos="fade-up">
            <div className="row">
                <div className="section-title col-sm-6">
                    <h2 style={{ textTransform: 'capitalize' }}>운영 현황</h2>
                    <div style={{ background:'#FFFFFF'}}>
                        <div>
                            <div className='row'>
                                <div className="col-xl-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="icon-box" style={{ padding: '10px'}}>
                                        <img src={require('../../assets/img/coucil/oi/4.innoHI_renewal.png').default} className="img-fluid" style={{ width: '50%' }} alt=""></img>
                                        <p sytle={{fontFamily:'Jost', fontSize: '20px', marginTop:'15px'}}>이노하이 사이트 리뉴얼</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='row'>
                                <div className="col-md-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="icon-box" style={{ padding: '10px'}}>
                                        <img src={require('../../assets/img/coucil/oi/3.pnp_demoday.png').default} className="img-fluid" style={{ width: '50%' }} alt=""></img>
                                        <p>한진, 스타트업과 함께 날아오르다! ✈️</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-title col-sm-6">
                    <h2 style={{ textTransform: 'capitalize' }}>이노하이 레터</h2>
                    <div style={{ background:'#FFFFFF'}}>
                        <div>
                            <div className='row'>
                                <div className="col-xl-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="icon-box" style={{ padding: '10px'}}>
                                        <img src={require('../../assets/img/coucil/oi/newsletter.png').default} className="img-fluid" style={{ width: '40%' }} alt=""></img>
                                        <p sytle={{fontFamily:'Jost', fontSize: '20px', marginTop:'15px'}}>2022년 1월 4주 이노하이 레터</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='row'>
                                <div className="col-md-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="icon-box" style={{ padding: '10px'}}>
                                        <img src={require('../../assets/img/coucil/oi/newsletter.png').default} className="img-fluid" style={{ width: '40%' }} alt=""></img>
                                        <p>2021년 12월 4주 이노하이 레터</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>

    </section>
    ;

export const heroElements =

    <section id='hero' className='d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1' data-aos="fade-up" data-aos-delay="200">
            <h1><span style={{ color: 'rgb(253, 142, 77)' }}>INNOHI </span>협의체</h1>
            <h2>오픈이노베이션 레터와 스타트업 찾기 등 <br />INNOHI의 여러가지 소식들을 이곳에서 확인해보세요</h2>
          </div>
          <div className='col-lg-6 order-1 order-lg-2 hero-img' data-aos="zoom-in" data-aos-delay="200">
            <img src={require('../../assets/img/intro/histroy/travel.jpg').default} className='img-fluid animated' alt=''></img>
          </div>
        </div>
      </div>
    </section>
    ;

export const clientsElements =

    <section id="clients" className="clients" style={{ background:'#f3f5fa'}}>
      <div className="container" data-aos="fade-up">
        <header className="header-font">
          <h4>이번에 발굴된 스타트업을 소개합니다</h4>
        </header>
  
        <div className="clients-slider swiper">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide"><img src={require('../../assets/img/insight/contest/만반잘부.jpg').default} className="img-fluid" style={{ width: "320px", height: "200px" }} alt=""></img></div>
            <div className="swiper-slide"><img src={require('../../assets/img/insight/contest/PnP_Web3_and_Big_Data_in_Healthcare.png').default} className="img-fluid" style={{ width: "320px", height: "200px" }} alt=""></img></div>
            <div className="swiper-slide"><img src={require('../../assets/img/insight/contest/APAC SUMMIT 2021.png').default} className="img-fluid" style={{ width: "320px", height: "200px" }} alt=""></img></div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
  
      </div>
    </section>
    ;

export const BoardDetailElements = (props) => {
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
                                    {/* <button type="button" id="delete" className="btn btn-primary disabled">이전</button> */}<a href='/board'>
                                    <button type="button" id="list" className="btn btn-primary" style={{ float: 'right' }}>목록</button>
                                    {/* <button type="button" id="write" className="btn btn-primary active">다음</button> */}</a>
                                {/* </td> */}
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </>

    )
}
    ;
  
