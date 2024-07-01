body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-image: url('back.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: white;
    text-align: center;
    overflow: hidden; /* Hide scrollbars */
}

.scrollable-container {
    overflow: hidden; /* Hide both scroll bars */
    overflow-y: scroll; /* Allow vertical scrolling */
    overflow-x: scroll; /* Allow horizontal scrolling */
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none;  /* For Internet Explorer and Edge */
}

/* For Webkit browsers (Chrome, Safari, etc.) */
.scrollable-container::-webkit-scrollbar {
    display: none;
}

.header {
    margin: 20px 0;
}

.tabs {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
}

.tab-button {
    background-color: #f0f0f0;
    border: none;
    padding: 10px 10px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
}

.tab-button.active {
    background-color: #007bff;
    color: white;
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

.progress-container {
    background-color: #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
    margin: 20px 0;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}

.progress-bar {
    background-color: #007bff;
    width: 100%;
    height: 20px;
}

.icon-container {
    margin: 20px 0;
}

.icon {
    width: 50%;
    height: 50%;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent; /* Prevent blue highlight on mobile devices */
    outline: none; /* Remove default outline */
    user-select: none; /* Prevent text selection */
}

.icon:focus {
    outline: none; /* Remove outline on focus */
}

.small-icon {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 10px;
}

.tap-info {
    margin: 20px 0;
}

.tap-counter {
    font-family: 'Courier New', Courier, monospace; /* Different font */
    font-size: 40px; /* Bigger size */
    color: white; /* White color */
    font-weight: bold; /* Thicker text */
}

.buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.action-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
}

.action-button:hover {
    background-color: #0056b3;
}

.matic-balance-button {
    background-color: purple;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    text-align: center;
    margin: 10px 0;
    width: 70%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
    background-color: #055560;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 400px;
    border-radius: 10px;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.claim-box {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    margin: 10px;
    width: 100px;
}

.claim-box.disabled {
    background-color: #555;
    cursor: not-allowed;
}

#claim-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

#claim-container .claim-box {
    flex: 1 1 30%;
    margin: 10px;
}
/* Leaderboard entry styles */
.leaderboard-entry {
    display: flex;
    justify-content: space-between;
    background-color: #f0f0f0;
    color: black;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
}
