/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
// import ccr from "../public/images/avatar.png";
import ccr from '../public/images/developer_coding_back.png';

import Image from 'next/image';
import { Noise } from 'noisejs';

function About(ppppp) {
    const CANVAS_WIDTH = 3000;
    // The amplitude. The amount the noise affects the movement.
    const NOISE_AMOUNT = 5;
    // The frequency. Smaller for flat slopes, higher for jagged spikes.
    const NOISE_SPEED = 0.004;
    // Pixels to move per frame. At 60fps, this would be 18px a sec.
    const SCROLL_SPEED = 0.3;
    const noise = new Noise(Math.random());
    const bubbles = [
        {
            s: 0.6,
            x: 1134,
            y: 45,
            icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        },
        {
            s: 0.6,
            x: 1620,
            y: 271,
            icons: 'https://www.svgrepo.com/show/376344/python.svg',
        },
        {
            s: 0.6,
            x: 1761,
            y: 372,
            icon: 'https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png',
        },
        {
            s: 0.6,
            x: 2499,
            y: 79,
            icon: 'https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png',
        },
        {
            s: 0.8,
            x: 2704,
            y: 334,
            icon: 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
        },
        {
            s: 0.6,
            x: 2271,
            y: 356,
            icon: 'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png',
        },
        {
            s: 0.6,
            x: 795,
            y: 226,
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
        },
        {
            s: 0.6,
            x: 276,
            y: 256,
            icon: 'https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png',
        },
        {
            s: 0.6,
            x: 1210,
            y: 365,
            icon: 'https://www.svgrepo.com/show/349330/css3.svg',
        },
        {
            s: 0.6,
            x: 444,
            y: 193,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
        },
        {
            s: 0.6,
            x: 2545,
            y: 387,
            icon: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png',
        },
        {
            s: 0.8,
            x: 1303,
            y: 193,
            icon: 'https://code.dlang.org/packages/tailwind-d/logo?s=650228a573eaa51f8ceded68',
        },
        {
            s: 0.8,
            x: 907,
            y: 88,
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg',
        },
        {
            s: 0.8,
            x: 633,
            y: 320,
            icon: 'https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format',
        },
        {
            s: 0.8,
            x: 323,
            y: 60,
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
        },
        {
            s: 0.8,
            x: 129,
            y: 357,
            icon: 'https://camo.githubusercontent.com/dd4b2422ed3bfc9da88c43d18550375c66f9584327dff7ecc19315ce50b96f07/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f66697265626173652f66697265626173652d69636f6e2e737667',
        },
        {
            s: 0.8,
            x: 1440,
            y: 342,
            icon: 'https://dwglogo.com/wp-content/uploads/2017/12/1100px_Redis_Logo_01.png',
        },
        {
            s: 0.8,
            x: 1929,
            y: 293,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png',
        },
        {
            s: 0.8,
            x: 2135,
            y: 198,
            icon: 'https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png',
        },
        {
            s: 0.8,
            x: 2276,
            y: 82,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1483px-Jenkins_logo.svg.png',
        },
        {
            s: 0.8,
            x: 2654,
            y: 182,
            icon: 'https://www.svgrepo.com/show/373924/nginx.svg',
        },
        {
            s: 0.8,
            x: 2783,
            y: 60,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/2109px-Kubernetes_logo_without_workmark.svg.png',
        },
        {
            s: 1.0,
            x: 1519,
            y: 118,
            icon: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
        },
        {
            s: 1.0,
            x: 1071,
            y: 233,
            icon: 'https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png',
        },
        {
            s: 1.0,
            x: 1773,
            y: 148,
            icon: 'https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667',
        },
        {
            s: 1.0,
            x: 2098,
            y: 385,
            icon: 'https://camo.githubusercontent.com/c205ecbe12500177d102169d97bc1c17c545155fdf5ec78c08d54ac53e5b38c1/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f61646f62652d78642e737667',
        },
        {
            s: 1.0,
            x: 2423,
            y: 244,
            icon: 'https://camo.githubusercontent.com/d4cbacdc000de378e0dcae3b5ee54923c0ad04f6e52b7aa886a748fba5578def/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f656c61737469632f656c61737469632d69636f6e2e737667',
        },
        {
            s: 1.0,
            x: 901,
            y: 385,
            icon: 'https://camo.githubusercontent.com/bbb327d6ba7708520eaafd13396fed64d73bf5df5c4cdd0ba03cf0843f7a9340/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676e755f626173682f676e755f626173682d69636f6e2e737667',
        },
        {
            s: 1.0,
            x: 624,
            y: 111,
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
        },
        {
            s: 1.0,
            x: 75,
            y: 103,
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
        },
    ];

    const animationRef = React.useRef();

    const bubblesRef = React.useRef(
        bubbles.map((bubble) => ({
            ...bubble,
            noiseSeedX: Math.floor(Math.random() * 64000),
            noiseSeedY: Math.floor(Math.random() * 64000),
            xWithNoise: bubble.x,
            yWithNoise: bubble.y,
        }))
    );

    const [isReady, setReady] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setReady(true);
        }, 200);

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    function animate() {
        bubblesRef.current = bubblesRef.current.map((bubble, index) => {
            const newNoiseSeedX = bubble.noiseSeedX + NOISE_SPEED;
            const newNoiseSeedY = bubble.noiseSeedY + NOISE_SPEED;

            const randomX = noise.simplex2(newNoiseSeedX, 0);
            const randomY = noise.simplex2(newNoiseSeedY, 0);

            const newX = bubble.x - SCROLL_SPEED;

            const newXWithNoise = newX + randomX * NOISE_AMOUNT;
            const newYWithNoise = bubble.y + randomY * NOISE_AMOUNT;

            const element = document.getElementById(`bubble-${index}`);

            if (element) {
                element.style.transform = `translate(${newXWithNoise}px, ${newYWithNoise}px) scale(${bubble.s})`;
            }

            return {
                ...bubble,
                noiseSeedX: newNoiseSeedX,
                noiseSeedY: newNoiseSeedY,
                x: newX < -200 ? CANVAS_WIDTH : newX,
                xWithNoise: newXWithNoise,
                yWithNoise: newYWithNoise,
            };
        });

        animationRef.current = requestAnimationFrame(animate);
    }

    const backgroundPositions = [];

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            backgroundPositions.push(`${-154 * j}px ${-154 * i}px`);
        }
    }
    return (
        <section id="about" className="">
            <div className="container reveal">
                <div className="about-title">
                    <h3 className="about-head">About</h3>
                    <div className="bar"></div>
                </div>
                <div className="about-content">
                    <div className="about-left">
                        <div className="my-image-container">
                            <Image src={ccr} alt="cceer" />
                        </div>
                        <h3 className="about-text-head">Who's this guy?</h3>
                        <p className="about-text">
                            I am a full stack developer from
                            <span className="green-text"> Kathmandu, Nepal.</span>
                            <br /> I have a passion in web programming, app development, Ui designs,
                            <br /> and Similarly in machine learning. <br />
                            <a className="green-text" href="#contact">
                                Let’s make something interesting.
                            </a>
                        </p>
                    </div>
                    <div className="bubbles-wrapper">
                        <div className="bubbles">
                            {bubbles.map((bubble, index) => (
                                <div
                                    className="bubble"
                                    id={`bubble-${index}`}
                                    key={`${bubble.x} ${bubble.y}`}
                                    style={{
                                        backgroundSize: 'cover',
                                        backgroundPosition: backgroundPositions[index],
                                        transform: `translate(${bubble.x}px, ${bubble.y}px) scale(${bubble.s})`,
                                    }}
                                >
                                    <div
                                        style={{
                                            backgroundImage: `url(${bubble.icon})`,
                                        }}
                                        className="bubbleBackground"
                                    ></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo(About);
