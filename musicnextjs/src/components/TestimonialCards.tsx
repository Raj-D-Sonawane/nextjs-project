'use client'
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
        quote:
            'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
        name: 'Alex Johnson',
        title: 'Guitar Student',
    },
    {
        quote:
            "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
        name: 'Samantha Lee',
        title: 'Piano Student',
    },
    {
        quote:
            "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
        name: 'Michael Chen',
        title: 'Vocal Student',
    },
    {
        quote:
            'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
        name: 'Emily Taylor',
        title: 'Violin Student',
    },
    {
        quote:
            'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
        name: 'Chris Morales',
        title: 'Music Production Student',
    },
];

function MusicSchoolTestimonials() {
    return (
        <div className="relative flex flex-col h-[50rem] w-full items-center justify-center bg-white dark:bg-black">

            {/* ✅ Heading on TOP */}
            <h2 className="z-20 mb-12 text-3xl font-bold text-center">
                Hear our Harmony: Voices of success
            </h2>

            {/* Background grid */}
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:20px_20px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />

            {/* Mask */}
            <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

            {/* ✅ Cards BELOW heading */}
            <div className="relative z-20 w-full max-w-6xl overflow-hidden px-4 sm:px-6 lg:px-8">
                <InfiniteMovingCards
                    items={musicSchoolTestimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    );
}

export default MusicSchoolTestimonials;
