import React from "react";
import "./login.css";

function RegisterPage({ activePage, setActivePage }) {

    function handle(page) {
        setActivePage(page);
    }

    return (
        <div className="login-container">
            <img src="/leya-fronted/src/AP/app-components/assets/images/LeyaLogo.png" alt="" className="login-logo" />
            <h2 className="login-title">樂壓Talks</h2>
            <div className="input-group">
                <input className="login-input" type="email" placeholder="Email" />
                <input className="login-input" type="text" placeholder="帳號" />
                <input className="login-input" type="password" placeholder="密碼" />
                <button className="login" onClick={() => handle('home-page')}>註冊</button>
            </div>

            {/* <div className="divider">── 或使用社群快速註冊 ──</div>
            <div className="socials">
                <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" onClick={() => handle('home-page')} />
                <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt="Facebook" onClick={() => handle('home-page')} />
            </div> */}

            <div className="signup">
                已經有帳號了？<a className={`signup ${activePage === 'login-page' ? 'active' : ''}`} onClick={() => handle('login-page')}>登入</a>
            </div>

            <div className="login-donate">
                <img src="https://raw.githubusercontent.com/ChenXi0731/leya-fronted/refs/heads/main/public/shu.png" alt="世新大學校徽" className='shu' />
                <img src="https://raw.githubusercontent.com/ChenXi0731/leya-fronted/refs/heads/main/public/ics.png" alt="資傳系徽" className='ics' />
                <img src="https://raw.githubusercontent.com/ChenXi0731/leya-fronted/refs/heads/main/public/donate_example_logo.png" alt="donate"  className='login-donate-logo' />
            </div>
        </div>
    );
}

export default RegisterPage;