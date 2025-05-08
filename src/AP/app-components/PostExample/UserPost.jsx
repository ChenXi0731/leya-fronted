import React from "react";

function UserPost() {
    return (
        <>
            <div class="post-item">
                <div class="post-avatar">
                    <img src="./src/AP/app-components/assets/images/user-tie-solid.svg" alt="用戶頭貼" />
                </div>
                <div class="post-content">
                    <div class="post-header">
                        <div class="post-name">本日金句</div>
                        <div class="post-username">@userID</div>
                    </div>
                    <div class="post-text">明天會更好，夕陽依舊那麼美麗。</div>
                </div>
            </div>
        </>
    )
}

export default UserPost