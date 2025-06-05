import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, } from 'swiper';
import PortfolioCard from "../components/PortfolioCard"
import PartnershipButton from "../components/PartnershipButton"
import { portfolioVideosV2 } from "../utils/config"
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { getPortfolioVideos } from '@/api/videos';
import { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const Portfolio = () => {
    const swiperRef = useRef(null);

    const {
        data: portfolioVideos,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['portfolioVideos'],
        queryFn: getPortfolioVideos,
    });


    useEffect(() => {
        if (swiperRef.current && portfolioVideos.length > 0) {
            const middleIndex = Math.floor(portfolioVideos.length / 2);
            swiperRef.current.slideToLoop(middleIndex);
        }
    }, [portfolioVideos]);

    if (isLoading) {
        return <div>Loading portfolio videos...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <div className='max-w-7xl px-8 mt-8 w-full mx-auto pb-5'>
                <Swiper
                    effect={'coverflow'}
                    autoplay={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    // modules={[EffectCoverflow]}
                    className="swiper_container !pb-16"
                >
                    {
                        portfolioVideos.map((portfolioVideo, idx) => {

                            return <SwiperSlide key={idx}>
                                <PortfolioCard portfolioVideo={portfolioVideo} />
                            </SwiperSlide>
                        })
                    }
                </Swiper>
                <div className="flex flex-col items-center gap-20">
                    <div className="flex items-center justify-center mt-4">
                        <Dialog className="bg-red-500">
                            <DialogTrigger asChild>
                                <Button className="z-10  border-1 text-white border border-white px-8 py-3 rounded-[40px] text-[17px] ">View Our Private collection</Button>
                            </DialogTrigger>
                            {/* <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Edit profile</DialogTitle>
                                </DialogHeader>
                                <div className="py-4">
                                    <div className="flex items-center gap-4">
                                        <Label htmlFor="name" className="text-right">
                                            Name
                                        </Label>
                                        <Input
                                            id="name"
                                            defaultValue="Pedro Duarte"
                                            className="col-span-3"
                                        />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button type="submit">Save changes</Button>
                                </DialogFooter>
                            </DialogContent> */}
                        </Dialog>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio