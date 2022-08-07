import Slider from 'components/slider'
import SliderItem from 'components/slider/sliderItem'
import Heading from 'components/typography/Heading'
import Link from 'next/link'
import React from 'react'
import styles from "styles/home/nihuMedia.module.scss"

const NihuMedia = () => {
  return (
    <div className={styles.nihuMedia}>
        <div className={styles.top}>
            <Heading>N&apos;ihu  Media</Heading>
            <Link href="/">Learn More &gt;</Link>
        </div>
        <div className={styles.sliderWrapper}>
            <Slider gap noCount>
                {Array(8).fill(null).map((_, i) => {
                    return (
                        <SliderItem key={i}>
                            <div className={styles.singleMedia}></div>
                        </SliderItem>
                    )
                })}
            </Slider>
        </div>
    </div>
  )
}

export default NihuMedia