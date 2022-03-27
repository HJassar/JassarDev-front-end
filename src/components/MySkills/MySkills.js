import React from 'react'

import { connect } from 'react-redux'

import './MySkills.css'

const MySkills = ({ spin, night }) => {
    return (
        <div className='MySkills'>
            <svg
                className={night ? 'glow' : 'off'}
                width="225" height="486" viewBox="0 0 225 486" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="my-skills">
                    <g
                        id="React"
                        transform='rotate(0 100 400)'
                        className={spin ? 'spin' : ''}>
                        <path id="Vector" d="M142.274 408.696C139.945 402.493 129.971 399.531 116.694 400.359C114.888 387.191 110.041 377.991 103.496 376.919C101.918 376.678 100.304 376.864 98.8214 377.459L100.418 381.711C101.295 381.381 102.067 381.292 102.782 381.393C105.935 381.909 109.189 387.15 111.049 394.77C111.512 396.643 111.877 398.66 112.18 400.745C107.831 401.282 103.522 402.107 99.2832 403.215C95.5933 400.774 91.7446 398.582 87.7628 396.654C91.8141 388.537 96.4643 383.177 100.435 381.686L98.8375 377.431C93.587 379.402 88.1222 385.722 83.6105 394.817C74.2476 390.98 65.9831 389.855 60.7365 391.825L62.3329 396.077C66.2844 394.593 73.3268 395.545 81.7044 398.951C80.0868 402.763 78.6099 406.949 77.3959 411.433C73.4644 413.387 69.6729 415.61 66.0484 418.088C64.9408 416.42 63.9158 414.698 62.977 412.93C59.3411 405.972 58.3224 399.892 60.3355 397.418C60.7761 396.861 61.4626 396.426 62.3402 396.096L60.7439 391.844C59.1445 392.445 57.8184 393.334 56.8333 394.527C52.6311 399.635 55.0472 409.721 62.3559 420.782C51.8625 428.906 46.3333 437.662 48.6546 443.845C50.9833 450.047 60.9569 453.01 74.2324 452.178C76.0401 465.35 80.8873 474.55 87.4303 475.618C88.9432 475.878 90.5231 475.676 92.1225 475.076C97.3729 473.105 102.838 466.785 107.349 457.689C116.714 461.53 124.973 462.653 130.223 460.682C131.741 460.148 133.09 459.221 134.132 457.995C138.336 452.891 135.92 442.805 128.611 431.743C139.075 423.658 144.595 414.878 142.274 408.696ZM112.647 405.297C112.863 408.125 112.948 410.963 112.902 413.799C110.142 411.296 107.258 408.934 104.259 406.723C107.121 406.107 109.92 405.621 112.651 405.295L112.647 405.297ZM111.539 428.9C111.047 431.931 110.426 434.94 109.678 437.918C104.142 440.572 98.3857 442.74 92.4746 444.399C87.4283 440.94 82.6907 437.051 78.3148 432.776C78.7874 426.666 79.7762 420.607 81.2707 414.664C86.8049 412.01 92.559 409.84 98.4683 408.181C100.904 409.857 103.364 411.701 105.811 413.702C108.199 415.654 110.47 417.694 112.632 419.802C112.39 422.848 112.025 425.883 111.539 428.9V428.9ZM116.771 424.105C118.76 426.274 120.603 428.502 122.256 430.712C119.989 432.261 117.545 433.766 114.968 435.188C115.753 431.526 116.355 427.827 116.771 424.105V424.105ZM105.068 451.732C102.605 450.565 100.064 449.191 97.4696 447.615C99.2152 447.048 100.993 446.448 102.767 445.782C104.562 445.108 106.322 444.402 108.021 443.653C107.144 446.533 106.135 449.239 105.068 451.732ZM86.6484 445.821C83.8752 446.427 81.0755 446.905 78.2581 447.253C78.04 444.526 77.9643 441.657 78.0031 438.75C79.3584 439.977 80.7555 441.197 82.2268 442.389C83.6967 443.578 85.1689 444.725 86.6484 445.821ZM85.8406 400.816C88.3038 401.983 90.8446 403.357 93.4391 404.933C91.6935 405.499 89.9162 406.1 88.1413 406.766C86.347 407.44 84.5867 408.145 82.8875 408.895C83.7647 406.015 84.7736 403.309 85.8406 400.816ZM75.9406 417.36C75.1538 421.015 74.5497 424.708 74.1303 428.423C72.1949 426.312 70.3646 424.107 68.6458 421.817C70.9197 420.287 73.3633 418.782 75.9406 417.36ZM67.6407 447.732C59.8037 447.39 54.0157 445.25 52.8909 442.255C51.7661 439.259 54.7085 433.819 60.3912 428.423C61.7644 427.102 63.3215 425.796 64.9532 424.512C67.4446 427.84 70.3378 431.196 73.607 434.521C73.3442 438.902 73.3805 443.296 73.7156 447.672C71.6929 447.791 69.6655 447.811 67.6407 447.732V447.732ZM88.1449 471.144C84.9943 470.635 81.7375 465.387 79.8794 457.771C79.4164 455.897 79.0493 453.877 78.7471 451.791C82.8282 451.305 87.1775 450.478 91.6451 449.326C95.335 451.766 99.1837 453.958 103.165 455.886C99.1142 464.003 94.4639 469.363 90.4929 470.854C89.7468 471.144 88.9408 471.245 88.1464 471.148L88.1449 471.144ZM127.951 439.611C131.586 446.565 132.606 452.648 130.593 455.122C130.152 455.679 129.464 456.111 128.587 456.441C124.635 457.924 117.594 456.976 109.215 453.566C110.937 449.511 112.377 445.342 113.525 441.088C117.456 439.134 121.248 436.911 124.872 434.433C126.037 436.195 127.07 437.917 127.951 439.611V439.611ZM130.518 424.125C129.144 425.446 127.587 426.752 125.956 428.036C123.3 424.508 120.409 421.164 117.302 418.027C117.568 413.401 117.521 408.998 117.193 404.876C119.222 404.756 121.256 404.734 123.288 404.809C131.125 405.151 136.913 407.29 138.037 410.286C139.143 413.289 136.2 418.729 130.518 424.125V424.125Z" fill="white" />
                        <path id="Vector_2" d="M98.7194 435C101.033 434.131 102.906 432.379 103.928 430.13C104.949 427.88 105.035 425.316 104.167 423.003C103.298 420.69 101.546 418.816 99.2966 417.795C97.0467 416.773 94.4832 416.687 92.1699 417.555C89.8567 418.424 87.9832 420.176 86.9616 422.426C85.94 424.676 85.854 427.239 86.7225 429.552C87.591 431.866 89.3429 433.739 91.5928 434.761C93.8426 435.782 96.4062 435.868 98.7194 435V435Z" fill="white" />
                    </g>
                    <path id="mongodb" d="M36.459 135.718C31.4804 133.703 26.9014 131.477 25.9689 130.947L25.8599 131.005C25.7559 132.038 25.0501 137.114 23.9253 142.365C15.4764 189.626 57.7223 196.08 57.7223 196.08L58.0729 196.127C60.1215 199.463 63.3619 204.168 63.3619 204.168L65.6143 202.973C65.6143 202.973 63.5194 197.707 61.8875 194.104L62.0262 193.751C62.0262 193.751 80.3248 155.231 36.459 135.718V135.718ZM59.5233 194.473C58.6091 194.288 57.7153 194.013 56.8545 193.654L39.3291 156.4L60.2332 191.862C60.0774 192.752 59.8398 193.627 59.5233 194.473V194.473Z" fill="white" />
                    <path id="firebase" d="M134.63 341.695L139.258 311.902C139.292 311.682 139.394 311.477 139.55 311.318C139.707 311.159 139.909 311.053 140.129 311.015C140.349 310.978 140.576 311.01 140.776 311.108C140.976 311.206 141.141 311.365 141.246 311.562L146.224 320.909L134.63 341.695ZM167.505 348.924L163.098 321.506C163.064 321.314 162.979 321.135 162.852 320.988C162.724 320.841 162.558 320.732 162.373 320.672C162.188 320.613 161.99 320.605 161.8 320.65C161.611 320.695 161.438 320.791 161.299 320.928L133.505 348.924L148.885 357.595C149.85 358.135 151.026 358.135 151.991 357.595L167.505 348.924ZM155.006 324.997L151.444 318.177C151.354 318.006 151.219 317.862 151.053 317.762C150.888 317.662 150.698 317.61 150.505 317.61C150.311 317.61 150.122 317.662 149.956 317.762C149.791 317.862 149.656 318.006 149.566 318.177L133.925 346.22L155.006 324.997Z" fill="white" />
                    <path id="nodejs" d="M124.256 192.869L115.081 190.3C114.927 190.257 114.766 190.252 114.611 190.285L114.527 190.306C114.375 190.354 114.237 190.438 114.124 190.55L107.316 197.224C107.191 197.347 107.101 197.501 107.055 197.671C107.009 197.84 107.007 198.019 107.052 198.19L110.269 210.63C110.313 210.802 110.443 210.944 110.617 210.986C110.701 211.01 110.791 211.011 110.876 210.989C110.961 210.967 111.039 210.923 111.101 210.861L115.145 206.909C115.269 206.785 115.358 206.631 115.405 206.462C115.451 206.292 115.453 206.113 115.409 205.943L113.916 200.134C113.826 199.786 113.926 199.417 114.18 199.168L115.9 197.477C116.026 197.356 116.181 197.271 116.35 197.228C116.518 197.185 116.695 197.187 116.863 197.233L119.182 197.887C119.351 197.934 119.505 198.025 119.628 198.151C119.751 198.277 119.839 198.433 119.883 198.604L121.377 204.417C121.466 204.761 121.731 205.036 122.074 205.135L127.514 206.642C127.597 206.666 127.686 206.667 127.77 206.645C127.855 206.623 127.932 206.58 127.994 206.519C128.056 206.458 128.101 206.381 128.125 206.297C128.148 206.213 128.149 206.124 128.127 206.039L124.943 193.591C124.9 193.421 124.813 193.265 124.692 193.139C124.571 193.012 124.42 192.92 124.253 192.87L124.256 192.869ZM168.646 166.961L163.206 165.509C163.121 165.49 163.033 165.491 162.95 165.514C162.866 165.537 162.79 165.58 162.727 165.64C162.666 165.702 162.622 165.778 162.599 165.862C162.577 165.946 162.576 166.034 162.597 166.118L165.766 178.446C165.781 178.506 165.78 178.568 165.764 178.627C165.747 178.686 165.715 178.739 165.672 178.782C165.628 178.825 165.574 178.855 165.515 178.871C165.456 178.886 165.394 178.885 165.335 178.869L163.036 178.231C162.867 178.186 162.689 178.185 162.521 178.228C162.352 178.272 162.197 178.358 162.07 178.479L155.276 185.172C155.15 185.295 155.059 185.449 155.012 185.619C154.965 185.789 154.964 185.968 155.008 186.139L157.391 195.409C157.48 195.757 157.744 196.028 158.081 196.129L167.267 198.711C167.436 198.759 167.614 198.762 167.784 198.718C167.954 198.675 168.108 198.587 168.233 198.463L175.031 191.768C175.155 191.644 175.245 191.49 175.292 191.32C175.339 191.151 175.341 190.972 175.299 190.801L169.356 167.684C169.311 167.511 169.221 167.352 169.095 167.226C168.969 167.099 168.811 167.008 168.639 166.963L168.646 166.961ZM168.525 189.298C168.536 189.34 168.535 189.384 168.524 189.426C168.513 189.467 168.492 189.506 168.462 189.537L166.129 191.835C166.098 191.866 166.059 191.888 166.017 191.899C165.975 191.91 165.931 191.909 165.889 191.897L162.733 191.01C162.691 190.997 162.653 190.974 162.623 190.943C162.593 190.912 162.57 190.874 162.559 190.832L161.74 187.645C161.73 187.602 161.73 187.558 161.742 187.515C161.753 187.473 161.775 187.434 161.805 187.402L164.138 185.104C164.169 185.073 164.207 185.051 164.248 185.04C164.29 185.03 164.334 185.031 164.375 185.043L167.527 185.931C167.612 185.956 167.68 186.025 167.702 186.113L168.521 189.299L168.525 189.298ZM196.007 174.561L186.874 171.966C186.706 171.918 186.528 171.916 186.358 171.959C186.189 172.003 186.034 172.091 185.909 172.214L179.113 178.904C178.989 179.027 178.899 179.181 178.852 179.351C178.806 179.52 178.805 179.699 178.849 179.87L181.231 189.136C181.322 189.491 181.587 189.766 181.932 189.854L191.043 192.365C191.376 192.455 191.742 192.365 191.99 192.121L196.103 188.214C196.166 188.152 196.213 188.075 196.237 187.989C196.261 187.904 196.263 187.814 196.242 187.727C196.22 187.641 196.177 187.562 196.115 187.498C196.054 187.434 195.977 187.387 195.892 187.362L186.665 184.791C186.58 184.769 186.502 184.724 186.44 184.66C186.378 184.597 186.334 184.519 186.313 184.433L185.566 181.528C185.522 181.356 185.572 181.175 185.694 181.046L187.828 178.952C187.888 178.889 187.966 178.843 188.05 178.822C188.135 178.8 188.225 178.802 188.308 178.828L191.186 179.631C191.354 179.677 191.49 179.814 191.535 179.99L192.123 182.279C192.145 182.364 192.189 182.441 192.25 182.504C192.311 182.566 192.388 182.611 192.472 182.635C192.555 182.658 192.644 182.659 192.728 182.638C192.813 182.616 192.89 182.572 192.952 182.511L197.018 178.479C197.141 178.355 197.23 178.201 197.276 178.032C197.323 177.862 197.325 177.684 197.282 177.513L196.705 175.268C196.616 174.924 196.353 174.656 196.004 174.55L196.007 174.561ZM148.244 186.789L139.064 184.205C138.895 184.159 138.716 184.157 138.547 184.201C138.377 184.245 138.221 184.332 138.095 184.454L131.296 191.145C131.173 191.27 131.085 191.424 131.04 191.593C130.995 191.762 130.995 191.94 131.039 192.109L133.424 201.386C133.513 201.734 133.777 202.006 134.121 202.105L143.3 204.688C143.469 204.735 143.647 204.737 143.816 204.693C143.985 204.65 144.14 204.562 144.266 204.44L151.059 197.743C151.184 197.619 151.274 197.465 151.32 197.296C151.366 197.126 151.368 196.947 151.324 196.777L148.941 187.507C148.898 187.337 148.81 187.181 148.688 187.054C148.565 186.928 148.412 186.837 148.244 186.789V186.789ZM219.745 168.026L211.08 165.587C210.803 165.516 210.512 165.517 210.235 165.588C209.959 165.659 209.704 165.799 209.496 165.995L203.088 172.307C202.883 172.509 202.734 172.762 202.657 173.04C202.58 173.318 202.577 173.612 202.649 173.892L204.895 182.627C205.041 183.198 205.476 183.649 206.041 183.808L208.309 184.444C209.385 184.674 209.724 184.587 210.165 184.474C211.585 184.109 212.172 183.037 211.786 181.535L209.566 172.899C209.551 172.841 209.513 172.791 209.462 172.76C209.41 172.729 209.349 172.721 209.291 172.736L208.333 172.982C208.275 172.997 208.225 173.034 208.195 173.086C208.164 173.138 208.156 173.199 208.171 173.258L210.389 181.886C210.56 182.553 210.039 183.394 208.78 183.12L206.407 182.453C206.365 182.443 206.327 182.421 206.296 182.391C206.265 182.36 206.244 182.321 206.234 182.279L203.991 173.551C203.968 173.464 203.995 173.371 204.056 173.308L210.477 167.003C210.506 166.973 210.543 166.952 210.583 166.941C210.624 166.931 210.667 166.932 210.707 166.944L219.356 169.367C219.44 169.393 219.504 169.462 219.526 169.546L221.771 178.281C221.782 178.323 221.781 178.367 221.77 178.409C221.759 178.45 221.738 178.488 221.708 178.52L215.299 184.825C215.27 184.855 215.233 184.877 215.193 184.887C215.152 184.898 215.11 184.897 215.07 184.884L212.844 184.23C212.769 184.211 212.698 184.221 212.648 184.269C212.347 184.58 212.011 184.854 211.646 185.085C211.533 185.161 211.368 185.273 211.804 185.396L214.701 186.244C214.973 186.322 215.267 186.333 215.548 186.261C215.828 186.189 216.073 186.04 216.285 185.837L222.694 179.528C222.898 179.325 223.046 179.071 223.122 178.793C223.198 178.514 223.2 178.22 223.128 177.94L220.884 169.209C220.737 168.637 220.299 168.188 219.741 168.027L219.745 168.026ZM215.981 178.309C213.989 178.821 213.422 178.428 213.02 177.47C212.998 177.42 212.959 177.38 212.91 177.357C212.862 177.333 212.806 177.328 212.754 177.343L211.778 177.594C211.749 177.6 211.722 177.613 211.698 177.631C211.674 177.649 211.654 177.671 211.639 177.697C211.624 177.723 211.614 177.751 211.61 177.781C211.606 177.81 211.608 177.841 211.616 177.869C211.944 179.144 213.028 180.49 216.324 179.642C218.71 179.029 219.831 177.726 219.407 176.078C218.987 174.444 217.782 174.289 215.382 174.574C212.961 174.869 212.684 174.772 212.542 174.219C212.424 173.761 212.473 173.105 214.199 172.661C215.751 172.262 216.404 172.445 216.912 173.439C216.935 173.486 216.974 173.523 217.022 173.545C217.07 173.566 217.124 173.569 217.174 173.555L218.15 173.304C218.18 173.296 218.208 173.281 218.233 173.262C218.257 173.242 218.277 173.218 218.292 173.19C218.318 173.132 218.323 173.068 218.307 173.006C217.69 171.24 216.278 170.705 213.867 171.325C211.718 171.877 210.679 173.121 211.071 174.648C211.498 176.307 212.89 176.437 215.001 176.113C217.53 175.724 217.817 176.041 217.942 176.528C218.159 177.371 217.574 177.904 215.986 178.312L215.981 178.309ZM188.37 180.245L187.069 181.529C187.044 181.551 187.027 181.58 187.018 181.612C187.009 181.644 187.009 181.678 187.018 181.709L187.476 183.489C187.493 183.555 187.544 183.605 187.607 183.623L189.366 184.12C189.434 184.142 189.503 184.124 189.555 184.071L190.856 182.788C190.881 182.765 190.899 182.736 190.909 182.703C190.918 182.67 190.919 182.636 190.91 182.603L190.451 180.819C190.442 180.787 190.426 180.757 190.403 180.733C190.379 180.709 190.35 180.691 190.319 180.681L188.559 180.181C188.526 180.174 188.492 180.175 188.459 180.184C188.426 180.192 188.396 180.208 188.37 180.23L188.37 180.245Z" fill="white" />
                    <path id="JS" fill-rule="evenodd" clip-rule="evenodd" d="M123.03 57L165.858 69.0238L153.834 111.851L111.007 99.8271L123.03 57ZM145.69 102.095C143.704 101.537 142.872 100.187 142.406 98.5357L138.601 99.5178C139.127 102.184 141.042 104.642 144.78 105.692C148.603 106.765 152.006 105.58 153.023 101.955C153.967 98.5954 152.455 96.5597 149.449 94.1312L148.563 93.4186C147.046 92.1841 146.435 91.487 146.774 90.279C147.048 89.3029 148.008 88.7656 149.185 89.0962C150.34 89.4204 150.947 90.1165 151.291 91.547L154.989 90.4156C154.318 87.7111 152.73 86.3046 150.171 85.5862C146.577 84.5772 143.632 86.2298 142.784 89.2491C141.865 92.5236 143.356 94.6154 145.914 96.6676L146.799 97.382C148.41 98.7006 149.367 99.4966 148.98 100.876C148.656 102.029 147.357 102.563 145.69 102.095V102.095ZM130.101 97.6896C128.718 97.3014 128.407 96.1938 128.091 94.8922L124.258 95.9567C124.643 98.2325 126.042 100.423 129.263 101.328C132.83 102.329 135.805 101.118 136.975 96.9513L140.833 83.211L136.809 82.0812L132.966 95.768C132.402 97.7791 131.422 98.0604 130.1 97.6891L130.101 97.6896Z" fill="white" />
                    <g id="html5">
                        <path id="Vector_3" d="M183.053 213.771L185.799 214.259L185.317 216.972L187.829 217.418L188.311 214.705L191.057 215.192L189.599 223.405L186.853 222.917L187.341 220.169L184.829 219.722L184.341 222.471L181.597 221.984L183.055 213.772L183.053 213.771ZM194.182 218.556L191.766 218.127L192.25 215.404L199.83 216.75L199.347 219.473L196.928 219.044L195.953 224.533L193.208 224.045L194.182 218.556V218.556ZM201.033 216.964L203.896 217.472L205.144 220.67L207.415 218.097L210.278 218.605L208.82 226.817L206.087 226.332L206.81 222.262L204.403 224.847L204.355 224.839L202.982 221.585L202.26 225.653L199.575 225.176L201.033 216.964V216.964ZM211.643 218.848L214.392 219.336L213.415 224.835L217.273 225.52L216.791 228.235L210.185 227.062L211.643 218.848V218.848Z" fill="white" />
                        <path id="Vector_4" fill-rule="evenodd" clip-rule="evenodd" d="M173.021 269.769L175.649 224.804L221.329 232.915L208.314 276.031L189.774 277.791L173.021 269.769ZM187.8 247.525L188.29 241.905L208.96 245.575L210.402 240.26L183.349 235.457L181.905 252.051L200.626 255.375L198.756 262.268L192.442 262.828L192.437 262.827L186.711 260.135L187.089 255.76L181.664 254.796L180.914 263.412L191.433 268.447L203.061 267.344L207.099 252.449L207.488 251.023L187.8 247.527L187.8 247.525Z" fill="white" />
                    </g>
                    <path id="Bootstrap" fill-rule="evenodd" clip-rule="evenodd" d="M179.304 381.033C177.687 380.489 176.019 381.491 175.561 383.031C175.12 384.513 174.416 386.385 173.416 387.769C172.411 389.155 171.267 389.863 169.893 389.541L169.414 390.965C170.703 391.538 171.189 392.794 171.149 394.506C171.111 396.213 170.54 398.13 169.996 399.575C169.43 401.081 170.154 402.887 171.771 403.431L188.333 409.002C189.95 409.545 191.618 408.543 192.076 407.002C192.517 405.521 193.221 403.649 194.221 402.265C195.225 400.878 196.368 400.171 197.742 400.492L198.221 399.069C196.932 398.494 196.449 397.239 196.487 395.528C196.526 393.82 197.098 391.903 197.64 390.457C198.207 388.952 197.482 387.146 195.866 386.603L179.304 381.033ZM187.987 399.3C187.281 401.397 185.278 402.139 182.664 401.259L178.213 399.762C178.085 399.719 177.98 399.628 177.92 399.508C177.86 399.389 177.85 399.25 177.893 399.124L181.579 388.163C181.622 388.037 181.713 387.933 181.833 387.874C181.953 387.815 182.092 387.806 182.22 387.849L186.646 389.337C188.826 390.071 189.864 391.724 189.258 393.524C188.833 394.787 187.49 395.594 186.196 395.381L186.174 395.446C187.783 396.19 188.521 397.716 187.988 399.301L187.987 399.3ZM185.679 390.693L183.141 389.84L181.944 393.399L184.082 394.118C185.734 394.674 186.867 394.319 187.265 393.138C187.637 392.032 187.059 391.157 185.679 390.693ZM181.469 394.811L180.15 398.732L182.783 399.617C184.502 400.195 185.645 399.817 186.078 398.529C186.512 397.241 185.796 396.266 183.99 395.658L181.469 394.811V394.811Z" fill="white" />
                    <path id="NEXT.js" d="M74.0002 284.456L88.5927 272.071L89.5762 273.23L76.3213 284.479L83.723 293.201L96.1876 282.622L97.171 283.781L84.7064 294.359L92.8328 303.935L106.24 292.556L107.223 293.715L92.4786 306.229L74.0002 284.456ZM89.9001 270.962L91.4505 269.646L106.448 273.39L105.344 257.855L104.573 237.585L108.183 273.648L125.768 277.976L124.157 279.344L108.156 275.403L109.412 291.857L107.831 293.199L106.481 275.093L89.9 270.962L89.9001 270.962ZM108.851 256.872L107.867 255.713L124.496 241.6L125.48 242.759L117.819 249.261L135.314 269.875L133.976 271.01L116.481 250.396L108.851 256.872V256.872ZM55.7442 299.949L57.4163 298.53L109.728 313.433L89.4233 308.821L58.5402 300.409L75.5605 320.587L74.2229 321.722L55.7442 299.949ZM141.56 261.979C141.286 262.211 140.902 262.173 140.67 261.9C140.438 261.626 140.463 261.241 140.737 261.009C141.013 260.774 141.394 260.814 141.626 261.088C141.859 261.361 141.836 261.744 141.56 261.979ZM141.791 259.587L142.507 258.98C142.846 259.359 143.35 259.379 143.766 259.026C144.231 258.631 144.257 258.127 143.813 257.603L140.995 254.283L141.724 253.665L144.544 256.988C145.345 257.932 145.26 258.939 144.355 259.707C143.506 260.428 142.476 260.395 141.791 259.587L141.791 259.587ZM145.591 256.29L146.314 255.677C146.754 256.07 147.43 255.983 148.058 255.45C148.644 254.953 148.816 254.286 148.463 253.87C148.159 253.512 147.703 253.529 146.958 253.91L146.228 254.277C145.21 254.799 144.475 254.717 143.89 254.027C143.18 253.191 143.391 252.054 144.415 251.185C145.369 250.376 146.537 250.341 147.251 251.096L146.541 251.698C146.106 251.323 145.499 251.374 144.952 251.837C144.377 252.326 144.228 252.929 144.587 253.352C144.871 253.687 145.281 253.669 146.015 253.293L146.64 252.981C147.793 252.389 148.522 252.442 149.121 253.148C149.883 254.047 149.665 255.201 148.553 256.145C147.511 257.029 146.356 257.085 145.591 256.29L145.591 256.29Z" fill="white" />
                    <path id="MUI" d="M36.1347 85.3847C36.3283 85.3417 36.5072 85.2485 36.6535 85.1145C36.8 84.9802 36.9086 84.8098 36.9683 84.6202L38.9445 78.3712C39.0042 78.1817 39.1128 78.0112 39.2593 77.8769C39.4061 77.7429 39.5856 77.6498 39.7798 77.6072L43.7785 76.7168C43.9723 76.6742 44.1739 76.6832 44.363 76.743C44.5526 76.8028 44.723 76.9113 44.8573 77.0578C44.9918 77.2036 45.0858 77.3821 45.1297 77.5755C45.173 77.7693 45.1645 77.9711 45.1051 78.1606L41.5477 89.5326C41.4881 89.7227 41.3794 89.8938 41.2325 90.0285C41.0857 90.1632 40.9059 90.2568 40.7114 90.2998L25.6146 93.6478C25.422 93.6903 25.2216 93.6816 25.0333 93.6227C24.845 93.5638 24.6754 93.4567 24.5413 93.312L16.2952 84.4278C16.1593 84.2816 16.0644 84.1021 16.0201 83.9074C15.976 83.7125 15.9843 83.5093 16.0441 83.3186L17.838 77.5839C17.84 77.5775 17.8475 77.5762 17.853 77.5815C17.8585 77.5868 17.866 77.5856 17.8685 77.5775L17.8705 77.571C17.872 77.5661 17.8763 77.5639 17.8806 77.5617L27.6387 75.3988C27.6467 75.396 27.647 75.3836 27.6389 75.3811C27.6376 75.3807 27.6365 75.38 27.6355 75.3791C27.6346 75.3782 27.6338 75.377 27.6334 75.3758C27.633 75.3747 27.6328 75.3735 27.6328 75.3722C27.6329 75.371 27.6332 75.3699 27.6338 75.3688L29.4084 69.7527C29.4687 69.5625 29.4778 69.3598 29.4346 69.165C29.3915 68.9703 29.2977 68.7903 29.1627 68.6434C29.028 68.4971 28.8571 68.3888 28.6673 68.3294C28.4775 68.27 28.2753 68.2617 28.0813 68.3051L20.8261 69.9266C20.6326 69.9697 20.4311 69.9611 20.2419 69.902C20.0527 69.8428 19.8824 69.735 19.7479 69.5894L14.691 64.1093C14.5563 63.9637 14.3856 63.856 14.1962 63.797C14.0067 63.738 13.805 63.7298 13.6114 63.7732C13.4178 63.8167 13.239 63.9102 13.0928 64.0444C12.9467 64.1786 12.8384 64.3489 12.7787 64.5382L9.60017 74.6991C9.54099 74.8885 9.43308 75.0591 9.28725 75.1937C9.14143 75.3283 8.9628 75.4223 8.76925 75.4662C8.57599 75.51 8.37463 75.5022 8.18532 75.4437C7.9958 75.385 7.82501 75.2776 7.69004 75.1322L4.87958 72.1045C4.74364 71.9583 4.64874 71.7788 4.60448 71.5842C4.56028 71.3887 4.56873 71.1849 4.62897 70.9938L10.215 53.2449C10.2747 53.0559 10.383 52.886 10.529 52.7519C10.675 52.6179 10.8535 52.5245 11.0469 52.481C11.2403 52.4376 11.4417 52.4456 11.631 52.5043C11.8203 52.563 11.9908 52.6703 12.1257 52.8156L21.7416 63.2159C21.8761 63.3615 22.0465 63.4693 22.2357 63.5285C22.4249 63.5877 22.6263 63.5962 22.8198 63.5532L36.6451 60.4857C36.8389 60.443 37.0405 60.4521 37.2297 60.5119C37.4192 60.5716 37.5897 60.6802 37.7239 60.8267C37.8585 60.973 37.9523 61.1521 37.9958 61.3461C38.0384 61.5399 38.0293 61.7414 37.9696 61.9306L32.4129 79.694C32.3535 79.8837 32.2466 80.0549 32.0992 80.1903C31.9524 80.325 31.7727 80.4186 31.5782 80.4617L24.3358 82.0765C24.141 82.12 23.9611 82.2141 23.8143 82.3495C23.6679 82.4845 23.5597 82.6557 23.5006 82.8459C23.4413 83.0361 23.4332 83.2387 23.4771 83.433C23.5217 83.6281 23.6172 83.8078 23.7538 83.9539L26.5362 86.9407C26.6704 87.0842 26.8396 87.1904 27.0271 87.2491C27.2161 87.308 27.4173 87.3163 27.6105 87.2732L36.1352 85.3831L36.1347 85.3847ZM41.8294 69.6724C41.7695 69.8631 41.7613 70.0662 41.8054 70.2612C41.8504 70.4566 41.9464 70.6365 42.0838 70.7826C42.2205 70.9284 42.3934 71.0354 42.5849 71.0928C42.7764 71.1502 42.9797 71.156 43.1741 71.1094L47.027 70.1787C47.217 70.1328 47.3918 70.0385 47.5345 69.9049C47.6777 69.7712 47.7838 69.6026 47.8424 69.4156L49.082 65.4531C49.1413 65.262 49.149 65.0587 49.1044 64.8638C49.0594 64.6687 48.9636 64.489 48.8267 64.343C48.6898 64.197 48.5166 64.0899 48.3249 64.0325C48.1334 63.975 47.9301 63.9691 47.7357 64.0155L43.8844 64.9468C43.6939 64.9923 43.5185 65.0864 43.3753 65.22C43.2326 65.3541 43.1271 65.5229 43.069 65.7098L41.8289 69.674L41.8294 69.6724Z" fill="white" />
                    <g id="CSS">
                        <path id="Vector_5" d="M75.9431 0L81.4163 1.11482L80.9502 3.40349L77.7656 2.75484L77.2994 5.04351L80.484 5.69217L80.0178 7.98084L74.5446 6.86602L75.9431 0ZM82.5097 1.33752L87.9851 2.45277L87.5795 4.44422L84.3949 3.79556L84.314 4.19258L87.4986 4.84123L86.5663 9.41858L81.0909 8.30333L81.5164 6.21422L84.701 6.86288L84.7823 6.46374L81.5977 5.81509L82.5097 1.33752ZM89.0806 2.67591L94.5518 3.79029L94.1462 5.78174L90.9616 5.13309L90.8807 5.5301L94.0653 6.17875L93.133 10.7561L87.6618 9.64172L88.0873 7.55261L91.2719 8.20126L91.3532 7.80213L88.1686 7.15347L89.0806 2.67591Z" fill="white" />
                        <path id="Vector_6" fill-rule="evenodd" clip-rule="evenodd" d="M75.0951 52.895L61.1862 45.7989L64.3452 8.06772L102.56 15.8516L90.7126 51.8085L75.0951 52.895ZM69.54 26.4967L69.0253 31.0972L84.6872 34.2872L82.9693 40.0401L77.6515 40.3765L77.6473 40.3756L72.8923 37.992L73.3035 34.3234L68.7665 33.3993L67.9539 40.6235L76.6873 45.0778L86.482 44.3973L90.1905 31.9654L90.5478 30.7756L93.2265 21.7933L70.5903 17.1827L70.0815 21.7866L87.3548 25.3049L86.0002 29.8493L69.54 26.4967V26.4967Z" fill="white" />
                    </g>
                </g>
            </svg>
        </div>
    )
}

const mapStatesToProps = state => ({
    spin: state.ui.spin,
    night: state.ui.night
})

export default connect(mapStatesToProps)(MySkills)