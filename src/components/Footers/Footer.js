import React from 'react';
import '../../assets/style/style.css'
import '../../assets/style/custom.css'
import hist from '../../assets/img/clients/hist.png';

const footerElements =

  <footer id='footer'>
    <div className='footer-top'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 footer-contact'>
            <h3><img src={hist} className='img-fluid' style={{ width: '175px' }} alt=''></img></h3>
            <p>한진정보통신 주식회사<br /> 대표자명: 박은호<br /> 사업자등록번호: 201-81-46253 <br />서울시 강서구 공항대로 453(등촌동)</p>
          </div>
          <div className='col-lg-3 col-md-6 footer-links'>
            <h4>Useful Links</h4>
            <ul>
              <li><i className='bx bx-chevron-right'></i><div>회사소개</div></li>
              <li><i className='bx bx-chevron-right'></i><div>찾아오시는길</div></li>
              <li><i className='bx bx-chevron-right'></i><div>제휴문의</div></li>
            </ul>
          </div>
          <div className='col-lg-3 col-md-6 footer-links'>
            <h4>Our Services</h4>
            <ul>
              <li><i className='bx bx-chevron-right'></i><div>문의 및 제안하기</div></li>
            </ul>
          </div>
          <div className='col-lg-3 col-md-6 footer-links'>
            <h4>Our Social Networks</h4>
            <p>이노하이 관련 궁금하신 사항은 아래 연락처로 문의주시면 담당자가 답변드리겠습니다.</p>
            <div className='social-links mt-3'>
              <i className='bx bxl-twitter'></i><div>SELHTDB@hist.co.kr</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='container footer-bottom clearfix'>
      <div className='copyright'>
        Copyright &copy;2021 <strong><span>Hanjin Information Systems & Telecommunication</span></strong>. Co., Ltd. All rights Reserved.
      </div>
      <div className='credits'>문의하기 : SELHTDB@hist.co.kr</div>
    </div>
  </footer>
  ;

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <>
        {footerElements}
      </>
    );
  }
}

export default Footer;