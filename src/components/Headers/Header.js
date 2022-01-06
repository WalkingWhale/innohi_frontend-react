import React from 'react';
import '../../assets/style/style.css'
import '../../assets/style/custom.css'

const headerElements =

  <header id='header' className='fixed-top'>
    <div className='container d-flex align-items-center'>
      <h1 className='logo me-auto'>
        <span>innohi</span>
        <span>_react</span>
      </h1>
      <nav id='navbar' className='navbar'>
        <ul>
          <li className='dropdown'><div>소개<i className='bi bi-chevron-down'></i></div>
            <ul>
              <li><div>HOME</div></li>
              <li><div>innoHI 소개</div></li>
              <li><div>발자취</div></li>
              <li><div>스타트업 생태계</div></li>
              <li><div>자주묻는 질문</div></li>
            </ul>
          </li>
          <li className='dropdown'><div>프로그램<i className='bi bi-chevron-down'></i></div>
            <ul>
              <li><div>DFS(Deal Flow Session)</div></li>
              <li><div>스타트업 아카이브</div></li>
              {/* <li className='dropdown'><div>DFS(Deal Flow Session)<i className='bi bi-chevron-down'></i></div>
      <ul>
        <li><div>DFS 란?</div></li>
        <li><div>DFS 적용 과정</div></li>
        <li><div>산업별 적용 사례</div></li>
      </ul>
    </li> */}
            </ul>
          </li>
          <li className='nav-link scrollto'><div>이벤트</div></li>
          <li className='dropdown'><div>커뮤니티<i className='bi bi-chevron-down'></i></div>
            <ul>
              <li><div>OI 뉴스레터</div></li>
              <li><div>문의 및 제안하기</div></li>
              <li><div>스타트업 소싱 요청</div></li>
            </ul>
          </li>
          <li><div className='getstarted'>협의체공간</div></li>
        </ul>
        <i className='bi bi-list mobile-nav-toggle'></i>
      </nav>
    </div>
  </header>;

class Header extends React.Component {
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
        {headerElements}
      </>
    );
  }

}


export default Header;