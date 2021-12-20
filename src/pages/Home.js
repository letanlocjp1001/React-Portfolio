import React from 'react'
import Particles from 'react-tsparticles'
import Typedwriter from 'typewriter-effect'
import './Home.css'

function Home() {
  const particlesInit = (main) => {}

  const particlesLoaded = (container) => {}
  return (
    <>
      <section className='home' id='home'>
        <Particles
          id='tsparticles'
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#ffd700',
              },
              links: {
                color: '#FFFFFF',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: true,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 1000,
                },
                value: 30,
              },
              opacity: {
                value: 0.4,
              },
              shape: {
                type: 'star',
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        <svg
          id='svg__name'
          width='600'
          height='200'
          viewBox='0 0 600 200'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='name'>
            <path
              id='name__17'
              d='M10.8583 9.79012H26.4609C27.1551 9.79012 27.8211 10.0577 28.3131 10.5343C28.8052 11.0109 29.0833 11.6577 29.0867 12.3333V32.9383C29.0867 33.6128 29.362 34.2596 29.852 34.7366C30.3421 35.2135 31.0067 35.4815 31.6998 35.4815H52.5412C53.2343 35.4815 53.8989 35.2135 54.389 34.7366C54.879 34.2596 55.1543 33.6128 55.1543 32.9383V12.3333C55.1543 11.6588 55.4296 11.012 55.9197 10.535C56.4097 10.0581 57.0744 9.79012 57.7674 9.79012H73.37C74.062 9.79337 74.7247 10.0624 75.214 10.5386C75.7034 11.0148 75.9798 11.6598 75.9831 12.3333V78.4815C75.9915 78.8206 75.9302 79.158 75.8027 79.4737C75.6752 79.7894 75.484 80.0771 75.2405 80.3198C74.997 80.5626 74.7061 80.7555 74.3848 80.8871C74.0636 81.0188 73.7185 81.0865 73.37 81.0864H57.7674C57.0744 81.0864 56.4097 80.8185 55.9197 80.3415C55.4296 79.8646 55.1543 79.2177 55.1543 78.5432V55.1605C55.1543 54.486 54.879 53.8391 54.389 53.3622C53.8989 52.8852 53.2343 52.6173 52.5412 52.6173H31.6871C30.9963 52.6205 30.3349 52.8899 29.8476 53.3665C29.3602 53.8431 29.0867 54.4881 29.0867 55.1605V78.5062C29.0917 78.8443 29.0275 79.18 28.8976 79.4937C28.7678 79.8073 28.575 80.0926 28.3305 80.3329C28.086 80.5732 27.7947 80.7636 27.4737 80.893C27.1526 81.0223 26.8083 81.0881 26.4609 81.0864H10.8583C10.1653 81.0864 9.50065 80.8185 9.0106 80.3415C8.52055 79.8646 8.24524 79.2177 8.24524 78.5432V12.3333C8.24524 11.6588 8.52055 11.012 9.0106 10.535C9.50065 10.0581 10.1653 9.79012 10.8583 9.79012V9.79012Z'
            ></path>
            <path
              id='name__16'
              d='M90.1142 9.79012H132.609C133.302 9.79012 133.967 10.0581 134.457 10.535C134.947 11.012 135.222 11.6588 135.222 12.3333V24.3704C135.222 25.0449 134.947 25.6917 134.457 26.1687C133.967 26.6456 133.302 26.9136 132.609 26.9136H110.943C110.25 26.9136 109.585 27.1815 109.095 27.6585C108.605 28.1354 108.33 28.7823 108.33 29.4568V33.4198C108.33 34.0943 108.605 34.7411 109.095 35.2181C109.585 35.695 110.25 35.963 110.943 35.963H128.461C129.154 35.963 129.819 36.2309 130.309 36.7079C130.799 37.1848 131.074 37.8317 131.074 38.5062V49.5555C131.074 50.23 130.799 50.8769 130.309 51.3539C129.819 51.8308 129.154 52.0988 128.461 52.0988H110.943C110.249 52.102 109.584 52.3727 109.094 52.8516C108.605 53.3305 108.33 53.9787 108.33 54.6543V61.3333C108.33 62.009 108.605 62.6571 109.094 63.136C109.584 63.6149 110.249 63.8856 110.943 63.8889H133.776C134.469 63.8889 135.134 64.1568 135.624 64.6338C136.114 65.1107 136.389 65.7576 136.389 66.4321V78.4568C136.389 79.1313 136.114 79.7782 135.624 80.2551C135.134 80.732 134.469 81 133.776 81H90.1142C89.4211 81 88.7565 80.732 88.2664 80.2551C87.7764 79.7782 87.5011 79.1313 87.5011 78.4568V12.3333C87.5011 11.6588 87.7764 11.012 88.2664 10.535C88.7565 10.0581 89.4211 9.79012 90.1142 9.79012V9.79012Z'
            ></path>
            <path
              id='name__15'
              d='M148.326 9.79012H163.915C164.608 9.79012 165.273 10.0581 165.763 10.535C166.253 11.012 166.529 11.6588 166.529 12.3333V61.3333C166.529 62.0111 166.805 62.6611 167.298 63.1404C167.79 63.6196 168.458 63.8889 169.154 63.8889H194.448C195.141 63.8889 195.806 64.1568 196.296 64.6338C196.786 65.1107 197.061 65.7576 197.061 66.4321V78.4568C197.061 79.1313 196.786 79.7782 196.296 80.2551C195.806 80.732 195.141 81 194.448 81H148.326C147.633 81 146.968 80.732 146.478 80.2551C145.988 79.7782 145.712 79.1313 145.712 78.4568V12.3333C145.712 11.6588 145.988 11.012 146.478 10.535C146.968 10.0581 147.633 9.79012 148.326 9.79012V9.79012Z'
            ></path>
            <path
              id='name__14'
              d='M206.879 9.79012H222.469C223.164 9.79012 223.83 10.0577 224.322 10.5343C224.814 11.0109 225.092 11.6577 225.095 12.3333V61.3333C225.095 62.009 225.37 62.6571 225.86 63.136C226.349 63.6149 227.014 63.8856 227.708 63.8889H253.002C253.345 63.8889 253.685 63.9547 254.002 64.0825C254.319 64.2103 254.607 64.3976 254.85 64.6338C255.093 64.8699 255.285 65.1503 255.416 65.4589C255.548 65.7674 255.615 66.0981 255.615 66.4321V78.4568C255.615 78.7908 255.548 79.1215 255.416 79.43C255.285 79.7386 255.093 80.0189 254.85 80.2551C254.607 80.4913 254.319 80.6786 254.002 80.8064C253.685 80.9342 253.345 81 253.002 81H206.879C206.186 81 205.522 80.732 205.032 80.2551C204.542 79.7782 204.266 79.1313 204.266 78.4568V12.3333C204.266 11.6588 204.542 11.012 205.032 10.535C205.522 10.0581 206.186 9.79012 206.879 9.79012V9.79012Z'
            ></path>
            <path
              id='name__13'
              d='M298.985 8.71606C321.032 8.71606 338.118 24.8519 338.118 45.4074C338.118 65.963 321.032 82.1111 298.985 82.1111C276.939 82.1111 259.865 65.9753 259.865 45.4074C259.865 24.8395 276.951 8.71606 298.985 8.71606ZM298.985 63.9136C309.298 63.9136 317.29 55.7407 317.29 45.3951C317.29 35.0494 309.298 26.8765 298.985 26.8765C288.672 26.8765 280.693 35.037 280.693 45.3951C280.693 55.7531 288.672 63.9136 298.985 63.9136Z'
            ></path>
            <path
              id='name__12'
              d='M349.687 64.8889H361.548C361.961 64.8846 362.37 64.9754 362.74 65.1539C363.111 65.3323 363.433 65.5934 363.68 65.9159C363.927 66.2383 364.093 66.613 364.163 67.0095C364.233 67.406 364.206 67.813 364.085 68.1975L355.915 93.7037C355.746 94.2278 355.408 94.685 354.951 95.0074C354.494 95.3299 353.943 95.5005 353.378 95.4938H344.803C344.422 95.4894 344.046 95.4038 343.703 95.243C343.359 95.0822 343.055 94.8501 342.814 94.563C342.572 94.2759 342.398 93.9408 342.303 93.5813C342.208 93.2217 342.196 92.8463 342.266 92.4815L347.15 66.9753C347.261 66.3963 347.574 65.8723 348.037 65.4921C348.499 65.1119 349.082 64.8988 349.687 64.8889V64.8889Z'
            ></path>
            <path
              id='name__11'
              d='M390.419 9.79012H406.008C406.701 9.79012 407.366 10.0581 407.856 10.535C408.346 11.012 408.622 11.6588 408.622 12.3333V78.4815C408.622 79.156 408.346 79.8029 407.856 80.2798C407.366 80.7568 406.701 81.0247 406.008 81.0247H390.419C389.726 81.0247 389.061 80.7568 388.571 80.2798C388.081 79.8029 387.806 79.156 387.806 78.4815V12.3333C387.806 11.6588 388.081 11.012 388.571 10.535C389.061 10.0581 389.726 9.79012 390.419 9.79012V9.79012Z'
            ></path>
            <path
              id='name__10'
              d='M425.822 8.02471H436.376C436.794 8.02363 437.206 8.12011 437.578 8.30604C437.95 8.49197 438.27 8.76192 438.512 9.09328C438.755 9.42463 438.912 9.80771 438.97 10.2104C439.029 10.613 438.988 11.0235 438.85 11.4074L430.465 34.8642C430.284 35.3621 429.949 35.7933 429.506 36.0984C429.063 36.4035 428.534 36.5675 427.992 36.5679H420.837C420.451 36.5649 420.07 36.4783 419.722 36.3147C419.373 36.151 419.067 35.9142 418.824 35.6213C418.582 35.3284 418.409 34.9868 418.318 34.621C418.228 34.2553 418.221 33.8745 418.3 33.5062L423.285 10.0494C423.407 9.48064 423.725 8.96959 424.187 8.60123C424.648 8.23287 425.226 8.02943 425.822 8.02471V8.02471Z'
            ></path>
            <path
              id='name__9'
              d='M447.349 78.4815V12.3333C447.349 11.6588 447.624 11.012 448.114 10.535C448.604 10.0581 449.269 9.79013 449.962 9.79013H466.008C466.426 9.79043 466.837 9.88813 467.208 10.075C467.579 10.2619 467.898 10.5325 468.14 10.8642L484.123 32.8272C484.365 33.1585 484.686 33.4285 485.058 33.6148C485.43 33.8011 485.842 33.8983 486.26 33.8983C486.678 33.8983 487.09 33.8011 487.462 33.6148C487.834 33.4285 488.155 33.1585 488.397 32.8272L504.292 10.8766C504.527 10.538 504.845 10.2615 505.217 10.0719C505.588 9.88226 506.003 9.78545 506.423 9.79013H522.266C522.959 9.79013 523.624 10.0581 524.114 10.535C524.604 11.012 524.879 11.6588 524.879 12.3333V78.4815C524.879 79.156 524.604 79.8029 524.114 80.2798C523.624 80.7568 522.959 81.0247 522.266 81.0247H506.676C505.983 81.0247 505.319 80.7568 504.829 80.2798C504.339 79.8029 504.063 79.156 504.063 78.4815V57.8148C504.063 52.1975 504.165 46 504.266 41.0864L504.063 40.9877C501.019 45.5062 497.721 50.1358 494.448 54.6667L487.89 63.7284C487.647 64.0597 487.326 64.3298 486.955 64.5161C486.583 64.7024 486.171 64.7996 485.753 64.7996C485.334 64.7996 484.922 64.7024 484.551 64.5161C484.179 64.3298 483.858 64.0597 483.615 63.7284L476.968 54.6543C473.632 50.1235 470.397 45.4939 467.366 40.9753L467.163 41.0741C467.264 46.0124 467.366 52.1852 467.366 57.8025V78.4692C467.362 79.1448 467.084 79.7916 466.592 80.2682C466.1 80.7448 465.434 81.0124 464.74 81.0124H449.962C449.271 81.0124 448.608 80.7461 448.119 80.2718C447.629 79.7976 447.352 79.1539 447.349 78.4815V78.4815Z'
            ></path>
            <path
              id='name__8'
              d='M11.4038 121.358H25.9027C26.3186 121.356 26.7307 121.435 27.1154 121.588C27.5 121.742 27.8497 121.968 28.1444 122.254C28.439 122.54 28.6728 122.879 28.8324 123.253C28.9919 123.627 29.074 124.027 29.074 124.432V172.444C29.0723 172.849 29.1529 173.249 29.311 173.623C29.4691 173.996 29.7017 174.336 29.9954 174.622C30.289 174.908 30.6379 175.134 31.0218 175.288C31.4058 175.442 31.8173 175.52 32.2326 175.518H56.4355C57.2766 175.518 58.0832 175.844 58.6779 176.422C59.2726 177.001 59.6068 177.786 59.6068 178.605V189.568C59.6034 190.384 59.2678 191.166 58.6735 191.742C58.0791 192.318 57.2744 192.642 56.4355 192.642H11.4038C10.5671 192.639 9.76567 192.314 9.17405 191.738C8.58243 191.162 8.24858 190.382 8.24524 189.568V124.432C8.24524 123.617 8.57802 122.835 9.17036 122.258C9.76271 121.682 10.5661 121.358 11.4038 121.358V121.358Z'
            ></path>
            <path
              id='name__7'
              d='M69.9451 121.358H111.336C112.174 121.358 112.977 121.682 113.57 122.258C114.162 122.835 114.495 123.617 114.495 124.432V135.407C114.495 136.224 114.162 137.007 113.57 137.585C112.978 138.164 112.175 138.491 111.336 138.494H90.7611C89.9234 138.494 89.12 138.818 88.5277 139.394C87.9353 139.971 87.6026 140.753 87.6026 141.568V144.457C87.6025 145.273 87.9349 146.056 88.5269 146.635C89.1189 147.213 89.9223 147.54 90.7611 147.543H107.188C107.603 147.542 108.015 147.62 108.399 147.774C108.783 147.928 109.132 148.154 109.425 148.44C109.719 148.726 109.952 149.065 110.11 149.439C110.268 149.813 110.348 150.213 110.347 150.617V160.593C110.348 160.997 110.268 161.398 110.11 161.773C109.952 162.147 109.72 162.487 109.426 162.774C109.133 163.061 108.784 163.289 108.4 163.444C108.016 163.599 107.604 163.679 107.188 163.679H90.7611C89.9234 163.679 89.12 164.003 88.5277 164.579C87.9353 165.156 87.6026 165.938 87.6026 166.753V172.444C87.6026 173.26 87.9353 174.042 88.5277 174.618C89.12 175.195 89.9234 175.518 90.7611 175.518H112.541C113.382 175.518 114.189 175.844 114.784 176.422C115.378 177.001 115.712 177.786 115.712 178.605V189.568C115.709 190.384 115.374 191.166 114.779 191.742C114.185 192.318 113.38 192.642 112.541 192.642H69.9451C69.1062 192.642 68.3015 192.318 67.7071 191.742C67.1128 191.166 66.7772 190.384 66.7738 189.568V124.432C66.7738 124.027 66.8559 123.627 67.0154 123.253C67.175 122.879 67.4088 122.54 67.7034 122.254C67.998 121.968 68.3477 121.742 68.7324 121.588C69.1171 121.435 69.5292 121.356 69.9451 121.358Z'
            ></path>
            <path
              id='name__6'
              d='M159.146 138.481H142.224C141.808 138.481 141.396 138.402 141.012 138.246C140.628 138.091 140.28 137.863 139.986 137.577C139.693 137.29 139.46 136.95 139.302 136.575C139.144 136.201 139.064 135.8 139.066 135.395V124.432C139.064 124.028 139.144 123.627 139.303 123.254C139.461 122.88 139.693 122.541 139.987 122.255C140.281 121.969 140.629 121.743 141.013 121.589C141.397 121.435 141.809 121.356 142.224 121.358H203.226C203.641 121.356 204.053 121.435 204.437 121.589C204.821 121.743 205.17 121.969 205.463 122.255C205.757 122.541 205.99 122.88 206.148 123.254C206.306 123.627 206.386 124.028 206.385 124.432V135.407C206.386 135.812 206.306 136.213 206.148 136.588C205.99 136.962 205.758 137.302 205.464 137.589C205.171 137.876 204.822 138.103 204.438 138.259C204.054 138.414 203.642 138.494 203.226 138.494H186.304C185.889 138.492 185.477 138.571 185.092 138.724C184.707 138.878 184.357 139.104 184.063 139.39C183.768 139.675 183.534 140.015 183.375 140.389C183.215 140.762 183.133 141.163 183.133 141.568V189.531C183.133 190.346 182.8 191.128 182.208 191.705C181.616 192.281 180.812 192.605 179.975 192.605H165.476C164.638 192.605 163.835 192.281 163.242 191.705C162.65 191.128 162.317 190.346 162.317 189.531V141.58C162.32 141.173 162.241 140.77 162.083 140.393C161.925 140.017 161.692 139.674 161.397 139.386C161.102 139.098 160.751 138.87 160.364 138.714C159.978 138.559 159.564 138.48 159.146 138.481V138.481Z'
            ></path>
            <path
              id='name__5'
              d='M230.068 121.358H245.48C246.235 121.36 246.972 121.581 247.598 121.992C248.223 122.403 248.709 122.986 248.994 123.667L275.556 187.518C275.786 188.08 275.871 188.687 275.804 189.288C275.737 189.888 275.52 190.464 275.173 190.964C274.825 191.464 274.357 191.874 273.809 192.158C273.261 192.442 272.65 192.591 272.03 192.593H257.721C256.934 192.593 256.166 192.356 255.523 191.914C254.88 191.471 254.393 190.846 254.131 190.123L250.744 180.543C250.482 179.821 249.996 179.195 249.353 178.753C248.71 178.311 247.942 178.074 247.154 178.074H227.455C226.672 178.079 225.909 178.318 225.271 178.76C224.633 179.202 224.151 179.825 223.89 180.543L220.326 190.21C220.065 190.928 219.582 191.551 218.944 191.993C218.306 192.435 217.544 192.674 216.761 192.679H203.518C202.898 192.676 202.289 192.525 201.743 192.24C201.197 191.956 200.73 191.545 200.384 191.045C200.038 190.545 199.822 189.97 199.756 189.371C199.69 188.771 199.775 188.165 200.004 187.605L226.554 123.753C226.824 123.056 227.304 122.455 227.931 122.028C228.558 121.601 229.302 121.367 230.068 121.358ZM237.425 143C236.004 147.531 234.596 151.642 232.871 156.284L231.45 160.099C231.326 160.435 231.287 160.795 231.336 161.149C231.385 161.503 231.521 161.841 231.733 162.133C231.944 162.425 232.225 162.663 232.551 162.827C232.878 162.99 233.24 163.075 233.607 163.074H241.294C241.662 163.077 242.026 162.994 242.353 162.831C242.681 162.668 242.964 162.43 243.177 162.138C243.39 161.846 243.527 161.508 243.577 161.152C243.627 160.797 243.588 160.436 243.463 160.099L242.093 156.259C240.368 151.444 239.061 147.407 237.641 142.975L237.425 143Z'
            ></path>
            <path
              id='name__4'
              d='M314.867 166.815C310.82 161.506 307.256 156.679 303.641 151.556L303.438 151.654C303.539 157.667 303.641 163.765 303.641 169.765V189.518C303.637 190.333 303.303 191.113 302.712 191.689C302.12 192.264 301.319 192.589 300.482 192.593H286.782C285.946 192.589 285.144 192.264 284.552 191.689C283.961 191.113 283.627 190.333 283.624 189.518V124.432C283.624 123.617 283.956 122.835 284.549 122.258C285.141 121.682 285.945 121.358 286.782 121.358H301.535C302.027 121.358 302.513 121.47 302.953 121.684C303.393 121.898 303.776 122.209 304.072 122.593L322.529 147.111C326.575 152.42 330.14 157.247 333.755 162.358L333.958 162.259C333.856 156.259 333.755 150.16 333.755 144.16V124.407C333.755 123.592 334.088 122.81 334.68 122.234C335.272 121.657 336.076 121.333 336.913 121.333H350.613C351.451 121.333 352.254 121.657 352.847 122.234C353.439 122.81 353.772 123.592 353.772 124.407V189.494C353.768 190.308 353.434 191.088 352.843 191.664C352.251 192.24 351.45 192.565 350.613 192.568H335.873C335.381 192.568 334.895 192.456 334.455 192.242C334.015 192.028 333.632 191.717 333.336 191.333L314.867 166.815Z'
            ></path>
            <path
              id='name__3'
              d='M392.334 121.358H406.82C407.236 121.356 407.648 121.435 408.033 121.588C408.418 121.742 408.767 121.968 409.062 122.254C409.357 122.54 409.59 122.879 409.75 123.253C409.909 123.627 409.992 124.027 409.992 124.432V172.444C409.992 173.26 410.324 174.042 410.917 174.618C411.509 175.195 412.312 175.518 413.15 175.518H437.353C438.194 175.518 439.001 175.844 439.595 176.422C440.19 177.001 440.524 177.786 440.524 178.605V189.568C440.521 190.384 440.185 191.166 439.591 191.742C438.997 192.318 438.192 192.642 437.353 192.642H392.334C391.495 192.642 390.69 192.318 390.096 191.742C389.502 191.166 389.166 190.384 389.163 189.568V124.432C389.163 124.027 389.245 123.627 389.404 123.253C389.564 122.879 389.798 122.54 390.092 122.254C390.387 121.968 390.737 121.742 391.121 121.588C391.506 121.435 391.918 121.356 392.334 121.358Z'
            ></path>
            <path
              id='name__2'
              d='M483.894 120.272C505.928 120.272 523.015 136.407 523.015 156.975C523.015 177.543 505.928 193.679 483.894 193.679C461.86 193.679 444.761 177.543 444.761 156.975C444.761 136.407 461.848 120.272 483.894 120.272ZM483.894 175.469C494.195 175.469 502.186 167.309 502.186 156.951C502.186 146.593 494.195 138.432 483.894 138.432C473.594 138.432 465.59 146.593 465.59 156.951C465.59 167.309 473.581 175.469 483.894 175.469Z'
            ></path>
            <path
              id='name__1'
              d='M591.755 187.407C591.762 188.014 591.583 188.609 591.242 189.117C590.901 189.624 590.413 190.022 589.839 190.259C583.678 192.557 577.131 193.717 570.533 193.679C545.962 193.679 529.484 177.728 529.484 157.074C529.484 136.012 546.571 120.272 570.533 120.272C576.775 120.251 582.967 121.352 588.799 123.519C589.381 123.748 589.877 124.143 590.224 124.652C590.57 125.161 590.75 125.76 590.74 126.37V139.111C590.742 139.628 590.609 140.137 590.354 140.591C590.099 141.044 589.73 141.428 589.282 141.705C588.833 141.982 588.32 142.145 587.79 142.177C587.26 142.209 586.73 142.11 586.249 141.889C581.461 139.655 576.235 138.446 570.926 138.346C558.596 138.346 550.3 146.111 550.3 156.938C550.3 167.272 557.987 175.728 571.332 175.728C576.859 175.617 582.29 174.3 587.226 171.877C587.707 171.658 588.237 171.561 588.766 171.595C589.296 171.629 589.808 171.793 590.254 172.072C590.701 172.35 591.069 172.734 591.322 173.188C591.575 173.642 591.707 174.15 591.704 174.667L591.755 187.407Z'
            ></path>
          </g>
        </svg>
        <p class='home__heading-3'>
          <Typedwriter
            onInit={(typewriter) => {
              typewriter
                .typeString("I'm a UX/UI Designer.")
                .pauseFor(2000)
                .deleteChars(15)
                .typeString('Front-End Web Developer.')
                .pauseFor(2000)
                .deleteChars(24)
                .start()
            }}
            options={{ loop: true, PauseFor: 1500 }}
          />
        </p>
        <button class='home__btn'>Contact</button>
      </section>
    </>
  )
}

export default Home
