import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Navigation, EffectFade } from 'swiper';
import '../styles/swiper.css';

const swiperNavPrev = useRef(null);
const swiperNavNext = useRef(null);

const photos = ['banner-1.jpg', 'banner-2.jpg'];

export default function mySwiper() {
	return (
		<div className={styles.container}>
			<Swiper
				modules={[Navigation, EffectFade]}
				// navigation Default
				navigation={{
					prev: swiperNavPrev.current,
					next: swiperNavNext.current,
				}}
				effect={'fade'}
				speed={1000}
				slidesPerView={1}
				loop={true}
				className={styles.myswiper}
				onInit={(swiper) => {
					swiper.params.navigation.prev = swiperNavPrev.current;
					swiper.params.navigation.next = swiperNavNext.current;
					swiper.navigation.init();
					swiper.navigation.update();
				}}
			/>
			{photos.map((photo, i) => (
				<SwiperSlide className={styles.swiperSlide}>
					<img src={`../img/${photo.toString()}`} alt={altName} />
				</SwiperSlide>
			))}

			<div className={styles.swiperNavPrev} ref={swiperNavPrev}></div>
			<div className={styles.swiperNavNext} ref={swiperNavNext}></div>
		</div>
	);
}
