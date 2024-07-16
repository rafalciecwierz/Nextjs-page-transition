import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
    const banner1 = document.getElementById("banner-1");
    const banner2 = document.getElementById("banner-2");
    const text = document.getElementById("text");

    if (banner1 && banner2) {
        const tl = gsap.timeline();

        tl.set([banner1, banner2], {
            yPercent: 0
        })
            .set(text, { filter: "blur(0)", opacity: 1 })
            .to([banner1, banner2], {
                yPercent: 100,
                stagger: 0.2
            }).to(text, { filter: "blur(5px)", opacity: 0 }, "<");
    }
}

export const animatePageOut = (href: string, router: AppRouterInstance) => {
    const banner1 = document.getElementById("banner-1");
    const banner2 = document.getElementById("banner-2");
    const text = document.getElementById("text");

    if (banner1 && banner2) {
        const tl = gsap.timeline();


        tl.set([banner1, banner2], {
            yPercent: -100
        })
            .set(text, { filter: "blur(5px)", opacity: 0 })
            .to([banner1, banner2], {
                yPercent: 0,
                stagger: 0.2,
                onComplete: () => {
                    router.push(href);
                }
            }).to(text, { filter: "blur(0)", opacity: 1 }, "<")
    }
}