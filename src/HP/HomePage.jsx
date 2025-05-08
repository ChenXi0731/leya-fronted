import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import './hp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage({ handleNavigation }) {
    return (
        <div className='hp-global'>
            <FakeNavbar />
            <div className='hp-navbar'>
                <img src="/leya-fronted/public/leyalogo.png" alt="LeyaTalks" className='hp-navbar_logo' />
                <div className='hp-navbar-links'>
                    <a href="#">主頁</a>
                    <a href="#">專題理念</a>
                    <a href="#">專題企劃</a>
                    <a onClick={() => handleNavigation("/LeyaTalks")} className='hp-arrow-link'>
                        <FontAwesomeIcon icon={faCircleRight} />
                    </a>
                </div>
            </div>
            <Container />
        </div>
    )
}

function FakeNavbar() {
    return (
        <div className='hp-fake-navbar'></div>
    )
}


// 內容容器
function Container() {
    return (
        <div className='hp-container'>
            <Slogan />
            <Content />
            <Content_Reverse />
            <Footer />
        </div>
    )
}

function Slogan() {
    return (
        <div className='hp-slogan'>
            樂壓Talks 溫暖你的心
        </div>
    )
}

function Content() {
    return (
        <div className='hp-content-container'>
            <div className="hp-half-container">
                <div className="hp-content-top">
                    <img src="/leya-fronted/public/tempcontent.png" alt="" />
                </div>
                <div className="hp-content-bottom"></div>
            </div>
            <div className="hp-half-container">
                <div className="hp-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum necessitatibus quia dolore itaque adipisci corrupti, culpa dicta! Nesciunt provident nihil laudantium, dignissimos enim ex possimus fugiat impedit voluptatibus rem est nisi quidem at quaerat asperiores labore ea nostrum aliquam sit corrupti aut laborum, ducimus a! Delectus, enim temporibus labore aut doloribus sunt molestiae animi ullam autem. In accusantium vel nemo unde, quidem iure, tempora officiis labore error perferendis amet architecto quasi rem tempore. Officia perspiciatis nobis minima sequi libero! Debitis placeat mollitia doloribus nemo fuga sit possimus architecto praesentium consectetur. Aperiam, quod. Blanditiis, recusandae voluptatum ut modi corporis pariatur voluptatem.</div>
            </div>
        </div>
    )
}

function Content_Reverse() {
    return (
        <div className='hp-content-container'>
            <div className="hp-half-container">
                <div className="hp-content-reverse">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam dignissimos placeat enim, temporibus maxime nostrum recusandae ad alias rerum ipsum itaque quaerat culpa unde, velit animi reprehenderit dolorem nulla, assumenda esse eveniet magni dolore ab eius voluptas? Quam ut hic adipisci, numquam itaque quaerat officiis maiores sapiente corrupti cupiditate libero, minus magnam voluptatibus vel dolor sunt consequuntur quo odio totam. Commodi quia quas quisquam ut, sint quibusdam? Consectetur itaque quidem, adipisci, non ipsam aperiam nisi rem autem libero, at veniam. Minima incidunt et laudantium nemo possimus ducimus. Sed sit eius, laboriosam est accusantium quisquam ullam, qui eligendi nostrum eveniet aliquam.</div>
            </div>
            <div className="hp-half-container">
                <div className="hp-content-top">
                    <img src="/leya-fronted/public/tempcontent.png" alt="" />
                </div>
                <div className="hp-content-bottom"></div>
            </div>
        </div>
    )
}

function Footer() {
    return (
        <div className='hp-footer'>
            <div className='hp-footer-logo'>
                <div className='hp-logo-container'>
                    <img src="/leya-fronted/public/shu.png" alt="" className='shu' />
                    <span style={{display: 'flex', flexDirection: 'column'}}><p style={{fontSize: '1.6rem'}}>世新大學</p><p style={{fontSize: '1rem'}}>Shih Hsin University</p></span>
                </div>
                <div className='hp-logo-container'>
                    <img src="/leya-fronted/public/ics.png" alt="" className='ics' />
                    <span style={{display: 'flex', flexDirection: 'column'}}><p style={{fontSize: '1.6rem'}}>資訊傳播學系</p><p style={{fontSize: '1rem'}}>Department of<br/>Information and Communications</p></span>
                </div>
            </div>
            <div className='hp-copyright'>
                <p>版權所有©2025樂壓Talks</p>
                <p style={{fontSize: '1rem'}}>Copyright©2025 Reserved by LeyaTalks</p>
            </div>
            <div className='hp-footer-contact'>
                <p>樂壓Talks聯絡資訊</p>
                <p>專案經理：張騰利</p>
                <p>聯絡信箱：<a href='mailto:leyatalks1010@gmail.com'>leyatalks1010@gmail.com</a></p>
            </div>
        </div>
    )
}

export default HomePage