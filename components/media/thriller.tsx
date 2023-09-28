import Image from 'next/image';
import React, { useState } from 'react'
import { ReactSVG } from "react-svg";
import YouTube from "react-youtube";

import talentStyles from "styles/management/management.module.scss";

const Thriller = ({ thrillers }: { thrillers: string[]}) => {
    const [index, setIndex] = useState(0);

    const slide = (i: number) => {
      if (i < 0) {
        setIndex(thrillers.length - 1);
      } else {
        setIndex(i % thrillers.length);
      }
    };
    const opts = {
      height: "500px",
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

  return (
    <div className={talentStyles.trailerWrapper}>
      <div>
        <YouTube
          videoId={thrillers[index]}
          opts={opts}
          onReady={(event) => event.target.playVideo()}
        />
      </div>
      <div>
        <div>
          <Image
            src="/assets/images/Logo_TRS.png"
            alt=""
            width="250"
            height="80"
          />
          <p>
            Original programming providing diverse perspectives into life in
            Africa through in-depth documentaries and news stories.
          </p>
          <div>
            <button
              id="right-arrow"
              onClick={() => slide(index - 1)}
              className={talentStyles.arrow}
            >
              <ReactSVG
                style={{ transform: "rotate(-180deg) translateY(0.2em)" }}
                src="/assets/svg/right-arrow.svg"
              />
            </button>
            <button
              id="right-arrow"
              onClick={() => slide(index + 1)}
              className={talentStyles.arrow}
            >
              <ReactSVG src="/assets/svg/right-arrow.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Thriller