import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import { FcNext, FcPrevious } from 'react-icons/fc'
import './swiper.scss'
import { current } from '@reduxjs/toolkit'

const MySwiper = () => {
	const ref = useRef<any>(null)
	const [currentSlide, setCurrentSlide] = useState(0)
	console.log(ref)

	const handleNext = () => {
		if (currentSlide < 4) {
			setCurrentSlide(currentSlide + 1)
		}
	}

	const handlePrevious = () => {
		if (currentSlide > 0) {
			setCurrentSlide(currentSlide - 1)
		}
	}
	useEffect(() => {
		ref.current.swiper.slideTo(currentSlide, 500, false)
	}, [currentSlide])

	return (
		<div className='swiper'>
			<Swiper
				ref={ref}
				spaceBetween={50}
				slidesPerView={1}
				loop={true}
				pagination={{ clickable: true }}
				navigation
				autoplay={{ delay: 3000 }}
			>
				<SwiperSlide>
					<img
						style={{
							width: '100%',
							height: '500px',
							objectFit: 'cover'
						}}
						src='https://images.wallpaperscraft.ru/image/single/lampa_rozetka_ideia_120422_3840x2160.jpg'
						alt='img'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						style={{
							width: '100%',
							height: '500px'
						}}
						src='https://images.wallpaperscraft.ru/image/single/figury_svechenie_tochki_381560_1280x720.jpg'
						alt='img'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						style={{
							width: '100%',
							height: '500px'
						}}
						src='https://images.wallpaperscraft.ru/image/single/kot_zhivotnoe_dym_1190449_1280x720.jpg'
						alt='img'
					/>
				</SwiperSlide>
			</Swiper>

			{currentSlide > 0 ? (
				<button className='prev' onClick={handlePrevious}>
					<FcPrevious />
				</button>
			) : (
				<button></button>
			)}
			<button className='next' onClick={handleNext}>
				<FcNext />
			</button>
		</div>
	)
}

export default MySwiper
