import React from "react";
import Head from "next/head";
import { GitHubCorner } from "../src/github-corner";

export default function Page() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Code Hike</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:title" content="Code Hike" />
        <meta
          property="og:description"
          content="If I don't ship something before the countdown ends I am a clown 🤡"
        />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/1911623/80647122-54014500-8a44-11ea-91d0-0c6684c390b0.png"
        />
      </Head>
      <svg
        width="256"
        height="256"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo"
      >
        <g clipPath="url(#clip0)">
          <circle
            cx="256"
            cy="256"
            r="240"
            fill="#FAFAFA"
            stroke="#4F4F4F"
            strokeWidth="32"
          />
          <path
            d="M297.344 76.9416C303.733 66.7168 319.521 71.2437 319.521 83.3006L319.521 269.053C319.521 272.051 318.678 274.989 317.09 277.532L218.656 435.058C212.267 445.283 196.479 440.756 196.479 428.699L196.479 242.947C196.479 239.949 197.322 237.011 198.91 234.468L297.344 76.9416Z"
            fill="#4F4F4F"
          />
          <path
            d="M286.912 151.683C287.445 150.831 288.76 151.209 288.76 152.213L288.76 263.493C288.76 264.158 288.124 264.638 287.485 264.455L228.515 247.545C227.876 247.362 227.591 246.618 227.943 246.054L286.912 151.683Z"
            fill="white"
          />
          <path
            d="M157.622 195.72C164.12 188.174 163.288 176.81 155.765 170.337C148.242 163.865 136.875 164.734 130.378 172.28L157.622 195.72ZM82.5627 255.346L96.1849 267.066L96.1849 267.066L82.5627 255.346ZM82.5608 256.652L96.2166 244.879L96.2165 244.879L82.5608 256.652ZM130.344 339.772C136.82 347.293 148.184 348.119 155.726 341.617C163.268 335.115 164.132 323.748 157.656 316.227L130.344 339.772ZM130.378 172.28L68.9405 243.626L96.1849 267.066L157.622 195.72L130.378 172.28ZM68.9051 268.424L130.344 339.772L157.656 316.227L96.2166 244.879L68.9051 268.424ZM68.9405 243.626C62.7935 250.765 62.7783 261.309 68.9051 268.424L96.2165 244.879C101.698 251.245 101.685 260.679 96.1849 267.066L68.9405 243.626Z"
            fill="#7387C4"
          />
          <path
            d="M354.377 316.281C347.88 323.826 348.711 335.19 356.235 341.663C363.759 348.135 375.125 347.265 381.623 339.719L354.377 316.281ZM429.437 256.654L443.06 268.373L443.06 268.373L429.437 256.654ZM429.439 255.349L415.783 267.12L415.783 267.12L429.439 255.349ZM381.656 172.228C375.18 164.708 363.816 163.881 356.274 170.383C348.732 176.884 347.867 188.251 354.344 195.772L381.656 172.228ZM381.623 339.719L443.06 268.373L415.814 244.934L354.377 316.281L381.623 339.719ZM443.096 243.577L381.656 172.228L354.344 195.772L415.783 267.12L443.096 243.577ZM443.06 268.373C449.207 261.235 449.222 250.691 443.095 243.577L415.783 267.12C410.301 260.755 410.315 251.321 415.814 244.935L443.06 268.373Z"
            fill="#7387C4"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="512" height="512" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <Countdown />
      <GitHubCorner repo="https://github.com/code-hike/codehike" />
      <style jsx global>
        {`
          html,
          body {
            height: 100%;
            margin: 0;
            background: #fafafa;
            color: #4f4f4f;
            font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,
              Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
              Segoe UI Symbol;
          }
          body > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
          }
          .logo {
            max-width: 60vw;
            max-height: 60vw;
          }
          #time-container {
            height: 60px;
            font-size: 2em;
            margin: 30px 0;
            font-weight: bold;
            text-align: center;
          }

          a {
            color: #7387c4;
          }
        `}
      </style>
    </>
  );
}

function Countdown() {
  React.useEffect(() => {
    var countDownDate = new Date("June 15, 2020 18:00:00").getTime();

    function update() {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("time").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      // yes, i know, innerHTML in React

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML =
          'I, <a href="https://twitter.com/pomber">@pomber</a>, am a clown 🤡';
      }
    }

    var x = setInterval(update, 1000);

    update();
  }, []);
  return (
    <div id="time-container">
      <span id="time"></span>
    </div>
  );
}
